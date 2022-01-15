import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    const items = [
        {
            id:1,
            name:"홈",
            image:"/image/home-icon.svg",
            link:"/"
        },
        {
            id:2,
            name:"검색",
            image:"/image/search-icon.svg",
            link:"/Search"
        },
        {
            id:3,
            name:"관심 컨텐츠",
            image:"/image/watchlist-icon.svg",
            link:"/Watchlist"
        },
        {
            id:4,
            name:"오리지널",
            image:"/image/original-icon.svg",
            link:"/Original"
        },
        {
            id:5,
            name:"영화",
            image:"/image/movie-icon.svg",
            link:"/Movie"
        },
        {
            id:6,
            name:"시리즈",
            image:"/image/series-icon.svg",
            link:"/Series"
        }
    ]
    return (
        <div>
            <Menubar>
                <Categories>
                    <LogoIcon>
                        <Logo src="/image/logo.svg"/>
                    </LogoIcon>
                    {items.map(item=>(
                        <Item key={item.id}>
                            <Link to={item.link}>
                                <ItemIcon src={item.image}/>
                                <ItemInfo>
                                    {item.name}
                                </ItemInfo>
                            </Link>
                        </Item>
                    ))}
                </Categories>
                <ProfileIcon>
                    <Profile src="/image/icon.png"/>
                </ProfileIcon>
            </Menubar>
        </div>
    )
}

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
        right:15px;
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


export default Navbar
