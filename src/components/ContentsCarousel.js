import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ContentsCarousel=({Data,CategoryName})=>{

    const settings={
        dots:false,
        infinite:false,
        speed:300,
        slidesToShow:6,
        slidesToScroll:6,
        responsive:[
            {
                breakpoint: 2500,
                settings:{
                    slidesToShow:5,
                    slidesToScroll:5
                }
            },
            {
                breakpoint: 2100,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:4
                }
            },
            {
                breakpoint: 1730,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3
                }
            },
            {
                breakpoint: 1310,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2
                }
            },
            {
                breakpoint: 630,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
        ]
    }
    const newDataImage = Data.movies.map((datas)=>{
        return(
            <div key={datas.id}>
                <img  src={datas.cardImg} alt={datas.title}/>
            </div>
        )
    });
    return(
        <MovieContainer>
            <h2>{CategoryName}</h2>
            <Movies {...settings}>
                {newDataImage}
            </Movies>
        </MovieContainer>
    )
};

const MovieContainer=styled.div`
    margin:40px;
    position:relative;
    h2{
        font-size:2rem;
        color:#c4c4c4;
        margin-bottom:10px;
    }
`;

const Movies = styled(Slider)`
    margin:0;
    &>button{
        position:absolute;
        transform:scale(3);
    }
    .slick-prev{
        left:1px;
        z-index:1;
    }
    .slick-next{
        right:0;
    }
    img{
        border-radius:20px;
        max-width:400px;
        cursor:pointer;
        @media screen and (max-width:1500px){
            width:100%;
        }
    }
`;

export default ContentsCarousel;