import React, { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext';
import { motion } from 'framer-motion';
import Transition from '../../transitions/transition';

const ContactPage = () => {
  const { toggleNav } = useContext(GeneralContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      ContactPage
    </motion.div>
  )
}

export default Transition(ContactPage);