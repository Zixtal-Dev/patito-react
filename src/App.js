import { Route, Routes } from 'react-router-dom';
import LogIn from "./Componenets/LogIn";
import Product from "./Componenets/Product";
import './App.css';
import Order from './Componenets/Order';
import "primereact/resources/themes/lara-light-teal/theme.css"
import Home from './Componenets/Home';

function App() {
  return (
    <div>
     <Routes>   
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/product/:vendedor/:sucursal' element={<Product/>}></Route>
        <Route path='/order/:vendedor/:sucursal' element={<Order/>}></Route>
        <Route path='/home/:vendedor/:sucursal' element={<Home/>}></Route>
        <Route path='*' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
