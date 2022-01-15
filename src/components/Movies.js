import styled from 'styled-components'
import Navbar from './Navbar'

function Movies() {
    return (
        <MovieContainer>
            <Navbar/>
        </MovieContainer>
    )
}

const MovieContainer = styled.section`
    background-image:url('/image/home-background.png');
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    height:100vh;
`



export default Movies
