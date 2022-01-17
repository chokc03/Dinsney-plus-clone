import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ContentsCarousel=(props)=>{
    let setting={
        dots:false,
        infinte:false,
        speed:500,
        sliderToShow:4,
        sliderToScroll:4,
        initialSlide:0,
    }
    return(
        <MovieContainer>
            <h2>디지니+ 최신작</h2>
            <Contents {...setting}>
                <Movies>
                    
                </Movies>
            </Contents>
        </MovieContainer>
    )
};

const MovieContainer=styled.div`
    margin:40px;
    width:100%;
    position:relative;
    display:flex;
    flex-direction:column;
    h2{
        font-size:2rem;
        color:#c4c4c4;
        margin-bottom:10px;
    }
`;

const Contents = styled(Slider)`

`;

const Movies =styled.div`
    
`;

export default ContentsCarousel;