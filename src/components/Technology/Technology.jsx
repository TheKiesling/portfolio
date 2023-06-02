import React from 'react'
import PropTypes from 'prop-types'
import styles from './Technology.module.css'

const Technology = ({ title, imgSrc }) => (
  <span className={`${styles.technology}`}>
    <div className={`${styles.img}`}>
      <img
        src={imgSrc}
        alt=""
      />
    </div>
    <div className={`${styles.text}`}>
      <h1>{title}</h1>
    </div>
  </span>
)

Technology.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Technology
