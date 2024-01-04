import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

function NavBar(){

    const{vendedor}=useParams();
    const{sucursal}=useParams();
    
    return(
        <>
        <NavContainer>
            <h2>Patito<span>Store</span></h2>

            <div>
                <a href={"http://localhost:3000/home/"+vendedor+"/"+sucursal}>Home</a>
                <a href={"http://localhost:3000/product/"+vendedor+"/"+sucursal}>New Order</a>
                <a href={"http://localhost:3000/order/"+vendedor+"/"+sucursal}>View Order</a>
                <a href={"http://localhost:3000/"}>Exit</a>
            </div>
        </NavContainer>
        </>
    );
}


export default NavBar;

const NavContainer =  styled.nav`
    h2{
        color:white;
        font-weight:400;
        span{
            font-weight:bold;
        }
    }
    padding:.4rem;
    background-color:#39868B;
    display:flex;
    align-items:center;
    justify-content:space-between;
    a{
        color:white;
        text-decoration:none;
        margin-right:1rem;
    }
`
