import { useEffect } from 'react';

// Marca con `data-visible` cada elemento con `data-reveal` cuando entra
// en pantalla (una sola vez). Es un atributo y no una clase porque React
// reescribe className al re-renderizar (ej. al abrir una tarjeta).
// Los estilos de la animación viven en index.css.
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.setAttribute('data-visible', ''));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', '');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
