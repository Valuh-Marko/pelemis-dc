import React, { useContext } from 'react'
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import GeneralContext from '../../context/GeneralContext';
import { AiOutlinePlus } from 'react-icons/ai'
import "./location.scss";

const LocationPage = () => {
  const { toggleNav } = useContext(GeneralContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="location-page-wrapper" >
        <AiOutlinePlus className='location-page-icon' />
        <a href='#' className="location-text"><span>Zaboravio sam ulicu</span> - 11100 - Belgrade</a>
        <AiOutlinePlus className='location-page-icon' />
      </div>
    </motion.div>
  )
}

export default Transition(LocationPage);