import React, { useEffect, useState } from "react";
import Details from "./Details";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderService from "../services/orderService";
import clientService from "../services/clientService";
import OnlyBar from "./OnlyBar"


const ProductDetails=()=>{
    
    const{vendedor}=useParams();
    const{sucursal}=useParams();
    const{orderid}=useParams();
    const{clientid}=useParams();

    const [client,setClient]=useState('');


    const navigate = useNavigate();
    
    
    const curDT = new Date().toISOString();
      

    useEffect(()=>{
        clientService.getClientByID(clientid).then(response =>{
            console.log(orderid);
            setClient(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')

    const saveOrder=(seller,clientname,status,idshop,createat,clientid) =>{
        const Order={seller,clientname,status,idshop,createat,clientid};
        console.log(Order);
        orderService.createOrder(Order).then((response)=>{
            console.log(response.data);
            navigate("/home/"+ vendedor + "/" + sucursal);
        }).catch(error=>{
            console.log(error);
        })
    }

    function saveOrderApp(){
        saveOrder(vendedor,client.clientname,"Pendiente",sucursal,curDT,clientid);
    }
    
    const deletePivot=()=>{
        orderService.deletPivot(orderid).then((response)=>{
            console.log(orderid);
            navigate("/client/"+ vendedor + "/" + sucursal);
        }).catch(error=>{
            console.log(error);
        })
    }

    return(
        <React.Fragment>
            <div>
                <OnlyBar></OnlyBar>
            </div>
            <div>
                <Details></Details>
            </div>
            <div>
                <Link  onClick={()=>saveOrderApp()} className="btn btn-success mb-2">Confirm</Link>
                &nbsp; &nbsp;
                <Link  onClick={()=> deletePivot()} className="btn btn-danger  mb-2">Return</Link>
                
            </div>
        </React.Fragment>
    )
}

export default ProductDetails;