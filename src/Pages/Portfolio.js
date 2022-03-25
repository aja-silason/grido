import React from 'react';
import { Link } from 'react-router-dom';
import AboutCompany from '../Components/ComponentesPages/AboutCompany';
import Footer from '../Components/ComponentesPages/Footer';
import Menu from '../Components/ComponentesPages/Menu';

export default function Portfolio(){
    return(
        <React.Fragment>
            <div>
                <Menu/>
                <AboutCompany/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}