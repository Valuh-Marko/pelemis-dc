import React from 'react'
import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'

const NavigationToggle = () => {
  const { changeToggleNav, toggleNav } = useContext(GeneralContext);

  return (
    <div className='navigation-toggle' onClick={changeToggleNav}>
      {toggleNav ? <GrClose className='menu-icon close' /> : <HiMenu className='menu-icon' />}
    </div>
  )
}

export default NavigationToggle;