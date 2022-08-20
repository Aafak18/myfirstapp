import React from 'react';


function Dine(props){
    return(
        <div>
            <h1>We are having {props.dishName}</h1>
            <h2>And for the sweet we are having {props.sweetDish}</h2>
            <p>Though we do not like sweets</p>
        </div>
    )
}
export default Dine;