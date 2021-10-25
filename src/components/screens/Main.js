import React from 'react';
import Foot from '../includes/Foot';
import Contact from '../includes/sections/Contact';
import Dark from '../includes/sections/Dark';
import Features from '../includes/sections/Features';
import Pack from '../includes/sections/Pack';
import PricingPlans from '../includes/sections/PricingPlans';
import Spotlight from '../includes/sections/Spotlight';
import Theme from '../includes/sections/Theme';

function Main() {
    return (
        <>
            <Spotlight />
            <Features />
            <Pack />
            <Dark />
            <Theme />
            <PricingPlans />
            <Contact />
            <Foot />
        </>
    )
}


export default Main;
