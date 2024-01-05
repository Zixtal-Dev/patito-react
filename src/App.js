import { Route, Routes } from 'react-router-dom';
import LogIn from "./componenets/LogIn";
import Product from "./componenets/Product";
import './App.css';
import Order from "./componenets/Order";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './componenets/Home';
import Client from './componenets/Client';
import AddClient from './componenets/AddClient';
import OrderDetails from './componenets/OrdersDetails'
import ProductDetails from './componenets/ProductDetails'
import UpdateOrder from './componenets/UpdateOrder'

function App() {
  return (
    <div>
     <Routes>   
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/product/:vendedor/:sucursal/:clientid' element={<Product/>}></Route>
        <Route path='/order/details/:vendedor/:sucursal/:clientid/:orderid/:sellername' element={<OrderDetails/>}></Route>
        <Route path='/order/update/:vendedor/:sucursal/:clientid/:orderid/:sellername' element={<UpdateOrder/>}></Route>
        <Route path='/product/details/:vendedor/:sucursal/:clientid/:orderid/:sellername' element={<ProductDetails/>}></Route>
        <Route path='/order/:vendedor/:sucursal' element={<Order/>}></Route>
        <Route path='/home/:vendedor/:sucursal' element={<Home/>}></Route>
        <Route path='/client/:vendedor/:sucursal' element={<Client/>}></Route>
        <Route path='/client/:vendedor/:sucursal/addclient' element={<AddClient/>}></Route>


        <Route path='*' element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
