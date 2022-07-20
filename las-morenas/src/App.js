
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/counter/counter'
import ItemListContainer from './Components/itemListContainer/itemListContainer';


function App() {
  const handleOnAdd=(stock,quantity)=>{
    if (stock!=0){
      console.log("Items Agregados Al Carrito", quantity)
    }else{
      console.log("No hay stock de este producto")
    }
  }


  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greetings='HOLA CODERS'/>
        <Counter initial={1} stock= {0} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
