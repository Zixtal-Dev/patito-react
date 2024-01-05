import React, { useEffect, useState } from "react";
import NavBar from "./OnlyBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./LogIn.css"
import orderService from "../services/orderService";
import clientService from "../services/clientService";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

const UpdateOrder=()=>{

    const navigate = useNavigate();


    const{orderid}=useParams();
    const{clientid}=useParams();
    const{vendedor}=useParams();
    const{sucursal}=useParams();

    const [order,setOrder]=useState('');
    const [deleteEnabled,setDeleteEnabled]=useState('');
    const [client,setClient]=useState('');

    const saveOrder=(seller,status,idshop,createat,clientid) =>{
        const Order={seller,status,idshop,createat,clientid};
        console.log(Order);
        orderService.updateOrderByID(orderid,Order).then((response)=>{
            console.log(response.data);
            navigate("/order/"+vendedor+"/"+sucursal);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        orderService.getFindOrder(orderid).then(response =>{
            console.log("OrderID:"+orderid);
            setOrder(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')

    useEffect(()=>{
        orderService.DeleteEnabled(orderid).then(response =>{
            console.log("OrderID:"+orderid);
            setDeleteEnabled(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')
  
    useEffect(()=>{
        clientService.getClientByID(clientid).then(response =>{
            console.log(order.clientid);
            setClient(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },'')

    function UpdateOrderStatus(status){
        order.clientname=client.clientname;
        console.log(order);
        saveOrder(order.seller,status,order.idshop,order.createat,order.clientid);

        console.log(status);

    }

    return(
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="image-container">
                <h1>Oder</h1>
            </div>
            <div  className="image-container">
                <h4>{"Id: " + order.id}</h4>
            </div>
            <div  className="image-container">
                <h4>{"Seller: " + order.seller}</h4>
            </div>
            <div  className="image-container">
                <h4>{"Client Id: "+ order.clientid}</h4>
            </div>
            <div  className="image-container">
                <h4>{"Client Name: "+  client.clientname}</h4>
            </div>
            <div  className="image-container">
                <h4>{"Id Shop: "+ order.idshop}</h4>
            </div>
            <div  className="image-container">
                <h4>{"Create At: "+order.createat}</h4>
            </div>
            <div className="image-container">
            <Dropdown autoClose>
                <DropdownToggle>
                    Status
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem  onClick={()=>UpdateOrderStatus("Pendiente")}>Pendiente</DropdownItem>
                    <DropdownItem  onClick={()=>UpdateOrderStatus("Entregado")}>Entregado</DropdownItem>
                    <DropdownItem disabled={deleteEnabled} onClick={()=>UpdateOrderStatus("Cancelado")}>Cancelado</DropdownItem>

                </DropdownMenu>
           </Dropdown>
            </div>
            <br />
            <div  className="image-container">
                <Link to={"http://localhost:3000/order/"+vendedor+"/"+sucursal} className="btn btn-danger  mb-2">Return</Link>
            </div>
        </React.Fragment>
    )
}

export default UpdateOrder;