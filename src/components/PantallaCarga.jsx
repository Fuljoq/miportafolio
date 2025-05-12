import React from 'react'; 
import { useState, useEffect } from "react";
import "./PantallaCarga.scss"; // Importar estilos

const PantallaCarga = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return (
    <div className={`loading-screen ${isVisible ? "visible" : "hidden"}`}>
      <h1 className="efectos">Joaquín Orlandau Rosso</h1>
    </div>
  );
};

export default PantallaCarga;