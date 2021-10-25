import React from 'react';
import DiamondSmall from '../../assets/images/home/diamond.svg';
import Figma from '../../assets/images/home/figma.svg';
import JSIcon from '../../assets/images/home/js.svg';
import TSIcon from '../../assets/images/home/ts.svg';
import RightArrowImage from '../../assets/images/icons/right.png';
import TickMark from '../../assets/images/icons/checkmark.svg';
import GreyTick from '../../assets/images/icons/checkmark-grey.png';
import styled from 'styled-components';

function PricingPlans() {
    return (
        <MainBody>
            <Wrapper className="wrapper">
                <Top>
                    <Tag>Pricing Plans</Tag>
                    <Title>
                        The right plan for your business
                    </Title>
                    <Description>
                        Choose the right plan for your needs. Always flexible to grow.
                    </Description>
                </Top>
                <Bottom>
                    <Item>
                        <ItemTag>License</ItemTag>
                        <ItemTitle>Standard</ItemTitle>
                        <UList>
                            <List><Image src={JSIcon} alt="Icon" /></List>
                        </UList>
                        <Above>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>One end products</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>12 months updates</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>6 months of support</FeatureDescription></FeatureDiv>
                        </Above>
                        <Hr />
                        <Below>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>JavaScript version</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={GreyTick} alt="Check" /><FeatureDescriptionGrey>TypeScript version</FeatureDescriptionGrey></FeatureDiv>
                            <FeatureDiv><Tick src={GreyTick} alt="Check" /><FeatureDescriptionGrey>Design Resources</FeatureDescriptionGrey></FeatureDiv>
                            <FeatureDiv><Tick src={GreyTick} alt="Check" /><FeatureDescriptionGrey>Commercial applications</FeatureDescriptionGrey></FeatureDiv>
                        </Below>
                        <Clickable>Learn more<RightArrow src={RightArrowImage} alt="Arrow" /></Clickable>
                        <Button>Choose Plan</Button>
                    </Item>
                    <ItemMiddle>
                        <ItemTag>License</ItemTag>
                        <ItemTitle>Standard Plus</ItemTitle>
                        <UList>
                            <List><Image src={DiamondSmall} alt="Icon" /></List>
                            <List><Image src={Figma} alt="Icon" /></List>
                            <List><Image src={JSIcon} alt="Icon" /></List>
                            <List><Image src={TSIcon} alt="Icon" /></List>
                        </UList>
                        <Above>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>One end products</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>12 months updates</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>6 months of support</FeatureDescription></FeatureDiv>
                        </Above>
                        <Hr />
                        <Below>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>JavaScript version</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>TypeScript version</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>Design Resources</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={GreyTick} alt="Check" /><FeatureDescriptionGrey>Commercial applications</FeatureDescriptionGrey></FeatureDiv>
                        </Below>
                        <Clickable>Learn more<RightArrow src={RightArrowImage} alt="Arrow" /></Clickable>
                        <ButtonBG>Choose Plan</ButtonBG>
                    </ItemMiddle>
                    <Item>
                        <ItemTag>License</ItemTag>
                        <ItemTitle>Extended</ItemTitle>
                        <UList>
                            <List><Image src={DiamondSmall} alt="Icon" /></List>
                            <List><Image src={Figma} alt="Icon" /></List>
                            <List><Image src={JSIcon} alt="Icon" /></List>
                            <List><Image src={TSIcon} alt="Icon" /></List>
                        </UList>
                        <Above>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>One end products</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>12 months updates</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>6 months of support</FeatureDescription></FeatureDiv>
                        </Above>
                        <Hr />
                        <Below>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>JavaScript version</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>TypeScript version</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>Design Resources</FeatureDescription></FeatureDiv>
                            <FeatureDiv><Tick src={TickMark} alt="Check" /><FeatureDescription>Commercial applications</FeatureDescription></FeatureDiv>
                        </Below>
                        <Clickable>Learn more<RightArrow src={RightArrowImage} alt="Arrow" /></Clickable>
                        <Button>Choose Plan</Button>
                    </Item>
                </Bottom>
            </Wrapper>
        </MainBody>
    )
}

const MainBody = styled.div`
    padding-bottom: 100px;
`;
const Wrapper = styled.div``;
const Top = styled.div`
    text-align: center;
    margin-bottom: 70px;
`;
const Tag = styled.small`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8d98a3;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 20px;
`;
const Title = styled.h5`
    font-size: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    @media all and (max-width: 640px) {
        font-size: 32px;
    }
`;
const Description = styled.p`
    color: #85939e;
    font-weight: 500;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }

`;
const Item = styled.div`
    width: 30%;
    padding: 40px;
    border-radius: 16px;
    box-shadow: rgb(145 158 171 / 10%) 0px 48px 80px;
    @media all and (max-width: 980px) {
        width: 60%;
        text-align: center;
        margin-bottom: 20px;
        box-shadow: rgb(145 158 171 / 75%) 0px 48px 80px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ItemMiddle = styled.div`
    width: 30%;
    padding: 40px;
    border-radius: 16px;
    background: #fff;
    box-shadow: rgb(145 158 171 / 75%) 0px 48px 80px;
    @media all and (max-width: 980px) {
        width: 60%;
        text-align: center;
        margin-bottom: 20px;
        box-shadow: rgb(145 158 171 / 75%) -1px 3px 80px;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ItemTag = styled.small`
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8d98a3;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 20px;
`;
const ItemTitle = styled.h5`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 40px;
`;
const UList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    width: 65%;
    @media all and (max-width: 1280px){
        width: 100%;
    }
    @media all and (max-width: 980px) {
        justify-content: center;
    }
`;
const List = styled.li`
    margin-right: 10px;
    :last-child{
        margin-right: 0px;
    }
`;
const Image = styled.img`
    cursor: pointer;
`;
const Above = styled.div`
    margin-bottom: 20px;
`;
const FeatureDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    @media all and (max-width: 980px) {
        justify-content: center;
    }
`;
const Tick = styled.img`
    width: 20px;
    margin-right: 10px;
    display: inline-block;
`;
const FeatureDescription = styled.p`
    display: inline-block;
    font-size: 14px;
`;
const FeatureDescriptionGrey = styled.p`
    display: inline-block;
    font-size: 14px;
    color: #a0adb8;
`;
const Hr = styled.hr`
    border-top: 1px dashed #919eab3d;
`;
const Below = styled.div`
    margin-top: 15px;
`;
const Clickable = styled.div`
    margin-left: auto;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #84919d;
    margin-bottom: 30px;
    cursor: pointer;
    font-size: 14px;
`;
const RightArrow = styled.img`
    width: 20px;
    display: inline-block;
`;
const Button = styled.button`
    width: 100%;
    display: inline-block;
    padding: 12px 20px;
    border: 1px solid #00ab55;
    color: #00ab55;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`;
const ButtonBG = styled.button`
    width: 100%;
    display: inline-block;
    padding: 12px 20px;
    border: 1px solid #00ab55;
    background-color: #00ab55;
    color: #fff;
    box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`;

export default PricingPlans;
