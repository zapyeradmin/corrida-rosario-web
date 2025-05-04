
import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    };
    
    window.addEventListener('scroll', reveal);
    // Trigger once to reveal elements that are already in view on load
    reveal();
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  
  return null;
};

export default ScrollReveal;
