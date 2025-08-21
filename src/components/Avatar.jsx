import React from "react";

const Avatar = () => {
  const profilePic = new URL("../assets/images/rishabh01.jpg", import.meta.url).href;

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
      <div className="w-full h-full rounded-full border-4 border-emerald-200 shadow-xl overflow-hidden hover:scale-105 transition-transform">
        <img
          src={profilePic}
          alt="Rishabh Riyal"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white"></div>
    </div>
  );
};

export default Avatar;