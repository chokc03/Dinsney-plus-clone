import {useState} from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import { MovieContainer } from './Movies';
import Navbar from '../Navbar';

const Search =()=>{
    const [input,setInput] = useState('');
    const handleInput=(e)=>{
        setInput(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setInput('');
    }

    return(
        <MovieContainer>
            <Navbar/>
            <SearchContainer>
                <SearchForm onSubmit={handleSubmit}>
                    <Searchbar 
                    type="text" 
                    placeholder="제목 또는 캐릭터로 검색하세요"
                    onChange={handleInput}
                    value={input}/>
                </SearchForm>
            </SearchContainer>
            <Footer/>
        </MovieContainer>
    )
};

const SearchContainer = styled.div`
    height:100vh;
    position:relative;
`;
const SearchForm = styled.form`
    position:fixed;
    width:100%;

`;

const Searchbar = styled.input`
    width:100%;
    height:100px;
    background-color:rgb(75, 78, 90);
    outline:none;
    border:none;
    color:rgb(168, 169, 173);
    transition:all 5ms;
    padding:0px 60px;
    font-size:40px;
    &:focus{
        background-color:rgb(98,102,118);
        color:rgb(249,249,249)
    }
`;
export default Search;