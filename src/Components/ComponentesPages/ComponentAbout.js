import React from 'react';
import style from './stylecomponents/ComponentAbout.css';

export default function CompoAbout(){
    return (
        <React.Fragment>
            <div className='aboutConteiner'>
                <div className='backcolor'>
                    <div>
                        <ul>
                            <li>Home <span>*</span> About Us</li>
                        
                            <h1>About Us</h1>
                            <hr/>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}