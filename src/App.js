
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/counter/counter'
import ItemListContainer from './Components/itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greetings='HOLA CODERS'/>
        <Counter/>
    </div>
  );
}

export default App;
