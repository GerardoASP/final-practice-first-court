import React from 'react'
import "./HomeUser.scss"
import { SectionOne } from '../SectionOne/SectionOne'
import { SectionTwo } from '../SectionTwo/SectionTwo'
import { SectionThree } from '../SectionThree/SectionThree'

const HomeUser = () => {
  return (
    <div className='HomeUser'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default HomeUser
