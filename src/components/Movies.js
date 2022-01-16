import styled from 'styled-components'
import BannerCarousel from './BannerCarousel'
import Navbar from './Navbar'

function Movies() {
    return (
        <MovieContainer>
            <Navbar/>
            <BannerCarousel/>
        </MovieContainer>
    )
}

const MovieContainer = styled.section`
    background-image:url('/image/home-background.png');
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    height:100vh;
    overflow-x:hidden;
    margin-top:100px;
    @media screen and (max-width:1280px){
        margin-top:70px;
    }
`



export default Movies
