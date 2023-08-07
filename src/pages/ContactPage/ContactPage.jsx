import React, { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext';
import { motion } from 'framer-motion';
import Transition from '../../transitions/transition';
import { AiOutlinePlus } from 'react-icons/ai';
import "./contact.scss";

const ContactPage = () => {
  const { toggleNav } = useContext(GeneralContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="contact-page-wrapper" >
        <AiOutlinePlus className='contact-page-icon' />
        <a href='#' className="contact-text"><span>Zaboravio sam ulicu</span> - 11100 - Belgrade</a>
        <AiOutlinePlus className='contact-page-icon' />
      </div>
    </motion.div>
  )
}

export default Transition(ContactPage);