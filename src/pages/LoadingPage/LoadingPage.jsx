import React, { useEffect } from 'react';
import './loadingPage.scss';
import logo from '../../assets/logo.png';
import { motion, cubicBezier } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Transition from '../../transitions/transition';

const LoadingPage = () => {
  const navigate = useNavigate();

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
    setTimeout(() => {
      navigate('/home')
    }, 4000);
  }, [])

  return (
    <div className='loading-page-wrapper'>
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
          {fillArray().map((number) => {
            return <div className="loading-page-percentage">{number}</div>
          })}
        </motion.div>
        <div className="loading-page-icon">%</div>
      </div>
    </div>
  )
}

export default Transition(LoadingPage);