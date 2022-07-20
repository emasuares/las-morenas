import './Navbar.css'
import Button from '../button/button'
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='options' >
                Las Morenas
                 </div>
                 <div className='cartContainer'>
                    <div>
                        <Button handleClick={() => window.location.href=''}>Inicio</Button>
                        <Button handleClick={() => console.log('productos')}>Productos</Button>
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