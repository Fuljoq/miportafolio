import { useState, useEffect, useRef } from 'react';

export const useAnimateOnScroll = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento entra en la pantalla, actualizamos el estado
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Dejamos de observar el elemento para que la animación no se repita
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Limpiamos el observador cuando el componente se desmonta
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};
