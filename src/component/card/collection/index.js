import React from 'react';
import './style.css';


export default function ColCard(){
    return(
        <>
            <div className="Cards">
                <div className="text">
                    <p>
                        product name<br/>
                        <span style={{fontSize:'10px'}}>455 products</span>
                    </p>
                </div>
                <div className="image">
                    <li>
                        <img 
                            height="70px"
                            alt="img"
                            src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png"
                        />
                    </li>
                    <li>
                        <img 
                            height="70px"
                            alt="img"
                            src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png"
                        />
                    </li>
                    <li>
                        <img 
                            height="70px"
                            alt="img"
                            src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png"
                        />
                    </li>
                </div>
            </div>
        </>
    )
}