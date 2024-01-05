import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import orderService from "../services/orderService";
import clientService from "../services/clientService";
import "./LogIn.css";

const Details=()=>{
    const{vendedor}=useParams();
    const{sucursal}=useParams();
    const{clientid}=useParams();
    const{orderid}=useParams();
    const{sellername}=useParams();
    
    const [products,setProducts] = useState([]);
    const [saveProducts,setSaveProducts] = useState([]);


    const [client,setClient]=useState('');
    const [total,setTotal]=useState('');

    
    useEffect(()=>{
        orderService.getDetails(orderid).then(response =>{
            console.log(orderid);
            setProducts(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    
    useEffect(()=>{
        clientService.getClientByID(clientid).then(response =>{
            console.log(orderid);
            setClient(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')

    useEffect(()=>{
        orderService.getTotal(orderid).then(response =>{
            console.log(orderid);
            setTotal(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')


    return(
        <React.Fragment>
        <div >
            <h1 className="image-container">Details</h1>
        </div>
        <div >
            <h4 className="image-container">Client Information</h4>
        </div>

        <div  className="image-container">
            <label>{"Client Name: "+ client.clientname}</label>
        </div>
        <div className="image-container">
            <label>{"Adress: "+ client.address}</label>
        </div>
        <div className="image-container">
            <label>{"Phone: "+ client.phone}</label>
        </div>
        <div className="image-container">
            <label>{"Email: "+ client.email}</label>
        </div>
        <br></br>
        <div >
            <h4 className="image-container">Seller Information</h4>
        </div>

        <div  className="image-container">
            <label>{"Seller Name: "+ sellername}</label>
        </div>
        <div>
            <table  className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th>OrderId</th>
                    <th>Name Product</th>
                    <th>Amount</th>
                    <th>ListPrice</th>
                    <th>Discount</th> 
                    <th>Sub Total</th> 

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product=>
                            <tr>
                                <td>{product.orderid}</td>
                                <td>{product.nameproduc}</td>
                                <td>{product.amount}</td>
                                <td>${product.listprice}</td>
                                <td>${product.discount}</td>
                                <td>${product.total}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           <h3 className="image-container2" >{"Total: $"+total}</h3>
          
        </div>
        
        </React.Fragment>
    );
}

export default Details;