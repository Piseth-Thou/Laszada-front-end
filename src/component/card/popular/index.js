import React from 'react'
import './style.css'

function PopularCard (){
    return(
        <>
            <div className="Card">
                <div className="image">
                    <img 
                        alt="img"
                        height="60px"
                        src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png"
                    />
                </div>
                <div className="text">
                    <h6>product name</h6>
                    123456 products
                </div>
            </div>
        </>
    )
}
export default PopularCard ;