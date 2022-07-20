import {useState} from 'react'

const Counter =({initial,stock,onAdd}) => {
    const [count, setcount ] = useState(1)

    const increment =() =>{
        if (count<stock && stock!=0){
            setcount(count+1)
        }
        
    }

    const decrement =() =>{
        if (count>initial && stock!=0) {
            setcount(count-1)
        }
        
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick ={increment}>+</button>
            <button onClick={()=>onAdd(stock,count)}>Agregar al Carrito</button>
        </div>
    )
}

export default Counter