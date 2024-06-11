import {useState} from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () =>{
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
    <div className="nav-content">
        <ul className="ul-content" >
            <Link spy={true} smooth={true} to="Home">
            <li className="li-content">INICIO</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
            <li className="li-content">Sobre Mí</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
            <li className="li-content">Servicios</li>
            </Link>
            <Link spy={true} smooth={true} to="Proyects">
            <li className="li-content">Proyectos</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
            <li className="li-content">Contactame</li>
            </Link>
        </ul>
    </div>

    </>
    return (
        <nav>
            <div className="nav">
                <div className="nav-logo">
                    <span className="spn-logo">Logo</span>
                </div>
                <div className="nav-link">
                    <div className="links">
                        <ul className="ul-link">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="li-nav">Inicio</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="About">
                                <li className="li-nav">Sobre mi</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="Services">
                                <li className="li-nav">Servicios</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="Proyects">
                                <li className="li-nav">Proyectos</li>
                            </Link>
                            <Link spy={true} smooth={true}  to="Contact">
                                <li className="li-nav">Contacto</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="btn-nav" onClick={handleClick}>
                    {click  ? <FaTimes/>  : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default Nav;