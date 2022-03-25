import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Components/ComponentesPages/Menu';
import CompoAbout from '../Components/ComponentesPages/ComponentAbout';
import AboutCompany from '../Components/ComponentesPages/AboutCompany';
import Footer from '../Components/ComponentesPages/Footer';

export default function About(){
    return(
        <React.Fragment>
            <div>
                <Menu />
                <CompoAbout/>
                <AboutCompany/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}