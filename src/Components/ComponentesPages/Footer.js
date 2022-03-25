import React from 'react';
import style from './stylecomponents/Footer.css';
const imgmulher = '../../../Assets/mulherjeans.png';

export default function Footer(){
    return (
        <React.Fragment>
            <div className='footerConteiner'>
                <div className='company1'>
                    <div className='companyinside'>
                        <div className='sayConteiner'>
                            <h2><span> * </span>grido</h2>
                            <p></p>
                            <h1>Say Hi!</h1>
                        </div>
                        <div className='socialinside'>
                            <li><a href='https://www.twitter.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/20/ffffff/twitter--v1.png"/></a></li>
                            <li><a href='https://www.facebook.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/20/ffffff/facebook--v1.png"/></a></li>
                            <li><a href='https://www.linkedin.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/20/ffffff/linkedin--v1.png"/></a></li>
                            <li><a href='https://www.instagram.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/20/ffffff/instagram--v1.png"/></a></li>
                        </div>
                    </div>

                    <div className='companyinside'>
                        <div className='companyinsidebaixo'>
                            <div className='phones'>
                                <h3>CONTACT US</h3>
                                <p></p>
                                <h3>+1 600 123 456 789</h3>
                                <h3>+1 800 321 654 987</h3>
                                <p>Man - Sun - 10am - 10pm</p>
                                <p>27 Division St, New York,</p>
                                <p>NY 1002, USA</p>
                                
                                <span> grido@mail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className='companyinside'>
                        <div className='companyinsidebaixo'>
                            <div className='phones'>
                                <p>SUBSCRIBE</p>
                                <p>Subscribe to our newslatter</p>
                                <div className='newslatter'>
                                    <input type='email' placeholder='Your Email' required/><button><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/30/ffffff/external-email-interface-kiranshastry-lineal-kiranshastry-1.png"/></button>
                                </div>
                                <p> º Don't worry, we don't spam</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='company2'>
                    <div>
                        <p> * COPYRIGHT &copy; 2022 GRIDO BY WEGENUNIUSLAB. ALL RIGHT RESERVED * COPYRIGHT &copy; 2022 GRIDO BY WEGENUNIUSLAB. ALL RIGHT RESERVED *</p>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}