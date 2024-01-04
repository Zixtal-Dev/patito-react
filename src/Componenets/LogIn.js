import {Link} from 'react-router-dom';
import './LogIn.css';
import React, { useState } from "react";
import OnlyBar from './OnlyBar';





function LogIn(){
    const[vendorName,setVendorName] = useState('');
    const[sucursalId,setSucursalId] = useState('');
    
    return(
      <React.Fragment>
        <OnlyBar></OnlyBar>
        <div>
        <h2 className="image-container mylabel">LogIn</h2>
        </div>
        <div className="image-container">
        <form >     
            <label >Nombre del vendedor: </label>
            <input 
              type="text" 
              name="vendorName" 
              value={vendorName}
              autoComplete="off"
              onChange={ev=>setVendorName(ev.target.value)}
              ></input>
            <br />
            <br />
            <label>Id de la sucursal: </label>
            <input 
              type="text" 
              name="sucursalId" 
              value={sucursalId}
              autoComplete="off"
              onChange={ev=>setSucursalId(ev.target.value)} >
              </input>
           
        </form> 
        </div> 
        <br />
        <div className="image-container">
        <Link to ={"/home/"+vendorName+"/"+sucursalId}>
                <button>LogIn</button>
            </Link>
        </div>  
      </React.Fragment>
        
    );

}

export default LogIn;