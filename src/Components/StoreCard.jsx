import React from 'react';
import store1 from '../Assets/store1.webp';
import store2 from '../Assets/store2.jpeg';
//import { Link } from 'react-router-dom';

const StoreCard = () => {
  return (
    <div className='storeCards'>

        <div className="store">
            <h2>Tech Beyond Boundaries.</h2>
            <p>Welcome to TechHub Ltd, where cutting-edge technology meets limitless possibilities. Explore our world of innovation, where every line of code paves the way for groundbreaking solutions. Join us on a journey to redefine the future, one pixel at a time</p>

        </div>

        <div className="store1">
            <img src={store1} alt="" />
            <p>Nigeria Office</p>
           
            
        </div>

        <div className="store1">
            <img src={store2} alt="" />
            <p>Uk Office</p>
           
            
        </div>
        
    </div>
  )
}

export default StoreCard
