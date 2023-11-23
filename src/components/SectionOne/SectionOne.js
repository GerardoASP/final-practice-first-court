import React from 'react'
import "./SectionOne.scss"
import FavoritesCharactersList from '../FavoritesCharactersList/FavoritesCharactersList'

export const SectionOne = () => {
  return (
    <div className='SectionOne' id='SectionOne'>
      In Stock
      <FavoritesCharactersList />
    </div>
    
  )
}