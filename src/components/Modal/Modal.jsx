import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import './modal.scss'

const Modal = ({ imageData, setModalOpen }) => {
  return ReactDOM.createPortal(
    <>
      <motion.div className='modal-backdrop'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: .2,
        }}
        onClick={() => setModalOpen(false)}
      >
      </motion.div>
      <motion.div className="modal-image-wrapper"
        layoutId={`image-${imageData.imageId}`}
        transition={{ duration: .2 }}
      >
        <img src={imageData.image} className="modal-image"
          onClick={(e) => {
            e.stopPropagation();
            setModalOpen(false)
          }}
        />
      </motion.div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal