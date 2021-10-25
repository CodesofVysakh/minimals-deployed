import React from 'react';
import styled from 'styled-components';
import Screen1 from '../../assets/images/home/screen_light_1.png';
import Screen2 from '../../assets/images/home/screen_light_2.png';
import Screen3 from '../../assets/images/home/screen_light_3.png';



function Pack() {
    return (
        <MainBody className="wrapper">
            <Left>
                <TitleTag>
                    Interface Starter Kit
                </TitleTag>
                <Title>Huge pack <Br />of elements</Title>
                <Description>
                We collected most popular elements. Menu,<Br />
                sliders, buttons, inputs etc. are all here. Just dive <Br />
                in!
                </Description>
                <ViewButton>View All Components</ViewButton>
            </Left>
            <Right>
                <ScreenDiv1><Image src={Screen1} alt="Card" /></ScreenDiv1>
                <ScreenDiv2><Image src={Screen2} alt="Card" /></ScreenDiv2>
                <ScreenDiv3><Image src={Screen3} alt="Card" /></ScreenDiv3>
            </Right>
        </MainBody>
    )
}
const MainBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20% 0;
    position: relative;
    @media all and (max-width: 980px) {
        flex-direction: column;
        padding-bottom: 65%;
    }
`;
const Left = styled.div`
    text-align: center;
`;
const TitleTag = styled.small`
    text-transform: uppercase;
    color: #8d98a3;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 30px;
    letter-spacing: 0.1em;
`;
const Title = styled.h5`
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 10%;
`;
const Br = styled.br`
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
    margin-bottom: 30px;
`;
const ViewButton = styled.span`
    padding: 16px 22px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #919eab52;
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;
    &:hover{
        background: #919eab14;
    }
`;
const Right = styled.div`
    display: flex;
    width: 50%;
`;
const ScreenDiv1 = styled.div`
    z-index: 5;
    position: absolute;
    top: 25%;
    right: 35%;
    width: 25%;
    border-radius: 10px;
    transform: skewY(15deg);
    box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);
    @media all and (max-width: 1080px) {
        right: 33%;
    }
    @media all and (max-width: 980px) {
        bottom: 80px;
        top: unset;
        right: 55%;
    }
`;
const ScreenDiv2 = styled.div`
    z-index: 4;
    position: absolute;
    top: 20%;
    right: 20%;
    width: 25%;
    border-radius: 10px;
    transform: skewY(15deg);
    box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);
    @media all and (max-width: 1080px) {
        right: 18%;
    }
    @media all and (max-width: 980px) {
        bottom: 80px;
        top: unset;
        right: 40%;
  }
    `;
const ScreenDiv3 = styled.div`
    z-index: 3;
    position: absolute;
    top: 15%;
    right: 5%;
    width: 25%;
    border-radius: 10px;
    transform: skewY(15deg);
    box-shadow: 18px -9px 47px -7px rgb(0 0 0 / 75%);
    @media all and (max-width: 1080px) {
        right: 3%;
    }
    @media all and (max-width: 980px) {
        bottom: 80px;
        top: unset;
        right: 25%;

    }
`;
const Image = styled.img`
    border-radius: 10px;
    box-shadow: 4px 0px 0px 1px rgba(201,204,198,1);
`;


export default Pack;
