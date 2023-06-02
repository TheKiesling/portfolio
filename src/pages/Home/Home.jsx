import React from 'react'
import {
  NavBar,
  MainSerie,
  Slider,
  Footer,
} from '@components'
import {
  navigate,
} from '@store'
import styles from './Home.module.css'

const Home = () => (
  <div className={`${styles.netflix}`}>
    <header>
      <NavBar />
    </header>
    <div>
      <MainSerie />
      <div className={`${styles.sliders}`}>
        <Slider
          title="Web"
          onClick={() => navigate('/web')}
          projects={[
            {
              index: 0,
              imgSrc: 'https://s1.eestatic.com/2022/03/24/actualidad/659694554_222967910_864x486.jpg',
              title: 'Netflix replication',
              github: 'https://github.com/TheKiesling/netflix',
              techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
                'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white',
              ],
            },
            {
              index: 1,
              imgSrc: './maze.png',
              title: 'Rick & Morty maze',
              github: 'https://github.com/TheKiesling/MazeInReact',
              techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
                'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white',
                'https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white',
              ],
            },
            {
              index: 2,
              imgSrc: '/calculator.png',
              title: 'Calculator',
              github: 'https://github.com/TheKiesling/CalculatorInReact',
              techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
                'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white',
                'https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white',
              ],
            },
            {
              index: 3,
              imgSrc: '/memory.png',
              title: 'Pokemon memory',
              github: 'https://github.com/TheKiesling/MemoryGameInReact',
              techs: ['https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black',
                'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white',
              ],
            },
            {
              index: 4,
              imgSrc: '/draw.png',
              title: 'Draw in CSS',
              github: 'https://github.com/TheKiesling/DrawInCSS',
              techs: ['https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white',
                'https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white',
              ],
            },
            {
              index: 5,
              imgSrc: '/chat.png',
              title: 'Chat in JS',
              github: 'https://github.com/TheKiesling/ChatInJS',
              techs: ['https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black',
                'https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=Flask&logoColor=white'],
            },

          ]}
        />
        <Slider
          title="Apps"
          onClick={() => navigate('/apps')}
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
        <Slider
          title="Projects"
          onClick={() => navigate('/projects')}
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
            {
              index: 6,
              imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lisp_logo.svg/1200px-Lisp_logo.svg.png',
              title: 'Lisp Interpreter',
              github: 'https://github.com/bl33h/Lisp_Interpreter',
              techs: ['https://camo.githubusercontent.com/7858f416aa93ee56048ca2eb473bdde10002398fc4ff05e08faf6cb3cbb5bce1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612532302d2532334544384230302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661266c6f676f436f6c6f723d7768697465',
              ],
            },
          ]}
        />
        <Slider
          title="Others"
          onClick={() => navigate('/others')}
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
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Home
