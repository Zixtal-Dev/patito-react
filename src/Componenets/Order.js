import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import "../componenets/LogIn.css";
import { Link, useParams } from "react-router-dom";
import orderService from '../services/orderService';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
const Order =()=>{
    
    

    const [orders,setOrders] =useState([]);

    const{vendedor}=useParams();
    const{sucursal}=useParams();

    useEffect(()=>{
        orderService.getAllOrders().then(response =>{
            setOrders(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    return(
        <React.Fragment>
        <div>   
            <NavBar></NavBar>
        </div>
        <div className='image-container'>
            <h1>Orders</h1>
        </div>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Seller</th>
                    <th>ClientName</th>
                    <th>IdShop</th>
                    <th>Status</th>                   
                    <th>Details</th>     
                    <th>Update</th>                               
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(
                            order=>
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.seller}</td>
                                <td>{order.clientname}</td>
                                <td>{order.idshop}</td>
                                <td>{order.status}</td>
                                <td>
                                    <Link to={"http://localhost:3000/order/details/"+vendedor+"/"+sucursal+"/"+order.clientid+"/"+ order.id+"/"+order.seller} className="btn btn-primary mb-2">Details</Link>           
                                </td>
                                <td>
                                    <Link to={"http://localhost:3000/order/update/"+vendedor+"/"+sucursal+"/"+order.clientid+"/"+ order.id+"/"+order.seller} className="btn btn-warning mb-2">Update</Link>           
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           <Link to={"http://localhost:3000/home/"+vendedor+"/"+sucursal} className="btn btn-danger  mb-2">Return</Link>
        </div>
        </React.Fragment>
        
    
   );
}

export default Order;