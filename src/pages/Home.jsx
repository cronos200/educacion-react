import "../pages/Home.css";
import MenuLateral from "../components/MenuLateral";

function Home() {
  return (
    <div className="home-container">
      <MenuLateral />
      <div className="content">
        <h1>CodeFutura Academy</h1>
        <p>
          "En CodeFutura Academy, nos apasiona transformar a los estudiantes en
          expertos desarrolladores y creadores de tecnología. Nuestro enfoque
          integral combina teoría y práctica, guiando a cada alumno desde los
          conceptos básicos hasta proyectos avanzados en desarrollo web, móvil,
          inteligencia artificial y más. Con un equipo de instructores
          especializados y un ambiente colaborativo, preparamos a nuestros
          estudiantes para afrontar los desafíos del mundo digital y abrirse
          camino en la industria tecnológica. ¡Tu futuro en programación empieza
          aquí!"
        </p>
      </div>
    </div>
  );
}

export default Home;
