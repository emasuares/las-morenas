import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='options' >
                Las Morenas
            </div>
            <div className='options'>
                <button className='btn'>Inicio</button>
                <button className='btn'>Productos</button>
                <button className='btn'>Contacto</button>
            </div>
        </nav>
    )
}

export default Navbar