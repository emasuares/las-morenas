import ItemDetail from "../ItemDetail/ItemDetail"; 
import { useEffect,useState } from "react";
import { getItem } from "../../asyncMock";

const GetItemDetail=()=>{
    const [loading,setLoading]=useState(true)
    const [item,setItem]=useState({})
    useEffect(()=>{
        getItem().then(Response=>{
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