import React from 'react'
import './home.scss';
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {
  const { toggleNav, imageArray } = useContext(GeneralContext);
  const [random, setRandom] = useState(0);

  const randomIntegerBetween = (minNum, maxNum) => {
    if (minNum > maxNum) {
      [minNum, maxNum] = [maxNum, minNum]; // Swap values if minNum is greater
    }
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  useEffect(() => {
    const setRandomInterval = setInterval(() => {
      setRandom(() => randomIntegerBetween(0, 6));
    }, 4000);

    return () => window.clearInterval(setRandomInterval);
  }, [])

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