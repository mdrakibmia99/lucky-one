import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({addedLaptop,handleRemoveItem,handleChooseAgain,chooseLuckyOne}) => {
 
    return (
        <div className='sidebar-area'>
            <h2 className='laptop-count'> Total laptop: {addedLaptop.length}</h2>
            <h3 className='selected-laptop'> Selected Laptops</h3>
             {
                 addedLaptop.map(selectCart => <div key={selectCart.id} className='sidebar-cart' >
                     <img src={selectCart.img_url} alt="" />
                     <p> {selectCart.name}</p>
                     <button  onClick={()=>handleRemoveItem(selectCart)} >   <FontAwesomeIcon icon={faDeleteLeft} />  </button>
                    

                 </div> )
             }
             <div className='btn-group'>
             <button  className='choose-one' onClick={()=>chooseLuckyOne(addedLaptop)}> CHOOSE ONE</button>
             <button className='choose-again' onClick={()=>handleChooseAgain()}>CHOOSE AGAIN </button>
             </div>
        </div>
    );
};

export default Sidebar;