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

const variants = {
  open: { y: 0, scale: 1 },
  closed: { y: '70%', scale: .9 }
}

const Navigation = () => {
  const { changeToggleNav, toggleNav } = useContext(GeneralContext)

  return (
    <div className="nav">
      <motion.div className="nav-items"
        animate={toggleNav ? 'open' : 'closed'}
        transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
        variants={variants}
      >
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to="/home">
            <h3 className="nav-link-title">home</h3>
            <img src={home} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to="/gallery">
            <h3 className="nav-link-title">gallery</h3>
            <img src={gallery} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to="/location">
            <h3 className="nav-link-title">location</h3>
            <img src={location} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
        <div className="nav-item">
          <Link onClick={changeToggleNav} className="nav-link" to="/contact">
            <h3 className="nav-link-title">contact</h3>
            <img src={contact} alt="nav-link-image" className="nav-link-image" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Navigation