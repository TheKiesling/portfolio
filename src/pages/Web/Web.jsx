import React from 'react'
import {
  NavBar,
  Slider,
  Footer,
} from '@components'
import styles from './Web.module.css'

const Web = () => (
  <div className={`${styles.web}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.sliders}`}>
      <Slider
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
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Web
