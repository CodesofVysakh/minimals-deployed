import React from 'react';
import styled from 'styled-components';
import ImageLight from '../../assets/images/home/lightmode.png';
import ImageDark from '../../assets/images/home/darkmode.png';
import BGImage from '../../assets/images/home/shape.svg';

function Dark() {
    return (
        <MainBody>
            <Wrapper className="wrapper">
                <Left>
                    <HeroImage src={ImageLight} alt="Hero Image" />
                    <DarkImage src={ImageDark} alt="Dark Image" />
                </Left>            
                <Right>
                    <Tag>
                        Easy Switch Between Styles.
                    </Tag>
                    <Title>Dark mode</Title>
                    <Description>
                        A dark theme that feels easier on the eyes. 
                    </Description>
                    <BackgroundImage src={BGImage} alt="Background Image" />
                </Right>
            </Wrapper>
        </MainBody>
    )
}
const MainBody = styled.div`
    background: #161c24;
    color: #fff;
    padding: 10% 0;
`;
const Wrapper = styled.div`
    padding: 15% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;
const Left = styled.div`
    width: 50%;
`;
const HeroImage = styled.img`
    width: 50%;
    position: absolute;
    top: 60px;
    left: 0;
`;
const DarkImage = styled.img`
    width: 50%;
    position: absolute;
    top: 60px;
    left: 0;
`;
const Right = styled.div`
    width: 50%;
    margin-left: 20%;
`;
const Tag = styled.small`
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
    margin-bottom: 5%;
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
    margin-bottom: 30px;
`;
const BackgroundImage = styled.img`
    width: 60%;
    position: absolute;
    top: -20%;
    right: 0%;
    opacity: 0.5;
    filter: grayscale(1);
`;


export default Dark
