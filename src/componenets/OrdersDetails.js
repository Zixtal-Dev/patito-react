import React from "react";
import Details from "./Details";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

const OrderDetails=()=>{
    const{vendedor}=useParams();
    const{sucursal}=useParams();
    return(
        <React.Fragment>
            <div>
                <NavBar></NavBar>   
            </div>
            <div>
                <Details></Details>
            </div>
            <div>
                <Link to={"http://localhost:3000/order/"+vendedor+"/"+sucursal} className="btn btn-danger  mb-2">Return</Link>
            </div>
        </React.Fragment>
    );
}

export default OrderDetails;