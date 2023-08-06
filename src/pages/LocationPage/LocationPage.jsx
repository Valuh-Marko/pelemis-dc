import React, { useContext } from 'react'
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import GeneralContext from '../../context/GeneralContext';

const LocationPage = () => {
  const { toggleNav } = useContext(GeneralContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      LocationPage
    </motion.div>
  )
}

export default Transition(LocationPage);