const GITHUB_USERNAME = 'rishabhriyal112'; // Replace with your GitHub username

const fetchReadmeTechStack = async (repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`
    );
    
    if (!response.ok) return [];
    
    const data = await response.json();
    const content = atob(data.content).toLowerCase();
    
    // Extract tech stack from README content
    const techPatterns = [
      'react', 'javascript', 'typescript', 'node.js', 'express', 'mongodb',
      'python', 'django', 'flask', 'streamlit', 'html', 'css', 'tailwind',
      'bootstrap', 'vue', 'angular', 'next.js', 'vite', 'webpack'
    ];
    
    return techPatterns.filter(tech => content.includes(tech));
  } catch (error) {
    console.warn(`Failed to fetch README for ${repoName}:`, error.message);
    return [];
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    // Filter specific repositories
    const targetRepos = ['ecommerce-website', 'Netflix', 'Amazon Clone', 'creation-ground', 'ai_trip_planner', 'Diabetic-Retinopathy-Detection'];
    
    const filteredRepos = repos.filter(repo => targetRepos.some(target => 
      repo.name.toLowerCase().includes(target.toLowerCase()) ||
      target.toLowerCase().includes(repo.name.toLowerCase())
    ));
    
    console.log('All repos:', repos.map(r => r.name));
    console.log('Filtered repos:', filteredRepos.map(r => r.name));
    
    // Fetch README tech stack for each repo
    const reposWithTechStack = await Promise.all(
      filteredRepos.map(async (repo) => {
        const readmeTech = await fetchReadmeTechStack(repo.name);
        const liveDemo = repo.homepage || 
          (repo.has_pages ? `https://${GITHUB_USERNAME}.github.io/${repo.name}` : null);
        
        return {
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || 'No description available',
          image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
          tags: [
            repo.language,
            ...readmeTech,
            ...(repo.topics || [])
          ].filter(Boolean).slice(0, 4),
          link: repo.html_url,
          liveDemo: liveDemo,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: new Date(repo.updated_at).toLocaleDateString()
        };
      })
    );
    
    // Add Creation Ground manually
    const creationGround = {
      title: "Creation Ground",
      description: "No-code ML platform using Streamlit for data upload, model training, and result export with automated EDA. Build and deploy machine learning models without writing code.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      tags: ["Python", "Streamlit", "Machine Learning", "Data Science"],
      link: null,
      liveDemo: "https://creation-ground.streamlit.app/",
      stars: 0,
      forks: 0,
      updated: new Date().toLocaleDateString()
    };
    
    return [creationGround, ...reposWithTechStack];
      
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return getFallbackProjects();
  }
};

// Fallback projects in case API fails
const getFallbackProjects = () => [
  {
    title: "Ecommerce Website",
    description: "E-commerce platform with modern UI and functionality",
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
    tags: ["React", "JavaScript"],
    link: `https://github.com/${GITHUB_USERNAME}/ecommerce-website`,
    liveDemo: null, // Add your deployed URL here
    stars: 0,
    forks: 0,
    updated: "2024-01-01"
  },
  {
    title: "Netflix Clone",
    description: "Netflix streaming platform clone",
    image: "https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg",
    tags: ["React", "JavaScript"],
    link: `https://github.com/${GITHUB_USERNAME}/Netflix`,
    liveDemo: null, // Add your deployed URL here
    stars: 0,
    forks: 0,
    updated: "2024-01-01"
  },
  {
    title: "Creation Ground",
    description: "No-code ML platform using Streamlit",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    tags: ["Python", "Streamlit"],
    link: `https://github.com/${GITHUB_USERNAME}/creation-ground`,
    liveDemo: "https://creation-ground.streamlit.app/",
    stars: 0,
    forks: 0,
    updated: "2024-01-01"
  }
];
