import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import styles from './Slider.module.css'
import Movie from '../Movie/Movie'

const Slider = ({ title, onClick, projects }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [showExplore, setShowExplore] = useState(false)
  const moviesRef = useRef()

  const moveLeft = (distance) => {
    setSlideNumber(slideNumber - 1)
    return `translateX(${237 + distance}px)`
  }

  const moveRight = (distance) => {
    setSlideNumber(slideNumber + 1)
    return `translateX(${-237 + distance}px)`
  }

  const handleClick = (direction) => {
    const distance = moviesRef.current.getBoundingClientRect().x - 60
    moviesRef.current.style.transform = direction === 'left'
      ? moveLeft(distance) : moveRight(distance)
  }

  return (
    <div className={`${styles.slider}`}>
      <div
        className={`${styles.titleContainer}`}
        onMouseOver={() => setShowExplore(true)}
        onMouseLeave={() => setShowExplore(false)}
        onFocus={() => setShowExplore(false)}
        onClick={onClick}
      >
        <span className={`${styles.title}`}>
          {title}
        </span>
        {
            showExplore
              ? (
                <div
                  className={`${styles.exploreContainer}`}
                >
                  <span className={`${styles.explore}`}>Explorar todos</span>
                  <ArrowForwardIcon
                    className={`${styles.arrowExplore}`}
                    style={{
                      fontSize: '1em',
                      marginLeft: '5px',
                      marginTop: '-1px',
                    }}
                  />
                </div>
              )
              : null
        }
      </div>
      <div className={`${styles.container}`}>
        {
          slideNumber > 0
            ? <ArrowBackIosIcon className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick('left')} />
            : null
        }
        <div className={`${styles.movies}`} ref={moviesRef}>
          {projects.map((movie) => (
            <Movie index={movie.index} imgSrc={movie.imgSrc} title={movie.title} github={movie.github} techs={movie.techs} />
          ))}
        </div>
        {
          slideNumber < projects.length - 6 && projects.length > 6
            ? <ArrowForwardIcon className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick('right')} />
            : null
        }
      </div>
    </div>
  )
}

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.isRequired).isRequired,
}

export default Slider
