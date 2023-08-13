import React, { useRef } from 'react'
import './home.scss';
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';
import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval'

const HomePage = () => {
  const { toggleNav, imageArray } = useContext(GeneralContext);
  const interval = useRef();
  const [random, setRandom] = useState(0);

  useInterval(() => {
    setRandom(random + 1);

    if (random >= 5) {
      setRandom(0)
    }
  }, 3500)

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="home-page-top">
        <div className="home-page-title-wrapper">
          <p className="home-page-desc">Stomatoloska ordinacija</p>
          <h1 className="home-page-title">Pelemiš</h1>
        </div>
      </div>
      <div className="home-page-center">
        <img src={imageArray[random]} alt="alt" className='home-page-image' />
      </div>
      <div className="home-page-bottom">
        <div className="home-page-cta">
          <p className="home-page-mail">mail@gmail.com</p>
          <p className="home-page-language">SR - EN</p>
          <p className="home-page-phone">+381 69 5689321</p>
        </div>
        <h2 className="home-page-subtitle">DENTAL CARE</h2>
      </div>
    </motion.div>
  )
}

export default Transition(HomePage);