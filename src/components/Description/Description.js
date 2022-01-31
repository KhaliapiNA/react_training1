import React from 'react';
import s from './Description.module.css';

const Description = function(props){
    return(
    <div>
        <img src="https://i.pinimg.com/564x/f9/80/74/f9807403594036b63f0879415458b7d6.jpg" className={s.icon} />
        description
    </div>
    );
}
export default Description;