import React from 'react';
import { Link } from 'react-router-dom';
import style from './stylecomponents/Menu.css'

export default function About(){
    return(
        <React.Fragment>
            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <h2><span>*</span> grido</h2>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>Pages</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                        <li>
                            <li className='liabt'>
                                <Link to='/about' className='abt'>About Us</Link>
                            </li>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}