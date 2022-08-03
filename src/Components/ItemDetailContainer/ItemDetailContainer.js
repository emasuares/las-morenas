import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useEffect,useState } from "react";
import { getItem } from "../../asyncMock";
import { useParams } from "react-router-dom";

const GetItemDetail=()=>{
    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState({})
    const params =useParams()

    useEffect(()=>{
        getItem(params.productId).then(Response=>{
            setItem(Response)
                   
    }).catch(error => {
        console.log(error)
    }).finally(()=>{
        setLoading(false)
    })},[])


    if (loading) {
        return(<h1>Obteniendo detalles del Producto</h1>)
    }

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
        

    )

}
export default GetItemDetail