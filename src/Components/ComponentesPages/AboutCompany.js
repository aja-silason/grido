import React from 'react';
import style from './stylecomponents/AboutCompany.css';
const imgmulher = '../../../Assets/mulherjeans.png';

export default function AboutCompany(){
    return (
        <React.Fragment>
            <div className='aboutCompanyConteiner'>
                <div className='company1'>
                    <div className='companyinside'>
                        <div className='card'>
                            <p className='bola'></p>
                        </div>
                    </div>

                    <div className='companyinside'>
                        <span>* About Company</span>
                        <h2>We Give you Digital Soluctions</h2>
                        <p>Conteúdo é o conjunto de valores, conhecimentos, habilidades e atitudes que o professor deve ensinar para garantir o desenvolvimento e a socialização do estudante. Pode ser classificado como conceitual (que envolve a abordagem de conceitos, fatos e princípios), procedimental (saber fazer) e atitudinal (saber ser).</p>
                        <hr/>
                        <div className='companyinsidebaixo'>
                            <div className='phones'>
                                <p>PHONES</p>
                                <span>+1 600 123 456 789</span>
                                <span>+1 800 321 654 987</span>
                            </div>

                            <div className='socialinside'>
                                <p>IN SOCIAL</p>
                                <div>
                                    <li><a href='https://www.twitter.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/></a></li>
                                    <li><a href='https://www.twitter.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/000000/facebook--v1.png"/></a></li>
                                    <li><a href='https://www.twitter.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin--v1.png"/></a></li>
                                    <li><a href='https://www.twitter.com/' target='_blank'><img src="https://img.icons8.com/ios-glyphs/30/000000/instagram--v1.png"/></a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='company2'>
                    <div className='company2inside'>
                        <div>
                            <h1><span>15</span></h1></div>
                        <div>
                            <li>YEARS OF</li>
                            <li>EXPERIENCE</li>
                        </div>
                    </div>
                    
                    <div className='company2inside'>
                        <div>
                            <h1><span>2k</span></h1></div>
                        <div>
                            <li>PROJECTS</li>
                            <li>WORLDWIDE</li>
                        </div>
                    </div>

                    <div className='company2inside'>
                        <div>
                            <h1><span>23</span></h1></div>
                        <div>
                            <li>VISITED</li>
                            <li>CONFERENCES</li>
                        </div>
                    </div>

                    <div className='company2inside'>
                        <div>
                            <h1><span>32</span></h1></div>
                        <div>
                            <li>MASTER</li>
                            <li>CERTIFICATIONS</li>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
}