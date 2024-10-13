import React from 'react';

const NavLink = ({ href, title }) => {
  const handleClick = () => {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className="text-white hover:text-slate-400 text-xl"
    >
      {title}
    </button>
  );
};

export default NavLink;
