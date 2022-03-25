import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Components/ComponentesPages/Menu';
import WhatSay from '../Components/ComponentesPages/WhatSay';
import Footer from '../Components/ComponentesPages/Footer';

export default function Blog(){
    return(
        <React.Fragment>
            <div>
            <Menu />
            <WhatSay/>
            <Footer/>
            </div>
        </React.Fragment>
    );
}