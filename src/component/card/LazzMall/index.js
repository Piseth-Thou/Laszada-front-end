import React from 'react';
import './styles.css';

function LazzMall (){
    return(
        <>
            <div className="laz_mall">
                <div style={{height:'140px'}}>
                    <div className="cover">
                        <img 
                            alt="example"
                            src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png" 
                        />
                        <div className="profile">
                            <img 
                                alt="example"
                                src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png" 
                            />
                        </div>
                    </div>
                </div>
                <div className="text">
                    <p>JEETEE
                        <span><br/>
                            description
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}
export default LazzMall;