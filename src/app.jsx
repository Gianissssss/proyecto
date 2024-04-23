import logo from './assets/logoflores.png'
import banner from './assets/bannerplantas.jpg'
import './App.css'
export function App() {
    return (

        <><div className="navbar">
            <img className="nav-img" src={logo} alt="Icon" />
            <a className="nav-a" href="#">Inicio</a>
            <a className="nav-a" href="#">Productos</a>
            <a className="nav-a" href="#">Contacto</a>
        </div>
        <div className='container'>
            <div className='ppal'>
                <img className='ppal-img' src={banner} alt="" />
            </div>
            <div className='aside'>
                <ul className='as-ul'>
                    <li ><a className='as-li' href="#">Element 1</a></li>
                    <li ><a className='as-li' href="#">Element 2</a></li>
                    <li ><a className='as-li' href="#">Element 3</a></li>
                    <li ><a className='as-li' href="#">Element 4</a></li>
                </ul>
            </div>
        </div>
            <div className='footer'>
                <a className='footer-a' href="#">Inicio</a>
                <a className='footer-a' href="#">Productos</a>
                <a className='footer-a' href="#">Contacto</a>
            </div>
        </>
    )
}