import NavBar from './NavBar';
import '../index.css';
import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import { Link, useParams } from 'react-router-dom';
import orderService from '../services/orderService';

const Product=()=>{
    const{vendedor}=useParams();
    const{sucursal}=useParams();
    const{clientid}=useParams();
    const [maxId,setMaxId]=useState('');


    const [products,setProducts] = useState([]);

    const saveClient=(orderid,productid,amount) =>{
        const myPivot={orderid,productid,amount};
        console.log(myPivot);
        orderService.createPivot(myPivot,orderid,productid).then((response)=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        orderService.getMaxId().then(response =>{
            setMaxId(response.data);
        }).catch(error=>{
            console.log(error);
        })
    })

    useEffect(()=>{
        productService.getAllOrders().then(response =>{
            setProducts(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    function SaveObject(productid,myMaxId) {
        console.log(productid,myMaxId);
        saveClient(myMaxId,productid,1);
    }

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
                    <th>Add</th>                  
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product=>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nameProduct}</td>
                                <td>{product.existentProduct}</td>
                                <td>{product.listPrice}</td>
                                <td>{product.discount}</td>
                                <td>
                                  <button disabled={product.isbtnenabled} className='btn btn-primary' onClick={(event)=>SaveObject(product.id,maxId)}>Add Product</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           &nbsp; &nbsp;
           <Link to={"http://localhost:3000/product/details/"+vendedor+"/"+sucursal+"/"+clientid+"/"+ maxId+"/"+vendedor} className="btn btn-success mb-2">Confirm</Link>
           &nbsp; &nbsp;
           <Link  to={  "http://localhost:3000/client/"+vendedor+"/"+sucursal}  className="btn btn-danger  mb-2">Return</Link>

        </div>
       </React.Fragment>
    
   );
}

export default Product;