import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/images/brand/logo.svg';
import DownArrowIcon from '../assets/images/icons/down-arrow.png';
import Hamburger from '../assets/images/icons/menu-icon.png';
import HomeIcon from '../assets/images/icons/Nav-icons/home.png';
import ComponentsIcon from '../assets/images/icons/Nav-icons/components.png';
import PageIcon from '../assets/images/icons/Nav-icons/page.png';
import DocIcon from '../assets/images/icons/Nav-icons/documentation.png';
import RightArrow from '../assets/images/icons/Nav-icons/right.png';


function Head() {
    const [ isLoading, setLoading ] = useState(false);


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
                
                <MenuDiv>
                    <PurchaseButton>Purchase Now</PurchaseButton>
                    <MenuIcon onClick={() => {
                        setLoading(!isLoading)
                    }}><MenuImage src={Hamburger} alt="Menu Icon" /></MenuIcon>
                </MenuDiv>
                <MenuUList isLoading={isLoading}>
                    <MenuList><LogoContainer><ListImage src={LogoImage} alt="Logo" /></LogoContainer></MenuList>
                    <MenuList><ImageContainer><ListImage src={HomeIcon} alt="" /></ImageContainer>Home</MenuList>
                    <MenuList><ImageContainer><ListImage src={ComponentsIcon} alt="" /></ImageContainer>Components</MenuList>
                    <MenuListPages><ImageContainer><ListImage src={PageIcon} alt="" /></ImageContainer>Pages<RightArrowImage src={RightArrow} alt="Right Arrow" /></MenuListPages>
                    <MenuList><ImageContainer><ListImage src={DocIcon} alt="" /></ImageContainer>Documentation</MenuList>
                </MenuUList>
                <Overlay isLoading={isLoading} onClick={() => {
                    setLoading(!isLoading)}
                }>
                </Overlay>
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
    /* position: fixed;
    top: 0;
    left: 5%;
    width: 90%; */
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
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover{
        color: #469353;
        transition: 0.3s ease;
    }
`;
const ListButton = styled.li`
    font-size: 14px;
    font-weight: bold;
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
const MenuDiv = styled.div`
    display: none;
    @media all and (max-width: 980px) {
        display: flex;
        align-items: center;
    }
`;
const MenuIcon = styled.div`
    display: none;
    width: 30px;
    margin-left: 20px;
    @media all and (max-width: 980px) {
        display: block;
    }
`;
const MenuImage = styled.img``;
const PurchaseButton = styled.button`
    display: none;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: #00ab55;
    padding: 10px 20px;
    border-radius: 8px;
    transition: 0.3s ease;
    &:hover{
        transition: 0.3s ease;
        background: #007b55;
    }
    @media all and (max-width: 980px) {
        display: block;
    }
`;
const MenuUList = styled.ul`
    height: 100vh;
    background-color: #fff;
    width: 250px;
    color: #637381;
    position: fixed;
    top: 0;
    left: ${({isLoading}) => (isLoading) ? "0" : "-1000px"};
    z-index: 7;
    transition: 0.3s ease-in-out;
`;
const ImageContainer = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const LogoContainer = styled.div`
    width: 40px;
`;
const ListImage = styled.img``;
const RightArrowImage = styled.img`
    width: 15px;
    margin-left: auto;
`;

const MenuList = styled.li`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px 15px;
    &:hover{
        background-color: #eff8f1;
    }
`;
const MenuListPages = styled.li`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px 15px;
`;
const Overlay = styled.div`
    display: ${({isLoading}) => (isLoading) ? "block" : "none"};
    background: linear-gradient(
        75deg, rgba(22, 28, 36, 0.48) 0%, rgb(22, 28, 36) 100%);
    transition: 0.5s ease-in-out;
    overflow: hidden;
    height: 100%;
    width: 100%;
    z-index: ${({isLoading}) => (isLoading) ? "6" : "-6"};
    position: fixed;
    top: 0;
    left: 0;
`;

export default Head;

