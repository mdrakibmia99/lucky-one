import React, { useEffect, useState } from 'react';
import './Shop.css'
import Laptop from '../Laptop/Laptop';

const Shop = () => {
    const [laptops, setLaptops] = useState([]);
    const [laptopClick,setLaptopClick]=useState([]);

    // calling api
    useEffect(() => {
        fetch('fakedata.json')
            .then(request => request.json())
            .then(response => setLaptops(response))
    }, []);
    const handleAddToClick=(laptop)=>{
        setLaptopClick([...laptopClick,laptop]);
    }
    return (
        <div className='box-container'>
        <div className='grid-container'>
            {
                laptops.map(laptop => <Laptop
                laptop={laptop}
                handleAddToClick={handleAddToClick}
                key={laptop.id}
                ></Laptop> )
            }
        </div>
        <div className="side-bar">
            <h4>This is sidebar</h4>
            <h4> Total laptop={laptopClick.length}</h4>
        </div>
    </div>
    );
};

export default Shop;