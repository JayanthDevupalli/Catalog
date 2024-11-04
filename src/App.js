import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Catalog } from "./components/Catalog";
import { Cart } from "./components/Cart";
import { Register } from "./components/Register";
import { Login } from "./components/Login";


function App() {
  return (

    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Catalog/>} />
          <Route path="/cart"  element={<Cart/>} />

          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
