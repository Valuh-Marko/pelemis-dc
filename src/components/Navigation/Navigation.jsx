import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import GeneralContext from '../../context/GeneralContext'
// Image Imports
import home from "../../assets/home.jpg"
import gallery from "../../assets/gallery.jpg"
import contact from "../../assets/contact.jpg"
import location from "../../assets/location.jpg"
import { motion } from 'framer-motion'
import RoutesContext from '../../context/RoutesContext'
import { BsArrowLeftRight } from 'react-icons/bs'

const variants = {
  open: { y: 0, scale: 1 },
  closed: { y: '70%', scale: .9 }
}

const variantsTwo = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: .9 }
}

const Navigation = () => {
  const { changeToggleNav, toggleNav } = useContext(GeneralContext);
  const routes = useContext(RoutesContext);

  return (
    <div className="nav">
      <motion.div className="nav-items"
        animate={toggleNav ? 'open' : 'closed'}
        transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
        variants={variants}
      >
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to={routes.home}>
            <h3 className="nav-link-title">home</h3>
            <img src={home} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to={routes.gallery}>
            <h3 className="nav-link-title">gallery</h3>
            <img src={gallery} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to={routes.location}>
            <h3 className="nav-link-title">location</h3>
            <img src={location} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to={routes.contact}>
            <h3 className="nav-link-title">contact</h3>
            <img src={contact} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
      </motion.div>
      <motion.div className="nav-scroll-indicator"
        animate={toggleNav ? 'open' : 'closed'}
        transition={{ duration: .82, ease: [0.22, 1, 0.36, 1], delay: .3 }}
        variants={variantsTwo}
      >
        <span>Scroll for more</span> <BsArrowLeftRight />
      </motion.div>
    </div>
  )
}

export default Navigation