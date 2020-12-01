import React from 'react';
import './style.css';

export default function Category (){
    return(
        <>
            <div className="cards">
                <div className="imag">
                    <img 
                        alt="img"
                        src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png"
                    />
                </div>
                <div className="text">
                    product's name
                </div>
            </div>
        </>
    )
}