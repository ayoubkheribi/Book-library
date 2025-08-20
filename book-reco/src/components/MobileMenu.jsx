import { Link } from 'react-router-dom';

const  MobileMenu = ({menuOpen, setMenuOpen}) => {
  
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.6)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focuse:outline-none corsor-pointer">
        &times;
      </button>
      <Link to="/" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</Link>
      <Link to="About" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</Link>
    </div>
  );
    
};

export default MobileMenu;