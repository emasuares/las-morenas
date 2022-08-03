
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetItemDetail from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greetings='Todos Nuestros Productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greetings='Productos'/>}></Route>
          <Route path='/detail/:productId' element={<GetItemDetail/>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
