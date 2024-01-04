import NavBar from './NavBar';
import '../index.css';
import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import { Link } from 'react-router-dom';

const Product=()=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        productService.getAllOrders().then(response =>{
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
            <h1>Product</h1>
        </div>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>NameProduct</th>
                    <th>ExistentProduct</th>
                    <th>ListPrice</th>
                    <th>Discount</th>                   
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nameProduc}</td>
                                <td>{product.existentProduct}</td>
                                <td>{product.listPrice}</td>
                                <td>{product.discount}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           <Link to='addclient' className="btn btn-primary mb-2">Add Product</Link>
           &nbsp; &nbsp;
           <Link to='addclient' className="btn btn-success mb-2">Confirm</Link>

        </div>
       </React.Fragment>
    
   );
}

export default Product;