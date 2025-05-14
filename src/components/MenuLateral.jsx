import "../components/Menulateral.css";
import { useNavigate } from "react-router-dom";

function Menulateral() {

const navegacion = useNavigate()

  return (
    <div className="sidebar">
      <h1 className="sidebar-header">Home</h1>
      <button className="sidebar-btn" onClick={()=>navegacion('/servicios')}>Servicios</button>
      <button className="sidebar-btn" onClick={()=>navegacion('/contacto')}>Contacto</button>
      <button className="sidebar-btn" onClick={()=>navegacion('/acerca_de')}>Acerca de</button>
      <button className="sidebar-btn" onClick={()=>navegacion('/')}>Cerrar Sesión</button>
    </div>
  );
}

export default Menulateral;
