import AcercaDe from "../components/AcercaDe"
import Contacto from "../components/Contacto"
import Registro from "../components/Registro"
import Servicios from "../components/Servicios" 
import Home from "../pages/Home"
import Login from "../pages/Login"

export let enrutador = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/servicios',
        element: <Servicios />
    },
    {
        path: '/registro',
        element: <Registro />
    },
    {
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/acerca_de',
        element: <AcercaDe />
    },
]