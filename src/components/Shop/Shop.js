import React, { useEffect, useState } from 'react';
import './Shop.css'
import Laptop from '../Laptop/Laptop';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
    const [laptops, setLaptops] = useState([]);
    const [addedLaptop, setAddedLaptop] = useState([]);

    // calling api
    useEffect(() => {
        fetch('fakedata.json')
            .then(request => request.json())
            .then(response => setLaptops(response))
    }, []);


    // add to item in addedLaptop
    const handleAddToClick = (laptop) => {
        let searchLaptop = addedLaptop.find(search => search.id === laptop.id);

        if (searchLaptop) {
            alert("You are already add this item !! Please add another item");
        } else {
                if (addedLaptop.length < 4) {
                setAddedLaptop([...addedLaptop, laptop]);  
             } else {
                alert("You can not added more than four items")
            }
        }
    }


    // remove item which item deleted
    const handleRemoveItem = (deleteItem) => {
        const searchDeleteItem = addedLaptop.filter(deleteLaptop => deleteItem.id !== deleteLaptop.id);
        setAddedLaptop(searchDeleteItem);
    }
// remove all item for choose again
    const handleChooseAgain=()=>{
        setAddedLaptop([]);
    }
  
    // generate random number
    const randomNumber = number => {
        const num = Math.round(Math.random() * (number - 1));
        if (num === undefined) {
            randomNumber(number);
        } else {
            return num;
        }
    }

    // choose lucky one
    const chooseLuckyOne = laptop => {
       
        if (laptop.length !== 0) {
            const randNum = randomNumber(laptop.length);
            const luckyLaptop = addedLaptop.find(luckyOne => luckyOne.id === laptop[randNum].id);
            setAddedLaptop([luckyLaptop]);
        }
    }

    return (
        <div className='box-container'>
            <div className='grid-container'>
                {
                    laptops.map(laptop => <Laptop
                        laptop={laptop}
                        handleAddToClick={handleAddToClick}
                        key={laptop.id}
                    ></Laptop>)
                }
            </div>
            <div className="side-bar">

                <Sidebar 
                addedLaptop={addedLaptop} 
                handleRemoveItem={handleRemoveItem}
                handleChooseAgain={handleChooseAgain}
                chooseLuckyOne={chooseLuckyOne}
                > </Sidebar>

            </div>
        </div>
    );
};

export default Shop;