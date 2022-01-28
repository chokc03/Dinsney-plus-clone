/*
  Writer : Kyungchan Cho
  This file makes footer for the website
*/

import styled from 'styled-components';

const Footer =()=>{
    return(
        <FooterContainer>
            <Footerlogo src="/image/logo.svg"/>
            <Services>
                <li>디지니+이용약관</li>
                <li>취소 및 환불 정책</li>
                <li>사업자 정보</li>
                <li>개인정보 수집 및 이용</li>
                <li>개인정보 처리방침</li>
                <li>고객센터</li>
            </Services>
            <Copyright>
                &copy; 2022 Disney and its related entities.All Rights Reserved.
            </Copyright>
        </FooterContainer>
    )
};

const FooterContainer = styled.div`
    position:absolute;
    bottom:0px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:rgb(9, 11, 19);
    height:150px;
    padding:20px;
    font-size:15px;
    @media screen and (max-width:800px){
        font-size:13px;
    }
    @media screen and (max-width:630px){
        height:200px;
    }
`;

const Footerlogo = styled.img`
    width:80px;
    cursor: pointer;
`;

const Services = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10px;
    li{
        list-style:none;
        cursor:pointer;
        margin-right:15px;
        color:#cacaca;
        &:hover{
            color:#fff;
        }
        

    }
    @media screen and (max-width:630px){
        flex-direction:column;   
    }
`;

const Copyright = styled.p`
    color:#cacaca;
`;
export default Footer;