import React from 'react'
import './home.scss';
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';

const HomePage = () => {
  const { toggleNav, imageArray } = useContext(GeneralContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="home-page-top">
        <div className="home-page-cta">
          <p className="home-page-logo">Neki Logo</p>
          <p className="home-page-language">SR - EN</p>
          <p className="home-page-mail">mail@gmail.com</p>
          <p className="home-page-phone">+381 69 5689321</p>
        </div>
        <div className="home-page-title-wrapper">
          <h1 className="home-page-title">Pelemiš Dental Care</h1>
          <h1 className="home-page-title">Pelemiš Dental Care</h1>
        </div>
      </div>
      <div className="home-page-bottom" style={{ backgroundImage: `url(${imageArray[0]})` }}>
        {/* <img src={imageArray[0]} alt="alt" className='home-page-image' /> */}
      </div>
    </motion.div>
  )
}

export default Transition(HomePage);