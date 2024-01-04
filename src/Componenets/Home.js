import NavBar from './Navbar';
import './Home.css';
import duckImage from '../Images/duck.jpg'
import { useParams } from 'react-router-dom';
import React from 'react';

const Home=()=>{
    
    console.log(useParams());
    const{vendedor}=useParams();
    const{sucursal}=useParams();

    return(
        <React.Fragment>
        <div>
            <NavBar></NavBar>
            
           <h1 className='image-container'>
            Welcome Back: {vendedor} to socursal: {sucursal}
            </h1>
        </div>
            <br />
            <br />
        <div  className='image-container'>
            <img  src={duckImage} alt='duckImage'></img>
                 
        </div>
        <div  className='image-container'>
            <h2>Patito Store</h2>
        </div>

        
        </React.Fragment>
        
        
    );
}

export default Home;