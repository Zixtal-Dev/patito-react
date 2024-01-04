import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import orderService from "../services/orderService";

const Details=()=>{
    const{vendedor}=useParams();
    const{sucursal}=useParams();
    const{clientid}=useParams();
    const{orderid}=useParams();

    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        orderService.getDetails(orderid).then(response =>{
            console.log(orderid);
            setProducts(response.data);
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
            <h3>Details</h3>
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
                    <th>total</th> 

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product=>
                            <tr key={product.orderid}>
                                <td>{product.orderid}</td>
                                <td>{product.nameproduc}</td>
                                <td>{product.amount}</td>
                                <td>{product.listprice}</td>
                                <td>{product.discount}</td>
                                <td>{product.total}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           <Link to={"http://localhost:3000/order/"+vendedor+"/"+sucursal} className="btn btn-danger  mb-2">Return</Link>
        </div>
        
        </React.Fragment>
    );
}

export default Details;