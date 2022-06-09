import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contato</h1>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        <p className='p__opensans'>
          &quot;It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.&quot;
        </p>
        <img
          src={images.spoon}
          className='spoon__img'
          style={{ marginTop: 15 }}
        />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horários De Funcionamento</h1>
        <p className='p__opensans'>Segunda-Sexta:</p>
        <p className='p__opensans'>07:00 pm - 11:00 pm</p>
        <p className='p__opensans'>Sábado-Domingo:</p>
        <p className='p__opensans'>06:00 pm - 11:30 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
