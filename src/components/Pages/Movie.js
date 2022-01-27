import Footer from "../Footer";
import Navbar from "../Navbar";
import { MovieContainer } from "./Movies";

const Movie = ()=>{
    return(
        <MovieContainer>
            <Navbar/>
            <Footer/>
        </MovieContainer>
    )
};

export default Movie;