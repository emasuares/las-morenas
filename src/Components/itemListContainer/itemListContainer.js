import props from '../../App'
import { getProducts } from '../../asyncMock'
import { useEffect,useState } from 'react'
import Itemlist from '../ItemList/itemList' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemListContainer =({greetings}) => {
    const [loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProducts().then(Response=>{
            setProducts(Response)        
    }).catch(error => {
        console.log(error)
    }).finally(()=>{
        setLoading(false)
    })},[])


    if (loading) {
        return(<h1>Cargando Productos</h1>)
    }

    return(
        <Container >
            <h1>{greetings}</h1>
            <Row>
            <Itemlist products={products}/>
            </Row>
        </Container>

    )
}

export default ItemListContainer