import styled from 'styled-components'
import BannerCarousel from '../BannerCarousel'
import ContentsCarousel from '../ContentsCarousel'
import Data from "../../Data.json";
import Data2 from "../../Data2.json";
import Navbar from '../Navbar'
import Footer from '../Footer';

const Movies =()=>{
    return (
        <MovieContainer>
            <Navbar/>
            <Wrap>
                <BannerCarousel/>
                <MainViewerGrid>
                    <Viewer>
                        <img src="/image/viewers-disney.png" alt="disney"/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/disney.mp4" type="video/mp4"/>
                        </video>
                    </Viewer>
                    <Viewer>
                        <img src="/image/viewers-marvel.png" alt="marvel"/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/marvel.mp4" type="video/mp4"/>
                        </video>
                    </Viewer>
                    <Viewer>
                        <img src="/image/viewers-national.png" alt="national"/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/national-geographic.mp4" type="video/mp4"/>
                        </video>
                    </Viewer>
                    <Viewer>
                        <img src="/image/viewers-pixar.png" alt="pixar"/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/pixar.mp4" type="video/mp4"/>
                        </video>
                    </Viewer>
                    <Viewer>
                        <img src="/image/viewers-starwars.png" alt="starwars"/>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src="/video/star-wars.mp4" type="video/mp4"/>
                        </video>
                    </Viewer>
                </MainViewerGrid>
                <ContentsCarousel Data={Data} CategoryName="디지니+ 최신작" />
                <ContentsCarousel Data={Data2} CategoryName="놓칠 수 없는 히트 영화 모음" />
                <ContentsCarousel Data={Data} CategoryName="감동적인 이야기" />
                <ContentsCarousel Data={Data2} CategoryName="취향저격 추천 컨텐츠" />
                <ContentsCarousel Data={Data} CategoryName="몰아보기 끝판왕" />
            </Wrap>
            <Footer/>
        </MovieContainer>
    )
};

export const MovieContainer = styled.div`
    background-image:url('/image/home-background.png');
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    overflow-x:hidden;
    position:relative;
    margin-top:100px;
    @media screen and (max-width:1280px){
        margin-top:70px;
    }
`

const Wrap = styled.div`
    padding-bottom:150px;
`;
const MainViewerGrid = styled.div`
    display:grid;
    gap:1.5rem;
    grid-template-columns:repeat(5,minmax(100px,1fr));
    margin:20px;
    @media screen and (max-width:630px){
        grid-template-columns:repeat(1,1fr);
    }
`;
const Viewer = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    border-radius:20px;
    position:relative;
    box-shadow: 0px 20px 20px rgba(0,0,0,0.8);
    border: solid 5px rgba(180,180,180,0.1);
    transition: 200ms all ease-in-out; 
    img{
        width:100%;
        background-color:transparent;
        z-index:1;
    }
    video{
        width:100%;
        height:100%;
        position:absolute;
        opacity:0;
        z-index:0;
    }
    &:hover{
        transform:scale(0.9);
        border: solid 5px rgba(180,180,180,1);
        video{
            opacity:1;
        }
    }
`;

export default Movies
