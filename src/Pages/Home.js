import React from 'react';
import { Link } from 'react-router-dom';
import AboutCompany from '../Components/ComponentesPages/AboutCompany';
import CompoAbout from '../Components/ComponentesPages/ComponentAbout';
import Footer from '../Components/ComponentesPages/Footer';
import Menu from '../Components/ComponentesPages/Menu';
import NewsLatter from '../Components/ComponentesPages/NewsLatter';
import OurCrew from '../Components/ComponentesPages/OurCrew';
import WhatSay from '../Components/ComponentesPages/WhatSay';

export default function Home(){
    return(
        <React.Fragment>
            <div>
                <Menu />
                <CompoAbout/>
                <AboutCompany/>
                <OurCrew/>
                <NewsLatter/>
                <WhatSay/>
                <Footer/>
            </div>
        </React.Fragment>
    );
} 