import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/ComponentesPages/Footer';
import Menu from '../Components/ComponentesPages/Menu';
import NewsLatter from '../Components/ComponentesPages/NewsLatter';

export default function Contact(){
    return(
        <React.Fragment>
            <div>
                <Menu />
                <NewsLatter/>
                <Footer/>
            </div>
        </React.Fragment>
    );
}