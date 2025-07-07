import {useState , useEffect} from "react";
import React from "react";
import  PantallaCarga  from './components/PantallaCarga.jsx';
import { useAnimateOnScroll } from './hooks/useAnimateOnScroll';
import './App.scss';

function App() {
  // Hook de animación para cada sección
  const [projectsRef, projectsIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [skillsRef, skillsIsVisible] = useAnimateOnScroll({ threshold: 0.1 });
  const [contactRef, contactIsVisible] = useAnimateOnScroll({ threshold: 0.1 });

  const skills = [
    { name: 'HTML', level: 5, icon: 'devicon-html5-plain colored' },
    { name: 'CSS', level: 5, icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', level: 5, icon: 'devicon-javascript-plain colored' },
    { name: 'React', level: 4, icon: 'devicon-react-original colored' },
    // Puedes agregar más habilidades aquí
  ];
  const [lightMode, setlightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  return (
    <>
       <PantallaCarga /> 

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <header>
        <h1>Mi Portafolio</h1>
      <a href="/CVOrlandauRossoJoaquin.pdf" target="_blank" rel="noopener noreferrer">
  <button className="cv-button">📄 Ver CV</button>
</a>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <button onClick={() => setlightMode((prev) => !prev)}>
                {lightMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="seccion">
        <h2>Bienvenido</h2>
        <p>Hola, soy Joaquín Orlandau Rosso. Desarrollador Front-End. Apasionado por crear soluciones web modernas y funcionales</p>
      </section>

      <section id="proyectos" className={`seccion ${!projectsIsVisible ? 'hidden' : ''}`} ref={projectsRef}>
        <h2>Proyectos</h2>

        <div className="proyecto">
          <h3>Proyecto 1 - Marssela Rosso</h3>
          <p>Lenguajes utilizados:</p>
          <div className="tecnologias-proyecto">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-sass-original colored"></i>
          </div>
          <div className="botones-proyecto">
            <a
              href="https://github.com/Fuljoq/Pf-Coderhouse.git"
              target="_blank"
              className="boton-proyecto"
            >
              Ver en GitHub
            </a>
            <a
              href="https://marsselarosso.netlify.app"
              target="_blank"
              className="boton-proyecto"
            >
              Ver Página
            </a>
          </div>
        </div>

        <div className="proyecto">
          <h3>LandaGtf</h3>
          <p>Una aplicación web moderna desarrollada con tecnologías frontend</p>
          <p>Lenguajes utilizados:</p>
          <div className="tecnologias-proyecto">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div className="botones-proyecto">
            <a
              href="https://github.com/Fuljoq/LandaGtf.git"
              target="_blank"
              className="boton-proyecto"
            >
              Ver en GitHub
            </a>
            <a
              href="https://landagtf.netlify.app"
              target="_blank"
              className="boton-proyecto"
            >
              Ver Página
            </a>
          </div>
        </div>

        <div className="proyecto">
          <h3>Proyecto 3</h3>
          <p>Mi Primer repositorio en backend</p>
          <a href="https://github.com/Fuljoq/preentrega1backend.git" target="_blank">
            Ver en GitHub
          </a>
        </div>
      </section>

      <div id="sobre-mi" className="descripcion-container">
        <img
          src="./imgs/foto-curriculum.jpg"
          alt="Foto de perfil de Joaquín Orlandau Rosso"
          className="descripcion-container__imagen"
        />
        <div className="descripcion-container__textos">
          <p className="descripcion-container__textos__p">
            Desarrollador Front End Junior especializado en la creación de interfaces web modernas y responsivas.
          </p>
          <p className="descripcion-container__textos__p">
            Mi experiencia en desarrollo Front End incluye:
            - Desarrollo de aplicaciones web con React.js
            - Diseño y maquetación con HTML5 y CSS3
            - Implementación de estilos con SASS
            - Creación de componentes reutilizables
          </p>
        </div>
      </div>

      <section id="habilidades" className={`seccion ${!skillsIsVisible ? 'hidden' : ''}`} ref={skillsRef}>
        <h2>Habilidades</h2>
        <div className="habilidades-container">
          {skills.map((skill, index) => (
            <div key={index} className="habilidad-item">
              <h3><i className={skill.icon}></i> {skill.name}</h3>
              <div className="progress-bar">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`progress-segment ${i < skill.level ? 'filled' : ''}`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className={`seccion ${!contactIsVisible ? 'hidden' : ''}`} ref={contactRef}>
        <h2>Contacto</h2>
        <p>Podes contactarme en mis redes o mi wssp.</p>
        <div className="redes-sociales">
          <a href="https://github.com/Fuljoq" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/joaquin-orlandau-rosso/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/joaquin_orlandau" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/+5491134372005" target="_blank">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="mailto:joaquin.orlandau.rosso@hotmail.com" target="_blank">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Mi Portafolio</p>
      </footer>
    </>
  );
}

export default App;