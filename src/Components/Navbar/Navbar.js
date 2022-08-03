import './Navbar.css'
import Button from '../button/button'
import Cartwidget from '../Cartwidget/Cartwidget'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='options' >
                Las Morenas
                 </div>
                 <div className='cartContainer'>
                    <div className='cartContainer'>
                        <Link className='btn' to='/'>Inicio</Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <Link to={'category/Camisas'} href="#action3">Camisas</Link>
                        <Link to={'category/Sweaters'} href="#action4">Sweaters</Link>
                        <Link to={'category/Pantalones'} href="#action5">Pantalones</Link>
                        </NavDropdown>
                        <Button handleClick={() => console.log('contacto')}>Contacto</Button>
                    </div>
                    <div>
                        <Cartwidget/>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar