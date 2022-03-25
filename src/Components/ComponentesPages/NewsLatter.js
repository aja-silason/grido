import React from 'react';
import style from './stylecomponents/NewsLatter.css';


export default function NewsLatter(){
    return (
        <React.Fragment>
            <div className='newsconteiner'>
                <div className='backcolor'>
                    <div>
                        <input type='email' placeholder='Your Email' required/><button><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/ffffff/external-email-interface-kiranshastry-lineal-kiranshastry-1.png"/></button>
                        <hr/>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}