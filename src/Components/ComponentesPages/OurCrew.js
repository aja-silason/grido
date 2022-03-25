import React from 'react';
import style from './stylecomponents/OurCrew.css';

export default function OurCrew(){
    return (
        <React.Fragment>
            <div className='aboutConteinerOur'>
                <div className='backcolor'>
                    <div>
                        <ul>
                            <li>* SKILLED TEAM</li>
                            <li className='emlinha'>
                                <li><h1>Our Crew of Experts</h1></li>
                                <li className='btnviweall'>View All</li>
                            </li>
                            <hr/>
                        </ul>

                        <div className='cardsOur'>
                            <div className='cardsinside'>
                                <div className='cardimg1'></div>
                                <h3>Foguinho</h3>
                                <p>CHEFE CUSTOMER OFFICER</p>
                            </div>

                            <div className='cardsinside'>
                                <div className='cardimg2'></div>
                                <h3>Dwayne Johnson</h3>
                                <p>CHEFE CUSTOMER OFFICER</p>
                            </div>

                            <div className='cardsinside'>
                                <div className='cardimg3'></div>
                                <h3>Josefa Taylor</h3>
                                <p>CHEFE CUSTOMER OFFICER</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}