import React from 'react';
import '../layout.css';
import {Container} from 'reactstrap';
import {Row ,Col} from 'antd';
import {LinkedinOutlined,FacebookFilled ,TwitterCircleFilled,InstagramFilled,YoutubeFilled } from '@ant-design/icons';

const images =[
    'https://entrackr.com/wp-content/uploads/2019/04/Mastercard.jpg',
    'https://pngimage.net/wp-content/uploads/2018/05/business-visa-png-6.png',
    'https://i0.wp.com/moneysense.ph/wp-content/uploads/2019/05/Maybank-Credit-Cards.jpg?resize=750%2C384',
    'https://images.contentstack.io/v3/assets/bltcf46bbde1704bd18/blt45ea081fb3b6dd38/5f9933271a81c1644e9965a0/CC-Image-CIMB-eCC-01.png?quality=70',
    'https://img1.oto.com.vn/crop/620x383/2019/02/19/pTBR3JY9/vay-mua-o-to-tai-hongleong-bank-oto-com-vn-1-e110.png',
    'https://i.ytimg.com/vi/OLv7bMAjLts/maxresdefault.jpg',
    'https://www.scotiabank.com/content/dam/scotiabank/canada/en/card-arts/BNSUSDollar_Visa_ENG.png',
    'https://www.53.com/content/dam/fifth-third/brand/card/cc-secured.jpg',
    'https://www.bbvausa.com/content/dam/bbva/usa/en/photos/checking-and-savings/clearpoints-card-gateway-sm.png',
    'https://www.ababank.com/fileadmin/user_upload/Payment_Cards/Visa_Virtual_2020_FA.png',
    'https://money.imgix.net/uswitch-assets-eu/amp/images/credit-card/logos/barclaycard_forward_02122019.png',
    'https://www.rbcroyalbank.com/credit-cards/app/assets/cards/iav_infiniteavion_en_sm@2x.png',
    // Delivery Services 
    'https://lex.ph/images/common/my-logo.png',
    'https://chinapost-track.com/cdn/images/carriers/thumbnails/0068-lazada-elogistics-lel.png',
    'https://s3-ap-southeast-1.amazonaws.com/easyparcel-static/Public/source/general/img/couriers/Ninjavan.jpg',
    'https://play-lh.googleusercontent.com/l2UVOskZG9iJyMFJ3SlRKZCiVcUNpD8i9UL81rxz7jOMgycjEhVQIQrBc5vicOsppoo',
    'https://s3-ap-southeast-1.amazonaws.com/easyparcel-static/Public/source/general/img/easyTrack/Pos_Laju.jpg',
    'data:image/png;base64,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',
    'https://mytrackcdn.com/img/couriers/fb/cj.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQmML3LTcmCFsmkancpKhc39hcFElyEqvhE4sWIyp34tnmasFwsfT1OeOpvp23HAqE3EgUC7dVj4Nj7pxAKfLEjTt8l4_7Ng&usqp=CAU&ec=45732303',
    'https://s3-ap-southeast-1.amazonaws.com/static-pp/pp-web-app-assets/logo-carriers/square-logo-carries/abxexp.png',
    'https://s3.amazonaws.com/owler-image/logo/the-lorry-online_owler_20190402_071954_original.png',
    'https://img.favpng.com/9/1/1/product-logo-brand-customer-service-png-favpng-U6HZuuWygJKi6p6s75UpaDW12.jpg'
]
function Footer (){
    return(
        <>
            <div className="footer">
                <div className="top_footer">
                    <Container>
                        <Row gutter={[8,8]}>
                            <Col lg={8} md={8}>
                                <img 
                                    width="100%"
                                    alt="img"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1.9JSKrvpK1RjSZFqXXcXUVXa.jpg"
                                />
                            </Col>
                            <Col lg={8} md={24}>
                                <img 
                                    width="100%"
                                    alt="img"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB16neVc7fb_uJjSsD4XXaqiFXa.jpg"
                                />
                            </Col>
                            <Col lg={8} md={24}>
                                <img 
                                    width="100%"
                                    alt="img"
                                    src="http://laz-img-cdn.alicdn.com/images/ims-web/TB10x85jRr0gK0jSZFnXXbRRXXa.jpg"
                                />
                            </Col>
                        </Row><br/>
                        <Row gutter={[8,8]}>
                            <Col lg={6} md={6} >
                                CONTACT US
                                <li style={{marginTop:'10px'}}><a href=".">Help Center</a></li>
                                <li><a href=".">How to Buy</a></li>
                                <li><a href=".">Shipping & Delivery</a></li>
                                <li><a href=".">International Product Policy</a></li>
                                <li><a href=".">How to Return</a></li>
                                <li><a href=".">Question?</a></li>
                                <li><a href=".">Contact Us</a></li>
                            </Col>
                            <Col lg={6} md={6} >
                                Lazada 
                                <li style={{marginTop:'10px'}}><a href=".">Help Center</a></li>
                                <li><a href=".">About Lazada</a></li>
                                <li><a href=".">Corporate Voucher Purchase</a></li>
                                <li><a href=".">Afﬁliate Program</a></li>
                                <li><a href=".">Careers</a></li>
                                <li><a href=".">Terms & Conditions</a></li>
                                <li><a href=".">Privacy Policy</a></li>
                                <li><a href=".">Campaign Terms & Conditions</a></li>
                                <li><a href=".">Intellectual Property Protection</a></li>
                            </Col>
                            <Col lg={6} md={6} style={{display:'flex'}}>
                                <div className="logo">
                                    <img 
                                        alt="img"
                                        height="40px"
                                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wMswAlr0gK0jSZFnXXbRRXXa.png"
                                    />
                                </div>
                                <div className="text">
                                    <p style={{color:'#f36f36'}}>
                                        Go where your heart beats<br/>
                                        <span style={{color:' #0f136d'}}>Download the App</span>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} style={{display:'flex'}}>
                                <div>
                                    <img 
                                        height="50px"
                                        alt="img"
                                        src="https://www.thewalkingdeadwine.com/-/media/Images/LivingWineLabels/App-badges/app-store-badge.ashx?la=en&modified=20171206144926&hash=FCC6273C3A86289D18FBFD98914AB3D241B88B0E"
                                    />
                                </div>
                                <div>
                                    <img 
                                        height="50px"
                                        alt="img"
                                        src="https://www.geocaching.com/blog/wp-content/uploads/2018/05/google-play-badge.png"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bottom_footer">
                    <Container>
                        <Row gutter={[16,16]}>
                            <Col lg={12} md={12}>
                                <p>Payment Methods</p>
                                <div className="images">                                 
                                    <Row gutter={[16,16]}>
                                        {images.map((value , i) => {
                                            return i < 12 && (
                                                <Col lg={3} md={3} sm={4} xs={4}>
                                                    <img 
                                                        width="100%"
                                                        alt="img"
                                                        src={value}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <p>Delivery Services</p>
                                {images.map((value , i) => {
                                    return i > 11 && (
                                        <img 
                                            style={{marginRight:'20px'}}
                                            height="40px"
                                            alt="img"
                                            src={value}
                                        />
                                    )
                                })}
                                
                            </Col>
                            <Col lg={6} md={6}>
                                <p>Verified by</p>
                                <div style={{display:"flex"}}>
                                    <div>
                                        <img 
                                            height="50px"
                                            alt="img"
                                            src="https://laz-img-cdn.alicdn.com/tfs/TB1lbmoqYr1gK0jSZR0XXbP8XXa-340-200.png"
                                        />
                                    </div>
                                    <div>
                                        <img 
                                            height="50px"
                                            alt="img"
                                            src="https://laz-img-cdn.alicdn.com/tfs/TB1jyJMv.H1gK0jSZSyXXXtlpXa-184-120.png"
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr/>
                        <Row gutter={[16,16]} style={{padding:'5px 0'}}>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <p>Lazada Southeast Asia</p>
                                <div className="flag">
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/cambodia/flag-round-250.png" 
                                    />
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/malaysia/flag-round-250.png"
                                    />
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/china/flag-round-250.png"
                                    />
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/myanmar/flag-round-250.png"
                                    />
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/malaysia/flag-round-250.png"
                                    />
                                    <img 
                                        alt="flag"
                                        src="https://cdn.countryflags.com/thumbs/thailand/flag-round-250.png"
                                    />
                                </div>
                            </Col> 
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <p>Follow Us</p>
                                <FacebookFilled style={{color:'blue'}}/>
                                <TwitterCircleFilled style={{color:'#09611E'}} />
                                <LinkedinOutlined style={{color:'#87B463'}}/>
                                <InstagramFilled style={{color:' #E1306C'}}/>
                                <YoutubeFilled style={{color:'#ED0A1B'}}/>
                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24} style={{textAlign:'center'}}>
                                @ Lazada 2020
                            </Col>     
                        </Row>        
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Footer;