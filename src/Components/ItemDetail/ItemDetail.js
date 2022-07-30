import Counter from "../counter/counter"

const ItemDetail =({item})=>{
    const handleOnAdd=(stock,quantity)=>{
        if (stock!=0){
          console.log("Items Agregados Al Carrito", quantity)
        }else{
          console.log("No hay stock de este producto")
        }
      }
    return(
        <div>
            <div>
                <img src={item.img}></img>
            </div>
            <div>
                <p>{item.category}</p>
                <p>{item.name}</p>

            </div>
            <div>
            <Counter initial={1} stock= {10} onAdd={handleOnAdd} />
            </div>
        </div>


    )

}

export default ItemDetail