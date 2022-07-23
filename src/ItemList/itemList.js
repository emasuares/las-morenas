import Item from "../Item/Item"


const Itemlist= ({products}) => {
    return (
        <div >
           <Item products={products}/> 
        </div>  
    )
}

export default Itemlist