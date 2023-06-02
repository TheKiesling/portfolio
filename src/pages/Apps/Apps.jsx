import React from 'react'
import {
  NavBar,
  Slider,
  Footer,
} from '@components'
import styles from './Apps.module.css'

const Web = () => (
  <div className={`${styles.apps}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.sliders}`}>
      <Slider
        projects={[
          {
            index: 0,
            imgSrc: '/monni.jpeg',
            title: 'Monni',
            github: 'https://github.com/TheKiesling/Monni',
            techs: ['https://img.shields.io/badge/Kotlin-7F52FF.svg?style=for-the-badge&logo=Kotlin&logoColor=white',
              'https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black',
              'https://img.shields.io/badge/Coil-000000.svg?style=for-the-badge&logo=Coil&logoColor=white'],
          },
          {
            index: 1,
            imgSrc: 'https://www.criptonoticias.com/wp-content/uploads/2021/01/ricky-morty-tokens-coleccionables.jpg',
            title: 'Rick & Morty API',
            github: 'https://github.com/TheKiesling/Rick-Morty',
            techs: ['https://img.shields.io/badge/Kotlin-7F52FF.svg?style=for-the-badge&logo=Kotlin&logoColor=white',
              'https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=GraphQL&logoColor=white'],
          },
        ]}
      />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Web
