import Item from "../Item/Item"


const Itemlist= ({products}) => {
    
    return(
        products.map(prod=><Item key={prod.id}{...prod}/>)
       

    
       
        
    )
    

}

export default Itemlist