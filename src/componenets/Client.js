import React, { useEffect, useState } from "react";
import clientService from "../services/clientService";
import NavBar from './NavBar';
import './LogIn.css';
import { Link, useParams } from "react-router-dom";


const Client=()=>{

    const{vendedor}=useParams();
    const{sucursal}=useParams();

    const [clients,setClients] = useState([]);

    useEffect(()=>{
        clientService.getAllOrders().then(response=>{
            setClients(response.data);
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
            <h1>Clients</h1>
        </div>
        <div>
            <table  className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>ClientName</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th> 
                    <th>Action</th>                  
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(
                            client=>
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.clientname}</td>
                                <td>{client.address}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td><Link className="btn btn-success" to={"http://localhost:3000/product/"+ vendedor + "/" + sucursal +"/"+client.id}>Select Client</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
           <Link to='addclient' className="btn btn-primary mb-2">Add Client</Link>
           &nbsp; &nbsp;
           <Link to={"http://localhost:3000/home/"+vendedor+"/"+sucursal} className="btn btn-danger  mb-2">Return</Link>
        </div>
        </React.Fragment>
        
    
   );


}

export default Client;