import React from 'react';
import styled from 'styled-components';
import Rocket from '../../assets/images/home/rocket.png';


function Contact() {
    return (
        <MainBody>
            <Wrapper className="wrapper">
                <Top>
                    <Title>Still have questions?</Title>
                    <Description>Please describe your case to receive the most accurate advice</Description>
                    <Button>Contact Us</Button>
                </Top>
                <Bottom>
                    <Left>
                        <Image src={Rocket} alt="Rocket Image" />
                    </Left>
                    <Right>
                        <Heading>Get started with <Br />minimal kit today</Heading>
                        <PurchaseButton>Purchase Now</PurchaseButton>
                    </Right>
                </Bottom>
            </Wrapper>
        </MainBody>
    )
}
const MainBody = styled.div`
    padding: 50px 0;
`;
const Wrapper = styled.div``;
const Top = styled.div`
    text-align: center;
    padding-bottom: 150px;
    @media all and (max-width: 980px) {
        padding-bottom: 100px;
    }
`;
const Title = styled.h5`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
    margin-bottom: 40px;
`;
const Button = styled.button`
    background-color: #00ab55;
    color: #fff;
    padding: 16px 24px;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
    font-weight: bold;
    cursor: pointer;
`;
const Bottom = styled.div`
    background-image: linear-gradient(135deg, rgb(0, 171, 85) 0%, rgb(0, 123, 85) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    color: #fff;
    padding-right: 35px;
    @media all and (max-width: 768px) {
        flex-direction: column;
        padding-right: 0;
    }
`;
const Left = styled.div`
    animation: rocket 3.5s linear infinite;
`;
const Image = styled.img``;
const Right = styled.div`
    width: 50%;
    @media all and (max-width: 768px) {
        width: 90%;
        text-align: center;
        padding-bottom: 30px;
    }    
`;
const Heading = styled.h6`
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 40px;
    @media all and (max-width: 480px) {
       font-size: 32px;
    }
`;
const Br = styled.br`
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const PurchaseButton = styled.button`
    background-color: #fff;
    padding: 16px 20px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
`;

export default Contact;
