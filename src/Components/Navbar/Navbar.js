import './Navbar.css'
import Button from '../button/button'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='options' >
                Las Morenas
            </div>
            <div className='options'>
                <Button handleClick={() => window.location.href=''}>Inicio</Button>
                <Button handleClick={() => console.log('productos')}>Productos</Button>
                <Button handleClick={() => console.log('contacto')}>Contacto</Button>
            </div>
        </nav>
    )
}

export default Navbar