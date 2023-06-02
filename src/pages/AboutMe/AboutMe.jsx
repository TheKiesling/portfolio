import React from 'react'
import {
  NavBar,
  Footer,
} from '@components'
import styles from './AboutMe.module.css'

const AboutMe = () => (
  <div className={`${styles.about}`}>
    <header>
      <NavBar />
    </header>
    <div className={`${styles.me}`}>
      <h1>About Me</h1>
      <hr />
      <div className={`${styles.more}`}>
        <div className={`${styles.first}`}>
          <img src="./me.jpeg" alt="" />
        </div>
        <div className={`${styles.second}`}>
          <span>José Pablo Kiesling</span>
          <p>Una persona que es </p>
          <div className={`${styles.lang}`}>
            <span>Inteligente</span>
            <span>Responsable</span>
            <span>Disciplinada</span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.education}`}>
      <h2>Education</h2>
      <hr />
      <div className={`${styles.educationImg}`}>
        <div>
          <img src="./suizo.png" alt="" />
          <div className={`${styles.educationText}`}>
            <h3>Educación primaria, secundaria y bachiller</h3>
            <span>2009-2020</span>
          </div>
        </div>
        <div>
          <img style={{ left: '50px' }} src="https://www.uvg.edu.gt/wp-content/uploads/socialshare-logo.jpg" alt="" />
          <div className={`${styles.educationText}`}>
            <h3>Educación universitaria</h3>
            <span>2021-Act.</span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.education}`}>
      <h2>Work</h2>
      <hr />
      <div className={`${styles.educationImg}`}>
        <div>
          <img src="./1.png" alt="" />
          <div className={`${styles.educationText}`}>
            <h3>Vocal de publicidad de la AECCTI</h3>
            <span>2023</span>
          </div>
        </div>
        <div>
          <img style={{ left: '50px' }} src="https://www.uvg.edu.gt/wp-content/uploads/socialshare-logo.jpg" alt="" />
          <div className={`${styles.educationText}`}>
            <h3>Profesor Auxiliar</h3>
            <span>Enero 2023-Act.</span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.education}`}>
      <h2>Hobbys</h2>
      <hr />
      <div className={`${styles.second}`}>
        <div className={`${styles.lang}`}>
          <span>Programar</span>
          <span>Ver series</span>
          <span>Hacer ejercicio</span>
          <span>Aprender</span>
          <span>Leer</span>
          <span>Ir al puerto</span>
        </div>
      </div>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AboutMe
