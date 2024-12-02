import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0, // Debe ser en minúsculas
      behavior: "smooth",
    });
  }, [pathname]); // Se llama cuando `pathname` cambia

  return null;
};

export default ScrollToTop;
