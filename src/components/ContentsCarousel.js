import styled from 'styled-components';

const ContentsCarousel=(props)=>{
    return(
        <MovieContainer>
            <h2>디지니+ 최신작</h2>
        </MovieContainer>
    )
};

const MovieContainer=styled.div`
    margin:40px;
    position:relative;
    max-width:100vw;
    width:100%;
    overflow:hidden;
    h2{
        font-size:2rem;
        color:#c4c4c4;
        margin-bottom:10px;
    }
`;

export default ContentsCarousel;