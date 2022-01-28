/*
  Writer : Kyungchan Cho
  This file makes carousel for the banner
*/

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BannerCarousel = ()=>{
    // Make setting for the react-slick for banner carousel
    const setting={
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return(
        <>
        {/* Used imported Slider from react-slick */}
            <SliderWrap {...setting}>
                <SliderImage>
                    <img src="/image/slider-badag.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-badging.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-scale.jpg" alt=""/>
                </SliderImage>
                <SliderImage>
                    <img src="/image/slider-scales.jpg" alt=""/>
                </SliderImage>
            </SliderWrap>
        </>
    )
};

//Used Slider for the banner
const SliderWrap = styled(Slider)`
    margin:20px;
    position:relative;
    & > button{
        opacity:0;
        cursor:auto;
    }

    ul li button {
        position:absolute;
        top:-180%;;
        &::before{
            font-size:20px;
            color:#fff;
        }
    }
    li.slick-active button:before{
        color:#fff;
    }
    .slick-list{
        overflow:initial;
    }

`;
const SliderImage = styled.div`
    border-radius:10px;
    cursor: pointer;
    position:relative;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    img{
        border-radius:10px;
        width:100%;
        height:100%;
        &:hover{
        border:solid 5px #fff;
        }
    }
    
`;

export default BannerCarousel;