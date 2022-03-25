import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/ComponentesPages/Footer';
import Menu from '../Components/ComponentesPages/Menu';
import NewsLatter from '../Components/ComponentesPages/NewsLatter';
import OurCrew from '../Components/ComponentesPages/OurCrew';
import WhatSay from '../Components/ComponentesPages/WhatSay';

export default function Pages(){
    return(
        <React.Fragment>
            <div>
                <Menu />
                <NewsLatter/>
                <OurCrew/>
                <WhatSay/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}