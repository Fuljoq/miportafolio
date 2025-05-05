import  {useState,useEffect} from 'react'
import './App.scss'
import { PantallaCarga } from './components/PantallaCarga.jsx';


function App() {
  const [lightMode, setlightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "light");
    }
  }, [lightMode]);
  return (
    <>
  <PantallaCarga></PantallaCarga>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

<body>
    <header>
        <h1>Mi Portafolio</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li>           <button onClick={() => setlightMode(prev => !prev)}>
                {lightMode ? "☀️" : "🌙"}
          </button></li>
            </ul>
        </nav>
    </header>
    
    <section id="inicio" class="seccion">
        <h2>Bienvenido</h2>
        <p> Al portafolio de Joaquin Orlandau Rosso </p>
    </section>
    <section id="proyectos" class="seccion">
        <h2>Proyectos</h2>
        <div class="proyecto">
            <section id="proyectos" class="seccion">
                <div class="proyecto">
                    <h2>Proyecto 1 - Marssela Rosso</h2>
                    <p>Mi Primera pagina subida al publico</p>
                    <a href="https://github.com/Fuljoq/Pf-Coderhouse.git" target="_blank">Ver en GitHub</a>
                </div>
            
                <div class="proyecto">
                    <h3>Proyecto 2</h3>
                    <p>Uno de los primeros proyectos en mi github</p>
                    <a href="https://github.com/Fuljoq/darius.git"
                    target="_blank">Ver en GitHub</a>
                </div>
            
                <div class="proyecto">
                    <h3>Proyecto 3</h3>
                    <p>mi Primer repositorio en backend</p>
                    <a href="https://github.com/Fuljoq/preentrega1backend.git" target="_blank">Ver en GitHub</a>
                </div>
            
            </section>
        </div>
    </section>
    <div className="descripcion-container">
                <img src="./imgs/foto-curriculum.jpg" alt="" className="descripcion-container__imagen" />
                <div className="descripcion-container__textos">
                <p className="descripcion-container__textos__p" >Cuento con años de experiencia continua en el campo de la programación web, desarrollo de aplicaciones y servicios web en diferentes tecnologías</p>
                <p className="descripcion-container__textos__p" >Mi experiencia en desarrollo de software: Me estoy especializando en Front end y Backend. he realizado webs en Javascript, React, Next,Typescript, Html y Css.</p>
                <p className="descripcion-container__textos__p" >Estoy Buscando mi primera experiencia laboral.</p>
                </div>
                </div>
    <section id="contacto" class="seccion">
        <h2>Contacto</h2>
        <p>Podes contactarme en mis redes o mi wssp.</p>
        <div class="redes-sociales">
            <a href="https://github.com/Fuljoq" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/joaquin_orlandau" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/1134372005" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="mailto:joaquin.orlandau.rosso@hotmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        </div>
        

    </section>
    
    <footer>
        <p>&copy; 2025 - Mi Portafolio</p>
    </footer>
</body>
    </>
  )
}
export default App
