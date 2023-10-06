import React, { useContext } from 'react'
import Transition from '../../transitions/transition';
import { motion } from 'framer-motion';
import GeneralContext from '../../context/GeneralContext';
import "./contact.scss";
import TranslationContext from '../../context/TranslationContext';
import mapa from '../../assets/mapa.png'

const ContactPage = () => {
  const { toggleNav } = useContext(GeneralContext);
  const { translate } = useContext(TranslationContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="contact-page-wrapper" >
        <div className="contact-page-top">
          <img src={mapa} alt="" />
        </div>
        <div className="contact-page-bottom">
          <a href='https://maps.app.goo.gl/Dhwg3Hbkf1Ahpg8M7' target="_blank" className="contact-text"><span>Maksima Gorkog 36b</span> - 11100 - {translate.contact.city}</a>
          <a href='mailto:pelemisdentalcare@gmail.com' className="contact-text"><span>pelemisdentalcare@gmail.com</span></a>
          <a href='phone:+38166377353' target="_blank" className="contact-text"><span>+381 66 377 353</span></a>
        </div>
      </div>
    </motion.div>
  )
}

export default Transition(ContactPage);