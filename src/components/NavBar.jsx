import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from './CardWidget';
import logo from "../assets/domus-lake-resorts-logotipo-blanco.png"
import logoMoveile from "../assets/domus-lake-logo-movile.png"
export const NavBar = () => (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Navbar.Brand>
                <img src={logo} alt="logo domus lake" height={50} />    
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="./index.html">HOTEL</Nav.Link>
            <Nav.Link href="./pages/habitaciones.html">HABITACIONES</Nav.Link>
            <Nav.Link href="./pages/terrazanikkei.html">RESTAURANTE</Nav.Link>
            <Nav.Link href="./pages/proyectos.html">PROYECTOS</Nav.Link>
            <Nav.Link href="./pages/contacto.html">CONTACTO</Nav.Link>
            </Nav>
            <CardWidget/>
        </Navbar>
        </>
)