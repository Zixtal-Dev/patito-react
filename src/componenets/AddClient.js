import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import clientService from "../services/clientService";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


const AddClient=()=>{

    const{vendedor}=useParams();
    const{sucursal}=useParams();

    const[id,setId]=useState('')
    const[clientname,setClientname] = useState('')
    const[address,setAddress] = useState('')
    const[phone,setPhone] = useState('')
    const[email,setEmail] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        clientService.getMaxId().then(response =>{
            setId(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    })

    const saveClient=(e) =>{
        e.preventDefault();
        const myclient={clientname,address,phone,email};
        clientService.createClient(myclient).then((response)=>{
            console.log(response.data);
            navigate("/product/"+ vendedor + "/" + sucursal +"/"+id);
        }).catch(error=>{
            console.log(error);
        })
    }

    return(
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className='text-center'>Register new client</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Name:</label>
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    name="clientname"
                                    className="form-control"
                                    value={clientname}
                                    onChange={(e=>setClientname(e.target.value))}
                                    />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Address:</label>
                                <input 
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e=>setAddress(e.target.value))}
                                    />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Phone:</label>
                                <input 
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e=>setPhone(e.target.value))}
                                    />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input 
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e=>setEmail(e.target.value))}
                                    />
                            </div>
                            <button className="btn btn-success" onClick={(e)=>saveClient(e)}>Add New Client</button>
                            &nbsp; &nbsp;
                            <Link to={"http://localhost:3000/client/"+vendedor+"/"+sucursal} className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddClient;