import React, { useRef } from 'react'
import Transition from '../../transitions/transition';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';
import './gallery.scss';
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const GalleryPage = () => {
  const [imageData, setImageData] = useState({ image: '', imageId: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const { toggleNav, imageArray } = useContext(GeneralContext);
  const gallery = useRef(null);
  const indicator = useRef(null);

  const colisionHandler = (index) => {
    if (index === imageIndex) {
      return;
    }

    if (imageIndex < index) {
      setImageIndex(imageIndex + 1);
      return;
    }

    if (imageIndex > index) {
      setImageIndex(imageIndex - 1);
      return;
    }
  }

  const openModal = (image, index) => {
    setImageData(imageData => (
      {
        ...imageData,
        image,
        imageId: index
      }
    ));

    setModalOpen(true);
  }

  return (
    <motion.div className='page-wrapper'
      animate={{ y: toggleNav ? '-50%' : 0 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gallery-page-wrapper">
        <div className="image-count-wrapper">
          <motion.div className="image-count"
            animate={{ y: `${-imageIndex}rem` }}
            transition={{ duration: .3, esae: [0.22, 1, 0.36, 1] }}
          >
            {imageArray.map((image, index) => (
              <span className='image-count-number' key={image}>{index + 1}</span>
            ))}
          </motion.div>
          <span className="image-count-divider" />
          <div className="image-count">
            {imageArray.length}
          </div>
        </div>
        <div className="gallery-image-indicator" ref={indicator}>
          <AiOutlinePlus className='gallery-indicator-icon' />
        </div>
        <motion.div className="gallery" ref={gallery}
          //Thiiiis can very much be, and I dare say must, be optimized, im still a noob 
          onScroll={() => {
            gallery.current.childNodes.forEach((element, index) => {
              let elementX = element.getBoundingClientRect().x
              let elementWidth = element.getBoundingClientRect().width

              if (elementX + elementWidth >= indicator.current.getBoundingClientRect().x
                && elementX <= indicator.current.getBoundingClientRect().x + indicator.current.getBoundingClientRect().width
              ) {
                colisionHandler(index);
              }
            })
          }}
        >
          {imageArray.map((image, index) => (
            <motion.img src={image} key={index}
              loading='lazy'
              className="gallery-image"
              layoutId={`image-${index}`}
              onClick={() => openModal(image, index)}
            />
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {modalOpen && <Modal setModalOpen={setModalOpen} imageData={imageData} />}
      </AnimatePresence>
    </motion.div >
  )
}

export default Transition(GalleryPage);