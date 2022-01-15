import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Menubar = styled.nav`
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 40px 0px 40px;
    width:100%;
    height:80px;
`;
const Categories = styled.ul`
    display:flex;
    height:90px;
`;
const LogoIcon = styled.div`
    cursor:pointer;
    list-style:none;
    width:120px;
    margin:20px;
    margin-right:60px;
`;
const Logo = styled.img`
    width:100%;
`;
const Item = styled.li`
    list-style:none;
    position:relative;
    width:auto;
    display:flex;
    a{
        padding:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:90px;
        text-decoration:none;
    }
    
`;
const ItemIcon = styled.img`
    width:2rem;
    margin-right:10px;

`;
const ItemInfo = styled.div`
    font-size:1.5rem;
    font-weight:bold;
    line-height:1.06;
    &:before{
        content:"";
        position:absolute;
        background-color:#fff;
        bottom:20px;
        display:block;
        height:4px;
        right:0px;
        left:55px;
        border-radius:20px;
        transform-origin:left center;
        transform:scale(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        width:auto;
        opacity:0;
    }
    &:hover{
        &:before{
            transform:scale(1);
            opacity:1;
        }
    }

`;
const ProfileIcon = styled.div`
    width:70px;
    height:70px;
    border-radius:50%;
    overflow:hidden;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Profile = styled.img`
    transform:scale(0.1);
`;
const Navbar = ()=>{
    return (
        <div>
            <Menubar>
                <Categories>
                    <LogoIcon>
                        <Logo src="/image/logo.svg"/>
                    </LogoIcon>
                    <Item>
                        <Link to="/Movies">
                            <ItemIcon src="/image/home-icon.svg"/>
                            <ItemInfo>
                                홈
                            </ItemInfo>
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Search">
                            <ItemIcon src="/image/search-icon.svg"/>
                            <ItemInfo>
                                검색
                            </ItemInfo>
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Watchlist">
                            <ItemIcon src="/image/watchlist-icon.svg"/>
                            <ItemInfo>
                                관심 컨텐츠
                            </ItemInfo>
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Origianl">
                            <ItemIcon src="/image/original-icon.svg"/>
                            <ItemInfo>
                                오리지널
                            </ItemInfo>
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Movie">
                            <ItemIcon src="/image/movie-icon.svg"/>
                            <ItemInfo>
                                영화
                            </ItemInfo>
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/Series">
                            <ItemIcon src="/image/series-icon.svg"/>
                            <ItemInfo>
                                시리즈
                            </ItemInfo>
                        </Link>
                    </Item>
                </Categories>
                <ProfileIcon>
                    <Profile src="/image/icon.png"/>
                </ProfileIcon>
            </Menubar>
        </div>
    )
}

export default Navbar
