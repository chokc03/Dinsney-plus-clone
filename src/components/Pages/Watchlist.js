/*
  Writer : Kyungchan Cho
  This file shows watchlists
*/

import styled from 'styled-components';
import Navbar from '../Navbar';
import { MovieContainer } from './Movies';
import {GrAddCircle} from 'react-icons/gr';
import Footer from '../Footer';

const Watchlist = ()=>{
    return(
        <MovieContainer>
            <Navbar/>
            <ListContainer>
                <GrAddCircle className="icon"/>
                <Info>
                    관심 컨텐츠가 비어 있습니다
                </Info>
            </ListContainer>
            <Footer/>
        </MovieContainer>
    )
};

const ListContainer = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    margin-top:80px;
    align-items:center;
    .icon{
        font-size:150px;
    }
`;
const Info = styled.p`
    color:#fff;
    margin:20px;
    font-size:20px;
    font-weight:bold;
`;

export default Watchlist;