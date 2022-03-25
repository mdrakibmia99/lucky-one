import React from 'react';
import './Laptop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Laptop = ({laptop,handleAddToClick}) => {
    const {name,model,Memory,price,img_url}=laptop;
    return (
        <div className='grid-item'>
        <div className='car-info'>
            <img src={img_url} alt="car_images" />
            <div className="car-desc">
                <h3><b>Name:</b> {name}</h3>
                <p><b>Model:</b> {model}</p>
                <p><b>RAM:</b> {Memory}</p>
                <p><b>Price:</b> ${price}</p>
                
            </div>
        </div>
        <hr />
        <button onClick={()=>handleAddToClick(laptop)} className='add-cart'>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
    </div>
    );
};

export default Laptop;




