import React from 'react';
import { Card } from 'antd';
import './style.css';

const { Meta } = Card;
export default function FlashCard(){
    return(
        <>
            <Card
                hoverable
                style={{ width: "100%",padding:'10px'}}
                cover={
                    <img 
                        alt="example" 
                        src="https://cobblestone.me/wp-content/plugins/photonic/include/images/placeholder-Sm.png" 
                    />
                }
            >
                <Meta 
                    title="Europe Street beat" 
                    description="www.instagram.com" 
                /> 
                
            </Card>
        </>
    )
}