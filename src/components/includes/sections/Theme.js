import React from 'react';
import styled from 'styled-components';
import Block1 from '../../assets/images/home/theme-color/block1-default.png';
import Block2 from '../../assets/images/home/theme-color/block2-default.png';
import Grid from '../../assets/images/home/theme-color/grid.png';
import Screen from '../../assets/images/home/theme-color/screen-default.png';
import Sidebar from '../../assets/images/home/theme-color/sidebar-default.png';
import Screen1 from '../../assets/images/home/clean-1.png';
import Screen2 from '../../assets/images/home/clean-2.png';
import Screen3 from '../../assets/images/home/clean-3.png';
import Screen4 from '../../assets/images/home/clean-4.png';
import Screen5 from '../../assets/images/home/clean-5.png';
import Screen6 from '../../assets/images/home/clean-6.png';
import Screen7 from '../../assets/images/home/clean-7.png';
import Screen8 from '../../assets/images/home/clean-8.png';
import Screen9 from '../../assets/images/home/clean-9.png';
import Screen10 from '../../assets/images/home/clean-10.png';

function Theme() {
    return (
        <MainBody>
            <Wrapper className="wrapper">
                <AboveSection>
                    <Top>
                        <Tag>Choose your style</Tag>    
                        <Title>Theme color</Title>
                        <Description>Express your own style with just one click</Description>
                    </Top>
                    <Bottom>
                        <Left>
                            <ImageBlock1 src={Block1} alt="Images" />
                            <ImageBlock2 src={Block2} alt="Images" />
                            <ImageGrid src={Grid} alt="Images" />
                            <ImageScreen src={Screen} alt="Images" />
                            <ImageSidebar src={Sidebar} alt="Images" />
                        </Left>
                        <Right>
                            <Ulist>
                                <List><Green></Green></List>
                                <List><Violet></Violet></List>
                                <List><LightBlue></LightBlue></List>
                                <List><Blue></Blue></List>
                                <List><Orange></Orange></List>
                                <List><Red></Red></List>
                            </Ulist>
                        </Right>
                    </Bottom> 
                </AboveSection>
                <BelowSection>
                    <BelowLeft>
                        <BelowTag>
                            Clean & Clear
                        </BelowTag>
                        <BelowTitle>
                            Beautiful, modern and <Br />clean user interfaces
                        </BelowTitle>
                    </BelowLeft>
                    <BelowRight>
                        <Image src={Screen1} alt="Images" />
                        <Image src={Screen2} alt="Images" />
                        <Image src={Screen3} alt="Images" />
                        <Image src={Screen4} alt="Images" />
                        <Image src={Screen5} alt="Images" />
                        <Image src={Screen6} alt="Images" />
                        <Image src={Screen7} alt="Images" />
                        <Image src={Screen8} alt="Images" />
                        <Image src={Screen9} alt="Images" />
                        <Image src={Screen10} alt="Images" />
                    </BelowRight>
                </BelowSection>
            </Wrapper>
        </MainBody>
    )
}

const MainBody = styled.div`
    text-align: center;
    background: linear-gradient(#e4e8ec, #fff, #fff);
    padding: 80px 0;
`;
const Wrapper = styled.div`
    
`;
const AboveSection = styled.div`
    margin-bottom: 70%;
    @media all and (max-width: 1280px) {
        margin-bottom: 55%;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 70%;
    }
`;
const Left = styled.div`
    width: 95%;
`;
const Top = styled.div`
    margin-bottom: 80px;
    @media all and (max-width: 980px) {
        margin-bottom: 50px;
    }
`;
const Tag = styled.small`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8d98a3;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 30px;
`;
const Title = styled.h5`
    font-size: 55px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
`;
const Bottom = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        flex-direction: column-reverse;
    }
`;
const ImageBlock1 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;
const ImageBlock2 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;
const ImageGrid = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;
const ImageScreen = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;
const ImageSidebar= styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;
const Right = styled.div`
    width: 5%;
    z-index: 3;
`;
const Ulist = styled.ul`
    @media all and (max-width: 980px) {
        display: flex;
        justify-content: center;
    }
`;
const List = styled.li`
    cursor: pointer;
    margin-right: 20px;
    :last-child{
        margin-right: 0;
    }
`;
const Green = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #00ab55;
    margin-bottom: 20px;
`;
const Violet = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #7635dc;
    margin-bottom: 20px;
`;
const LightBlue = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #1bcaff;
    margin-bottom: 20px;
`;
const Blue = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #0045ff;
    margin-bottom: 20px;
`;
const Orange = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #fda92c;
    margin-bottom: 20px;
`;
const Red = styled.span`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: #ff2f30;
    margin-bottom: 20px;
`;
const BelowSection = styled.div`
    text-align: left;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 70%;
    @media all and (max-width: 1280px) {
        margin-bottom: 55%;
    }
    @media all and (max-width: 980px) {
        flex-direction: column;
        margin-bottom: 70%;
    }
`;
const BelowLeft = styled.div`
    width: 50%;
    z-index: 2;
    @media all and (max-width: 980px) {
        width: 100%;
        text-align: center;
    }
`;
const BelowTag = styled.small`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8d98a3;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 30px;
`;
const BelowTitle = styled.h5`
    font-size: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
        font-size: 45px;
    }
    @media all and (max-width: 980px) {
        font-size: 40px;
    }
`;
const Br = styled.br`
`;
const BelowRight = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @media all and (max-width: 980px) {
        top: unset;
        bottom: 0;
    }
`;
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;


export default Theme;
