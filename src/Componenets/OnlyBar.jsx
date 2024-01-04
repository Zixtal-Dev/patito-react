import React from "react";
import styled from "styled-components";

function OnlyBar(){
    
    return(
        <>
        <NavContainer>
            <h2>Patito<span>Store</span></h2>       
        </NavContainer>
        </>
    );
}


export default OnlyBar;

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
