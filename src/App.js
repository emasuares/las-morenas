
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/counter/counter'
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItemDetail from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail';


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
        <ItemListContainer greetings='Productos'/>
        <GetItemDetail/>
    </div>
  );
}

export default App;
