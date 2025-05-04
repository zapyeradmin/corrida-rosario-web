
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={scrolled 
              ? "/lovable-uploads/3bab835a-eef4-420d-ae8f-958b16e9e79d.png" 
              : "/lovable-uploads/ada29a0d-f12b-4ddc-96eb-75026e127dda.png"
            } 
            alt="Corrida das Famílias Logo" 
            className="h-10 md:h-12 transition-all duration-300"
          />
        </a>

        <div className="hidden md:flex gap-6 items-center">
          <nav>
            <ul className="flex gap-6">
              {['Início', 'Sobre', 'Percurso', 'Inscrição', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-race-primary font-medium link-underline`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#inscrição" className="btn btn-accent btn-md rounded-full">
            Inscreva-se
          </a>
        </div>

        <button 
          className={`md:hidden ${scrolled ? 'text-race-primary' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container-custom">
            <ul className="flex flex-col gap-4">
              {['Início', 'Sobre', 'Percurso', 'Inscrição', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-race-primary block py-2 px-4 font-medium"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#inscrição" 
                  className="btn btn-primary btn-md w-full mt-2"
                  onClick={toggleMenu}
                >
                  Inscreva-se
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
