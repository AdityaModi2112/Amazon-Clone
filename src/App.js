import Header from './Header';
import Home from './Home';
import './App.css';
import { Route,Routes} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <div className="app" id="back"> 
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="checkout" element={<Checkout/>}/>
      </Routes>
    </div>

  );
}

export default App;
