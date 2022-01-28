/*
  Writer : Kyungchan Cho
  This file helps to choose the profile for login
*/

import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs'

function Home() {
    return (
        <>
            <HomeContainer>
                <Menubar>
                    <Icons src="/image/logo.svg"/>
                </Menubar>
                <Title>어느 프로필을 시청하시겠어요?</Title>
                <ProfileContainer>
                    <ProfileContents>
                        <Link to='/Movies'>
                            <Profiles>
                                <Icons src="/image/icon.png"/>
                            </Profiles>
                        </Link>
                        <Names>조경찬</Names>
                    </ProfileContents>
                    <ProfileContents>
                        <Link to='/'>
                            <Profiles>
                                <span className="plusIcon"><BsPlusLg/></span>
                            </Profiles>
                        </Link>
                        <Names className="addProfile">프로필 추가</Names>
                    </ProfileContents>
                </ProfileContainer>
            </HomeContainer>
        </>
    )
};
const Menubar = styled.div`
    position:absolute;
    top:-10px;
    left:0;
    img{
        transform:scale(0.6);
        margin-left:20px;
        cursor:pointer;
        @media screen and (max-width:789px){
            transform:scale(0.5);
        }
    }
`;
const HomeContainer = styled.section`
    position:relative;
    background-color:rgb(28,31,43);
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`;
const Title = styled.h2`
    font-size:2.5rem;
    margin:40px;
    @media screen and (max-width:789px){
        font-size:1.5rem;
    }
`;
const Profiles = styled.div`
    width:150px;
    height:150px;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background-color:rgba(249, 249, 249, 0.1);
    transition: 250ms all;
    z-index:3;
    &:hover{
        border:6px solid rgba(255,255,255,0.8);
        transform:scale(1.1);
        background-color: rgba(255,255,255,0.5)
    }
    .plusIcon{
        font-size:60px;
        z-index:4;
    }
    @media screen and (max-width:789px){
        transform:scale(0.8);
    }
`;
const Icons = styled.img`
    width:180px;
    height:180px;
    transform:scale(1.1);
    z-index:4;

`;
const ProfileContents = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-right:40px;
    align-items:center;
    .addProfile{
        color:#c4c4c4;
    }
`;
const Names = styled.span`
    font-size:2.5rem;
    font-weight:bold;
    padding-top:20px;
    @media screen and (max-width:789px){
        font-size:1.5rem;
    }
`
const ProfileContainer = styled.div`
    display:flex;
    margin-top:20px;
    @media screen and (max-width:500px){
        flex-direction:column;
    }
`


export default Home
