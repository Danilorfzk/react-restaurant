import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contato' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Localização
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Horarios de funcionamento
        </p>
        <p className='p__opensans'>Segunda - Sexta: 07:00 pm - 11:00 pm</p>
        <p className='p__opensans'>Sabado - Domingo: 06:00 pm - 11:30 pm</p>
      </div>
      <button
        type='button'
        className='custom__button'
        style={{ marginTop: '2rem' }}
      >
        Saiba mais
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='finus_img' />
    </div>
  </div>
);

export default FindUs;
