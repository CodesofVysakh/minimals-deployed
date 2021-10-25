import React from 'react';
import styled from 'styled-components';
import UiIcon from '../../assets/images/icons/ic_code.svg';
import DesignIcon from '../../assets/images/icons/ic_design.svg';
import LogoIcon from '../../assets/images/brand/logo.svg';



function Features() {
    return (
        <MainBody className="wrapper">
            <Top>
                <Tag>Minimal</Tag>
                <Title>
                    What minimal helps you?
                </Title>
            </Top>
            <Bottom>
                <Items>
                    <Item>
                        <ImageContainer>
                            <img src={DesignIcon} alt="Icon" />
                        </ImageContainer>
                        <SmallTitle>
                            UI & UX Design
                        </SmallTitle>
                        <Description>The set is built on the principles
                            of the atomic design system. It
                            helps you to create projects
                            fastest and easily customized
                            packages for your projects.
                        </Description>
                    </Item>
                    <PaddedItem>
                        <PaddedDiv>
                            <ImageContainer>
                                <img src={UiIcon} alt="Icon" />
                            </ImageContainer>
                            <SmallTitle>
                                Development
                            </SmallTitle>
                            <Description>Easy to customize and extend
                            each component, saving you time
                            and money.
                            Branding
                            </Description>
                        </PaddedDiv>
                    </PaddedItem>
                    <DownItem>
                        <ImageContainer>
                            <img src={LogoIcon} alt="Icon" />
                        </ImageContainer>
                        <SmallTitle>
                            Branding
                        </SmallTitle>
                        <Description>Consistent design in colors, fonts
                        ... makes brand recognition easy.
                        </Description>
                    </DownItem>
                </Items>
            </Bottom>
        </MainBody>
    )
}

const MainBody = styled.div`
    text-align: center;
    padding: 80px 0;
`;
const Top = styled.div``;
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
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 10%;
    @media all and (max-width: 640px) {
        font-size: 32px;
    }
`;
const Bottom = styled.div``;
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Item = styled.div`
    background: #f3f6f8;
    text-align: center;
    width: 30%;
    padding: 80px 50px;
    border-radius: 12px;
    @media all and (max-width: 1080px) {
        padding: 30px 30px;
    }
    @media all and (max-width: 980px) {
        width: 60%;
        background: #fff;
        margin: 0 auto;
        margin-bottom: 40px;
        padding: 80px 50px;
        box-shadow: rgb(145 158 171 / 40%) -40px 40px 80px 0px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const PaddedItem = styled.div`
    background: #fff;
    text-align: center;
    transform: translateY(-40px);
    width: 30%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: rgb(145 158 171 / 40%) -40px 40px 80px 0px;
    @media all and (max-width: 1080px) {
        padding: 30px 30px;
    }
    @media all and (max-width: 980px) {
        width: 60%;
        background: #fff;
        margin: 0 auto;
        transform: translateY(0);
        margin-bottom: 40px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const DownItem = styled.div`
    background: #f3f6f8;
    text-align: center;
    width: 30%;
    padding: 80px 50px;
    transform: translateY(40px);
    border-radius: 12px;
    @media all and (max-width: 1080px) {
        padding: 30px 30px;
    }
    @media all and (max-width: 980px) {
        width: 60%;
        background: #fff;
        margin: 0 auto;
        padding: 80px 50px;
        transform: translateY(0);
        box-shadow: rgb(145 158 171 / 40%) -40px 40px 80px 0px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ImageContainer = styled.div`
    width: 30px;
    margin: 0 auto;
    margin-bottom: 50px;
`;
const SmallTitle = styled.small`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    display: inline-block;
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
`;
const PaddedDiv = styled.div`
    background: #fff;
    padding: 80px 50px;
    border-radius: 12px;
    box-shadow: rgb(145 158 171 / 12%) -20px 20px 40px 0px;
    @media all and (max-width: 1080px) {
        padding: 30px 30px 50px;
    }
    @media all and (max-width: 980px) {
        padding: 80px 50px;
        box-shadow: none;
    }
    @media all and (max-width: 640px) {
        padding: 50px 20px;
    }
`;

export default Features;
