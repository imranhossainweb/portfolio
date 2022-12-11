import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <a href="mailto:imranmihnhossain@gmail.com">
            <span>imranmihnhossain@gmail.com</span>
            </a>
            <div className="f-icons">
            <a href="https://www.facebook.com/imranhossain.bela" target="blank">
            <Facebook color='white' size='2rem'/>
            </a>
            <a href="https://www.instagram.com/imranhossainbela" target="blank">
            <Instagram color='white' size='2rem'/>
            </a>
            <a href="https://www.linkedin.com/in/imran-hosssain" target="blank">
            <LinkedIn color='white' size='2rem'/>
            </a>
            
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Footer