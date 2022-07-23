import props from '../../App'
import { getProducts } from '../../asyncMock'
import { useEffect,useState } from 'react'
import Itemlist from '../../ItemList/itemList' 


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
        <div>
            <h1>{greetings}</h1>
            <Itemlist products={products}/>
        </div>

    )
}

export default ItemListContainer