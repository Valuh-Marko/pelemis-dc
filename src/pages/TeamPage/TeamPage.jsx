import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import GeneralContext from '../../context/GeneralContext';
import TranslationContext from '../../context/TranslationContext'
import dejan from "../../assets/33.webp"
import martina from "../../assets/29.webp"
import milos from "../../assets/34.webp"
import miljana from "../../assets/28.webp"
import './team.scss'
import Transition from '../../transitions/transition';

const TeamPage = () => {
  const { toggleNav } = useContext(GeneralContext);
  const { translate } = useContext(TranslationContext);

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="team-page-wrapper">
        <div className="team-wrapper">
          <div className="team-card">
            <img src={dejan} alt="dejan.pelemis" className="team-card-image" />
            <h3 className="team-name">Dejan Pelemiš</h3>
            <p className="team-title">{translate.team.surgeon}</p>
            <a href="tel: 0655601885" className="team-contact">0655601885</a>
          </div>
          <div className="team-card">
            <img src={martina} alt="dejan.pelemis" className="team-card-image" />
            <h3 className="team-name">Martina Pelemiš</h3>
            <p className="team-title">{translate.team.speicalist}</p>
            <a href="tel: 0659507050" className="team-contact">0659507050</a>
          </div>
          <div className="team-card">
            <img src={milos} alt="dejan.pelemis" className="team-card-image" />
            <h3 className="team-name">Miloš Pelemiš</h3>
            <p className="team-title">{translate.team.doctor}</p>
            <a href="tel: 0669288605" className="team-contact">0669288605</a>
          </div>
          <div className="team-card">
            <img src={miljana} alt="dejan.pelemis" className="team-card-image" />
            <h3 className="team-name">Miljana Todorović</h3>
            <p className="team-title">{translate.team.asistant}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Transition(TeamPage);