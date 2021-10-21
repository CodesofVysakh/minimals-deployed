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
                            <img src={UiIcon} alt="Icon" />
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
                    <Item>
                        <PaddedDiv>
                            <ImageContainer>
                                <img src={DesignIcon} alt="Icon" />
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
                    </Item>
                    <Item>
                        <ImageContainer>
                            <img src={LogoIcon} alt="Icon" />
                        </ImageContainer>
                        <SmallTitle>
                            Branding
                        </SmallTitle>
                        <Description>Consistent design in colors, fonts
                        ... makes brand recognition easy.
                        </Description>
                    </Item>
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
`;
const Bottom = styled.div``;
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Item = styled.div`
    background: #f3f6f8;
    text-align: center;
    width: 30%;
`;
const ImageContainer = styled.div`
    width: 20px;
    margin: 0 auto;
`;
const SmallTitle = styled.small``;
const Description = styled.p``;
const PaddedDiv = styled.div``;

export default Features;
