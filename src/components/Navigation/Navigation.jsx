import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import GeneralContext from '../../context/GeneralContext'
// Image Imports
import home from "../../assets/23.webp"
import gallery from "../../assets/32.webp"
import contact from "../../assets/16.webp"
import team from "../../assets/22.webp"
import { motion } from 'framer-motion'
import RoutesContext from '../../context/RoutesContext'
import TranslationContext from '../../context/TranslationContext'

const variants = {
  open: { y: 0, scale: 1 },
  closed: { y: '70%', scale: .9 }
}

const Navigation = () => {
  const { changeToggleNav, toggleNav } = useContext(GeneralContext);
  const { translate } = useContext(TranslationContext);
  const routes = useContext(RoutesContext);

  return (
    <div className="nav">
      <motion.div className="nav-items"
        animate={toggleNav ? 'open' : 'closed'}
        transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
        variants={variants}
      >
        <div className="nav-item">
          <Link as={NavLink} onClick={changeToggleNav} className="nav-link" to={routes.home}>
            <h3 className="nav-link-title">{translate.menu.home}</h3>
            <img src={home} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link as={NavLink} onClick={changeToggleNav} className="nav-link" to={routes.gallery}>
            <h3 className="nav-link-title">{translate.menu.gallery}</h3>
            <img src={gallery} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link as={NavLink} onClick={changeToggleNav} className="nav-link" to={routes.contact}>
            <h3 className="nav-link-title">{translate.menu.contact}</h3>
            <img src={contact} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link as={NavLink} onClick={changeToggleNav} className="nav-link" to={routes.team}>
            <h3 className="nav-link-title">{translate.menu.team}</h3>
            <img src={team} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Navigation