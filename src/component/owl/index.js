import React from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Row ,Col} from 'reactstrap';
import './owl.css';


const images =[
  'https://fdn.gsmarena.com/imgroot/news/20/04/apple-iphone-se-2020-hot-or-not/-727/gsmarena_001.jpg',
  'https://techworld.hu/wp-content/uploads/2020/04/Apple_new-iphone-se-white_04152020_big.jpg.large_-e1587031630624.jpg',
  'https://assets.newatlas.com/dims4/default/fb188aa/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F43%2F08%2F06a7b30b40d48e4269e7e8f558b3%2Fhands-03.jpg',
  'https://cnet2.cbsistatic.com/img/13q2YeEGmuqG43AxbvVOEEfd7M0=/1200x675/2020/04/15/6dac9606-c01f-4e17-abd5-ddb2b02c9d8a/iphone-lineup-promo-crop.jpg',
  'https://i.ytimg.com/vi/SQIbeAk-bFA/maxresdefault.jpg',
  'https://cdn.mos.cms.futurecdn.net/dkJVstZfNi2X5tAhw9YKad.jpg',
  'https://cnet2.cbsistatic.com/img/13q2YeEGmuqG43AxbvVOEEfd7M0=/1200x675/2020/04/15/6dac9606-c01f-4e17-abd5-ddb2b02c9d8a/iphone-lineup-promo-crop.jpg',
  'https://i.ytimg.com/vi/SQIbeAk-bFA/maxresdefault.jpg',
  'https://cnet2.cbsistatic.com/img/13q2YeEGmuqG43AxbvVOEEfd7M0=/1200x675/2020/04/15/6dac9606-c01f-4e17-abd5-ddb2b02c9d8a/iphone-lineup-promo-crop.jpg',
  'https://i.ytimg.com/vi/SQIbeAk-bFA/maxresdefault.jpg',
  'https://cnet2.cbsistatic.com/img/13q2YeEGmuqG43AxbvVOEEfd7M0=/1200x675/2020/04/15/6dac9606-c01f-4e17-abd5-ddb2b02c9d8a/iphone-lineup-promo-crop.jpg',
  'https://i.ytimg.com/vi/SQIbeAk-bFA/maxresdefault.jpg',
  'https://cnet2.cbsistatic.com/img/13q2YeEGmuqG43AxbvVOEEfd7M0=/1200x675/2020/04/15/6dac9606-c01f-4e17-abd5-ddb2b02c9d8a/iphone-lineup-promo-crop.jpg',
  'https://i.ytimg.com/vi/SQIbeAk-bFA/maxresdefault.jpg',
];
const options = {
  // loop:true,
  margin:10,
  nav:false,
  dots:false,
  // autoplay:true,
  // autoplayTimeout:2000,
  responsive: {
    0: {
      items: 1
    },
    812: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
};

const Owlcarousel = () => {
  return (
    <div>
        <Row>
          <Col>
            <OwlCarousel className={'owl-theme'}
              {...options}
              >
              {images.map((value) => {
                return(
                  <div className="items ">
                      <img alt="." src={value} />
                  </div>
                )
              }  
              )} 
            </OwlCarousel>
          </Col>
        </Row>
    </div>
  )
}

export default Owlcarousel;
