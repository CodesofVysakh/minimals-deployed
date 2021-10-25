import React from 'react';
import styled from 'styled-components';
import Head from '../Head';
import Overlay from '../../assets/images/overlay.svg';
import Thunder from '../../assets/images/icons/thunder.png';
import ImageDiamond from '../../assets/images/home/diamond-small.svg';
import DiamondSmall from '../../assets/images/home/diamond.svg';
import Figma from '../../assets/images/home/figma.svg';
import Material from '../../assets/images/home/material.svg';
import ReactIcon from '../../assets/images/home/react.svg';
import JSIcon from '../../assets/images/home/js.svg';
import TSIcon from '../../assets/images/home/ts.svg';
import HeroImage from '../../assets/images/home/hero.png';

function Spotlight() {
    return (
        <>
            <Body>
                <Wrapper className="wrapper">
                    <Head />
                    <MainBody>
                        <Left>
                            <Title>Start a <Br /> new project <Br /> with <ColorGreen>Minimal</ColorGreen></Title>
                            <Description>The starting point for your next project based on easy-to-customize <Br />Material-UI © helps you build apps faster and better.</Description>
                            <Preview><DiamondIcon><DiamondImage src={ImageDiamond} alt="Icon" /></DiamondIcon><PreviewSmall>Preview in Sketch Cloud</PreviewSmall></Preview>
                            <LiveButton><LiveIcon><ThunderIcon src={Thunder} alt="Thunder Icon" /></LiveIcon><LiveContent>Live Preview</LiveContent></LiveButton>
                            <UList>
                                <List><img src={DiamondSmall} alt="Icon" /></List>
                                <List><img src={Figma} alt="Icon" /></List>
                                <List><img src={Material} alt="Icon" /></List>
                                <List><img src={ReactIcon} alt="Icon" /></List>
                                <List><img src={JSIcon} alt="Icon" /></List>
                                <List><img src={TSIcon} alt="Icon" /></List>
                            </UList>

                        </Left>
                        <Right>
                            <ImageContainer><ImageHero src={HeroImage} alt="Image" /></ImageContainer>
                        </Right>
                    </MainBody>
                </Wrapper>
            </Body>
            
        </>
    )
}

const Body = styled.div`
    background: url(${Overlay});
    background-size: cover;
    color: #fff;
    padding: 40px 0 10px;
`;
const Wrapper = styled.div``;
const MainBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 100px;
    @media all and (max-width: 980px) {
        position: relative;
        text-align: center;
    }
`;
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Title = styled.h3`
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        font-size: 50px;
    }
`;
const Br = styled.br`
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const ColorGreen = styled.small`
    color: #4dac56;
    font-size: 70px;
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 50px;    }
`;
const Description = styled.p`
    margin-bottom: 30px;
`;
const Preview = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    @media all and (max-width: 980px) {
        justify-content: center;
    }
`;
const DiamondIcon = styled.div`
    width: 20px;
    display: inline-block;
    margin-right: 10px;
`;
const DiamondImage = styled.img``;
const PreviewSmall = styled.small`
    text-decoration: underline;
    cursor: pointer;
`;
const LiveButton = styled.div`
    padding: 12px 24px;
    background: #00ab55;
    display: inline-flex;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 30px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        background: #007b55;
        transition: 0.5s ease;
    }
`;
const LiveIcon = styled.div`
    width: 20px;
    display: inline-block;
    margin-right: 10px;
`;
const ThunderIcon = styled.img`
    filter: invert(1);
`;
const LiveContent = styled.div`
    display: inline-block;
`;
const UList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    @media all and (max-width: 1280px) {
        width: 75%;
    }
    @media all and (max-width: 980px) {
        justify-content: center;
        width: 100%;
    }
`;
const List = styled.li`
    width: 50px;
    cursor: pointer;
    @media all and (max-width: 980px) {
       margin-right: 20px;
       :last-child{
           margin-right: 0;
       }
    }
`;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 980px) {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const ImageContainer = styled.div`
    margin-left: auto;
    width: 90%;
`;
const ImageHero = styled.img`
    filter: opacity(0.20);
`;

export default Spotlight;
