import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            {/* question 1 */}
            <div className='question-answer'>
            <h2> Props Vs State </h2>
            <p>Props are immutable. State is mutable.</p>
            <p >Props are used to transfer data from one component to another component. State is local data storage , state can not be passed to another component.</p>
            <p>Props have better performance . State has worse performance.</p>
            <p>props pass data to child components. state pass it down with props instead.</p>
            </div>
           
           {/* question 2 */}
            <div className='question-answer'>
            <h2>How does React work??? </h2>
            <p >React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets us compose small and isolated code which known as components. Such as: Header, Content and Footer we write in coded form of JavaScript which let in VirtualDOM and from that deep dive it change to UI which accessed with HTML code format. Which a user can see as UI.</p>
            </div>
            

            {/* question 3 */}
            <div className='question-answer'>
            <h2>How does useState works??? </h2>
            <p >The useState() is a Hook that allows us to have state variables in functional components. We pass the initial state to this function and it returns a variable with the current state value and approach another function to update this value. It's hard to reuse stateful logic between components but useState() can make it easy through React JS. It also let us changing our component hierarchy. Even this hooks let you split one component into smaller functions based on what pieces are related.
</p>
            </div>
       


          

        </div>
    );
};

export default Question;