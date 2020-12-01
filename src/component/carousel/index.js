import React from 'react';
import { Carousel ,Row ,Col} from 'antd';
import './style.css';
import { Container } from 'reactstrap';
import Media from 'react-media';
import Sibar from '../sibar/index';

export default function Carousels (){
    return(
        <>
        <Container>
            <Row>
                <Col lg={4} md={4}>
                    <div>
                        <Media  query="(min-width: 812px)" 
                            render={() =>
                            (
                                <Sibar />
                            )}
                        />
                    </div>
                </Col>
                <Col lg={20} md={20} sm={24} xs={24}>
                    <Carousel autoplay>
                        <div className="wrap">
                            <div className="item">
                                <img 
                                    alt="jk"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1WEFZ3lr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg"
                                />
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="item">
                                <img 
                                    alt="jk"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1ElmIoCslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg_.webp"
                                />
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="item">
                                <img 
                                    alt="jk"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1sXhxnIieb18jSZFvXXaI3FXa.jpg_1200x1200.jpg"
                                />
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="item">
                                <img 
                                    alt="jk"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1j85ap3gP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg_.webp"
                                />
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        <br/>                      
        </>
    )
}