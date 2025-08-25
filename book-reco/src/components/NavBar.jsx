import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const  Navbar = ({menuOpen, setMenuOpen}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl text-black font-bold hover:text-[#753e0e]">Book <span className='text-[#753e0e] hover:text-black'>.Reco</span></Link>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-lg text-black hover:text-gray-700">Home</Link>
            <Link to="/about" className="text-lg text-black hover:text-gray-700">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
    
};

export default Navbar;