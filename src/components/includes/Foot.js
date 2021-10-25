import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/images/brand/logo.svg';

function Foot() {
    return (
        <Footer>
            <Wrapper className="wrapper">
                <Image src={LogoIcon} alt="Logo" />
                <Description>&copy; All rights reserved <Br />made by <SiteName>minimals.cc</SiteName></Description>
            </Wrapper>
        </Footer>
    )
}
const Footer = styled.footer`
    text-align: center;
    font-size: 14px;
    padding-bottom: 35px;
`;
const Wrapper = styled.div``;
const Image = styled.img`
    width: 40px;
    margin: 0 auto 10px;
    cursor: pointer;
`;
const Description = styled.div``;
const Br = styled.br``;
const SiteName = styled.span`
    color: #00ab55;
    cursor: pointer;
`;

export default Foot;
