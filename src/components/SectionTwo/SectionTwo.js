import React from 'react'
import "./SectionTwo.scss"
import BuyersCharactersList from '../BuyersCharactersList/BuyersCharactersList'

export const SectionTwo = () => {
  return (
    <div className='SectionTwo' id='SectionTwo'>
      In Process
      <BuyersCharactersList />
    </div>
  )
}