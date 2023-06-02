import React from 'react'
import {
  NavBar,
  Slider,
  Footer,
} from '@components'
import styles from './Others.module.css'

const Others = () => (
  <div className={`${styles.others}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.sliders}`}>
      <Slider
        projects={[
          {
            index: 0,
            imgSrc: 'https://irp-cdn.multiscreensite.com/55d07fd3/dms3rep/multi/Tik-Tok.png',
            title: 'TikTok',
            github: 'https://www.figma.com/file/gMEibuXmfjcs4APw90eGtG/TikTok-UI-Screens-(Community)-(Copy)?type=design&node-id=4%3A171&t=HuvzFrIg41oMvJZF-1',
            techs: ['https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white'],
          },
          {
            index: 1,
            imgSrc: 'https://static.whatsapp.net/rsrc.php/v3/yR/r/y8-PTBaP90a.png',
            title: 'WhatsApp',
            github: 'https://www.figma.com/file/uxxmHmxTNdhssumPGQB7Zz/WhatsApp-Clone--(Dark-mode)-(Community)?type=design&node-id=221-441&t=uAZqUSkdIFbTufdc-0',
            techs: ['https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white'],
          },
          {
            index: 2,
            imgSrc: 'https://clan.akamai.steamstatic.com/images/41316928/f7f5587c77587cc8ae5eb50e39defcbcc3acaa88.jpg',
            title: 'Steam',
            github: 'https://www.figma.com/file/la4PNEU8padi6y83kOCbcq/Steam-UI-(Community)?type=design&node-id=0%3A1&t=mLy4ztJhlIuZ18Uv-1',
            techs: ['https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white'],
          },
          {
            index: 3,
            imgSrc: './swim.png',
            title: 'Swim & Gym',
            github: 'https://www.figma.com/file/w3YzezlJVfWGTrqjoHkD0W/Untitled?type=design&node-id=0%3A1&t=qdvsbvMQ31xU3nTR-1',
            techs: ['https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white'],
          },
        ]}
      />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Others
