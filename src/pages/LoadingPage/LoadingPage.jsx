import React, { useEffect } from 'react';
import './loadingPage.scss';
import logo from '../../assets/logo.webp';
import { motion, cubicBezier } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Transition from '../../transitions/transition';
import { useContext } from 'react';
import RoutesContext from '../../context/RoutesContext';
import GeneralContext from '../../context/GeneralContext';

const LoadingPage = () => {
  const navigate = useNavigate();
  const { home } = useContext(RoutesContext);
  const { imageArray } = useContext(GeneralContext);

  const fillArray = () => {
    let array = [];
    let index = 0;

    while (index <= 100) {
      array.push(index);
      index++;
    }

    return array;
  }

  useEffect(() => {
    imageArray.forEach(url => {
      const img = new Image();
      img.src = url;
    });

    setTimeout(() => {
      navigate(home);
    }, 4000);
  }, [])

  return (
    <div className='loading-page-wrapper'>
      <div style={{ position: 'fixed', width: 0, height: 0 }} className="image-preload-wrapper">
        {imageArray.map((image, index) => (
          <img src={image} key={index}
            className="preload-image"
          />
        ))}
      </div>
      <motion.img className='loading-page-logo' src={logo} alt="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5, ease: cubicBezier(.56, .27, .12, .99) }}
      />
      <div className="loading-page-loading">
        <motion.div className="loading-page-loading-wrapper"
          initial={{ y: '100rem' }}
          animate={{ y: '-100rem' }}
          transition={{
            delay: .62,
            ease: cubicBezier(1, 0, .15, 1),
            duration: 3.32
          }}
        >
          {fillArray().map((number, index) => {
            return <div key={index} className="loading-page-percentage">{number}</div>
          })}
        </motion.div>
        <div className="loading-page-icon">%</div>
      </div>
    </div>
  )
}

export default Transition(LoadingPage);