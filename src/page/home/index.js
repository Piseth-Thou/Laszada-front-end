import React from 'react';
import './style.css';
import { Container } from 'reactstrap';
import { Row ,Col} from 'antd';

//component 
import Carousel from "../../component/carousel";
import Owl from '../../component/owl';
import FlashCard from '../../component/card/flash-sale-card';
import PopularCard from '../../component/card/popular';
import CollectionCard from '../../component/card/collection';
import LazzMall from '../../component/card/LazzMall';
import CategoryCard from '../../component/card/category';


const i = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17];
function Home ()
{
    return(
        <>
            <Carousel />
            <div className="content">
                <Container>
                    <Owl /> <br/>
{/* ------------------------------Flash Sale--------------------------------------- */}
                    <Row><h6>Flash Sale</h6></Row><br/>
                    <div style={{backgroundColor:'white'}}>
                        <Row style={{padding:'5px'}}>
                            <div style={{width:'100%'}}>
                                <p style={{fontSize:'13px',color:'orange',float:'left'}}>
                                    On Sale Now
                                </p>
                                <p style={{fontSize:'10px',color:'orange',float:'right',padding:'5px',border:'1px solid orange',cursor:'pointer'}}>
                                    SHOP ALL PRODUCTS
                                </p>
                            </div>
                        </Row>
                        <Row>
                            {i.map((value) => {
                                return (value < 7) && (
                                    <Col lg={4} md={4} sm={12} xs={12}>
                                        <FlashCard />
                                    </Col>
                                )
                            })}
                        </Row>
                    </div> <br/>
    {/* ---------------------------Most Popular-------------------------- */}
                    <Row><h6>Most Popular</h6></Row><br/>
                    <Row>
                        <Col lg={4} md={4}>
                            <FlashCard />
                        </Col>
                        <Col lg={20} md={20}>
                            <Row>
                                {i.map((v)=>{
                                    return (v < 9) && (
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <PopularCard />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row><br/>
    {/* -------------------------------Collections-------------------- */}
                    <Row>
                        <div style={{width:'100%'}}>
                            <h6 style={{float:'left'}}>Collections</h6>
                            <h6 style={{float:'right',cursor:'pointer',fontSize:'12px',color:'orange'}}>Show More > </h6>
                        </div>
                    </Row><br/>
                    <Row gutter={[4,4]}>
                        {i.map((value) => {
                            return value < 9 &&(
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <CollectionCard />
                                </Col>
                            )
                        })}
                    </Row><br/>
    {/* ----------------------------------------LazMall------------------------- */}
                    <Row>
                        <div style={{width:'100%'}}>
                            <h6 style={{float:'left'}}>LazMall</h6>
                            <h6 style={{float:'right',cursor:'pointer',fontSize:'12px',color:'orange'}}>Show More > </h6>
                        </div>
                    </Row><br/>
                    <Row gutter={[4,4]}>
                    {i.map((value) => {
                            return (value < 7) && (
                                <Col lg={4} md={4} sm={12} xs={12} >
                                    <LazzMall />
                                </Col>
                            )
                        })}
                    </Row><br/>
    {/* --------------------------------------Category-------------------------------------- */}
                    <Row>
                        <div style={{width:'100%'}}>
                            <h6 style={{float:'left'}}>Category</h6>
                        </div>
                    </Row><br/>
                    <Row gutter={[2,2]}>
                        {i.map((value) => {
                                return(
                                    <Col lg={3} md={3} sm={12} xs={12} >
                                        <CategoryCard />
                                    </Col>
                                )
                            })}
                    </Row><br/>
        {/* -------------------------------------Just For You------------------  */}
                        <Row>
                            <div style={{width:'100%'}}>
                                <h6 style={{float:'left'}}>Just For You</h6>
                            </div>
                        </Row><br/>
                        <Row gutter={[2,2]}>
                            {i.map((value) => {
                                return  (
                                    <Col lg={4} md={4} sm={12} xs={12}>
                                        <FlashCard />
                                    </Col>
                                )
                            })}
                        </Row>        
                </Container>
            </div>
        </>
    )
}
export default Home;