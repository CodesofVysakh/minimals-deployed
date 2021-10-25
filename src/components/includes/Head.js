import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/images/brand/logo.svg';
import DownArrowIcon from '../assets/images/icons/down-arrow.png';


function Head() {
    return (
        <>
            <Header>
                <Left>
                    <Container><Logo src={LogoImage} alt="Logo" /></Container> 
                    <Version><VersionSmall>v2.6.0</VersionSmall></Version>
                </Left>
                <Right>
                    <UnorderledList>
                        <List>Home</List>
                        <List>Components</List>
                        <List>Pages <Arrow><DownArrow src={DownArrowIcon} alt="Down Arrow" /></Arrow></List>
                        <List>Documentation</List>
                        <ListButton>Purchase Now</ListButton>
                    </UnorderledList>
                </Right>
            </Header>
        </>
    )
}

const Header = styled.header`
    padding: 30px 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 5%;
    width: 90%;
`;
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div`
    width: 40px;
    margin-right: 10px;
`;
const Logo = styled.img`
    cursor: pointer;
`;
const Version = styled.div`
    background: #1a304a;
    padding: 2px 5px;
    border-radius: 8px;
`;
const VersionSmall = styled.small`
    color: #0e4faa;
`;
const Right = styled.div`
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const UnorderledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const List = styled.li`
    display: flex;
    align-items: center;
    margin-right: 40px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        color: #469353;
        transition: 0.3s ease;
    }
`;
const ListButton = styled.li`
    font-size: 16px;
    background: #00ab55;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        transition: 0.3s ease;
        background: #007b55;
    }
`;
const Arrow = styled.div`
    width: 15px;
    margin-left: 8px;
    display: inline-block;
`;
const DownArrow = styled.img`
    filter: invert(1);
`;

export default Head;

