import React from 'react'
import { images } from '../assets';

export const Characters = () => {
    const characters = [
        {
          _id: "1",
          nameService: "Serval Landau",
          serviceDescription: "Mecanica en Belobog",
          avatar: images.character1,
        },
        {
          _id: "2",
          nameService: "Gepard Landau",
          serviceDescription: "Soldado",
          avatar: images.character2,
        },
        {
          _id: "3",
          nameService: "Lynx Landua",
          serviceDescription: "Exploradora en Belobog",
          avatar: images.character3,
        },
      ];
  return (
    <div className="services-page-content">
      
    </div>
  )
}

