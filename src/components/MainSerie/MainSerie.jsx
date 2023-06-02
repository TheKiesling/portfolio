import React from 'react'
import styles from './MainSerie.module.scss'

const MainSerie = () => (
  <div className={`${styles.mainSerie}`}>

    <div className={`${styles.content}`}>
      <div className={`${styles.content__container}`}>
        <p className={`${styles.content__container__text}`}>
          Hello
        </p>

        <ul className={`${styles.content__container__list}`}>
          <li className={`${styles.content__container__list__item}`}>World !</li>
          <li className={`${styles.content__container__list__item}`}>Kiesling !</li>
          <li className={`${styles.content__container__list__item}`}>coders !</li>
          <li className={`${styles.content__container__list__item}`}>everybody !</li>
        </ul>
      </div>
    </div>
  </div>
)

export default MainSerie
