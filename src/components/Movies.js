import styled from 'styled-components'
import Navbar from './Navbar'

const MovieContainer = styled.section`
    background-image:url('/image/home-background.png');
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    height:100vh;
`

function Movies() {
    return (
        <MovieContainer>
            <Navbar/>
        </MovieContainer>
    )
}

export default Movies
