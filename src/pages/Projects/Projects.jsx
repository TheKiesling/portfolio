import React from 'react'
import {
  NavBar,
  Slider,
  Footer,
} from '@components'
import styles from './Projects.module.css'

const Projects = () => (
  <div className={`${styles.projects}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.sliders}`}>
      <Slider
        projects={[
          {
            index: 0,
            imgSrc: 'charlys.png',
            title: 'Industrias Charlys',
            github: 'https://github.com/Aq202/uvg_industrias_charlys_frontend',
            techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
              'https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white',
              'https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white'],
          },
          {
            index: 1,
            imgSrc: 'https://static.wixstatic.com/media/445aa7_eb0f431491204d0a933a08266942e173~mv2.jpg/v1/fill/w_640,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/445aa7_eb0f431491204d0a933a08266942e173~mv2.jpg',
            title: 'Health System',
            github: 'https://github.com/Kojimena/BD-Proyecto2',
            techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
              'https://img.shields.io/badge/FastAPI-009688.svg?style=for-the-badge&logo=FastAPI&logoColor=white',
              'https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white'],
          },
          {
            index: 2,
            imgSrc: 'https://www.juegos-mentales.com/uploaded/game/screenshot/simonsays800450.webp',
            title: 'Simon says',
            github: 'https://github.com/TheKiesling/Simon-says-vowels',
            techs: ['https://img.shields.io/badge/Raspberry%20Pi-A22846.svg?style=for-the-badge&logo=Raspberry-Pi&logoColor=white',
              'https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=C++&logoColor=white'],
          },
          {
            index: 3,
            imgSrc: './inplace.png',
            title: 'In place dot merge',
            github: 'https://github.com/TheKiesling/In-place-dot-merge',
            techs: ['https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white',
              'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black',
              'https://img.shields.io/badge/Neo4j-4581C3.svg?style=for-the-badge&logo=Neo4j&logoColor=white'],
          },
          {
            index: 4,
            imgSrc: 'https://www.researchgate.net/publication/298298027/figure/fig2/AS:339820552441867@1458030941634/RSA-algorithm-structure.png',
            title: 'RSA Encryption',
            github: 'https://github.com/TheKiesling/RSA-Encryption',
            techs: ['https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=C++&logoColor=white',
              'https://img.shields.io/badge/NVIDIA-76B900.svg?style=for-the-badge&logo=NVIDIA&logoColor=white'],
          },
          {
            index: 5,
            imgSrc: 'pixel.bmp',
            title: 'Image Converter',
            github: 'https://github.com/TheKiesling/Image-Converter',
            techs: ['https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=C++&logoColor=white'],
          },

        ]}
      />
      <Slider projects={[
        {
          index: 0,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lisp_logo.svg/1200px-Lisp_logo.svg.png',
          title: 'Lisp Interpreter',
          github: 'https://github.com/bl33h/Lisp_Interpreter',
          techs: ['https://camo.githubusercontent.com/7858f416aa93ee56048ca2eb473bdde10002398fc4ff05e08faf6cb3cbb5bce1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612532302d2532334544384230302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661266c6f676f436f6c6f723d7768697465',
          ],
        }]}
      />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Projects
