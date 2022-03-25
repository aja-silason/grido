import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/ComponentesPages/Footer';
import Menu from '../Components/ComponentesPages/Menu';
import OurCrew from '../Components/ComponentesPages/OurCrew';


export default function Shop(){
    return(
        <React.Fragment>
            <div>
                <Menu />
                <OurCrew/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}