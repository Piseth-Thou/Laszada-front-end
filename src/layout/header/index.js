import React from 'react';
import {Container } from 'reactstrap';
import {Row , Col } from 'antd';
import '../layout.css';
import Media from 'react-media';
import {ShoppingCartOutlined} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';


export default function Header  (){
    return(<>
            <div className="header">
                <div className = "top-header">
                    <Container>
                        <ul>
                            <li style={{color:'black'}}>SAVE MORE ON APP</li>
                            <li style={{color:'black'}}>SELL ON LAZADA</li>
                            <li>COSTUMER CARE</li>
                            <li>TRACK MY ORDER</li>
                            <li>LOGIN</li>
                            <li>SIGNUP</li>
                            <li>TUKAR BAHASA</li>
                        </ul>
                    </Container>
                </div>
                <div className="main-header">
                    <Container>
                        <Row>
                            <Col lg={4} md={4}>
                                <img alt="logo"
                                    height="40px" 
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1HKyxaMFY.1VjSZFqXXadbXXa.png" 
                                />
                            </Col>
                            <Col lg={15} md={15}>
                                <Search placeholder="search in lazada"></Search>
                            </Col>
                            <Col lg={2} md={2}>
                                <ShoppingCartOutlined style={{fontSize:'35px',marginLeft:'25px'}}/>
                            </Col>
                            <Col lg={3} md={3}>
                                <img alt="wallet"
                                height="34px"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB19FLZi8r0gK0jSZFnXXbRRXXa.png"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{width:'100%',background:'white',padding:'5px 0'}}>
                    <Media query="(max-width: 812px)" render={() =>
                        (
                            <Container>
                                <Search placeholder="search in lazada"></Search>
                            </Container>
                        )}
                    />
                </div>
            </div>
    </>)
}