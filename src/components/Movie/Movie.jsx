import React, { useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import KeyboardArrowDownIcon from '@material-ui/icons/GitHub'
import PropTypes from 'prop-types'
import styles from './Movie.module.css'
import DialogIconsMovie from '../DialogIconsMovie/DialogIconsMovie'

const Movie = ({
  index, imgSrc, title, github, techs,
}) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showLike, setShowLike] = useState(true)
  const [descAdd, setDescAdd] = useState(false)
  const [descDislike, setDescDislike] = useState(false)
  const [descLike, setDescLike] = useState(false)
  const [descLove, setDescLove] = useState(false)
  const [descDetails, setDescDetails] = useState(false)

  const handleGithubClick = () => {
    window.open(github)
  }

  return (
    <div
      className={`${styles.movie}`}
      style={{ left: showInfo && (index * 233.5 + index * 3.5) }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowLike(true)}
    >
      <img
        src={imgSrc}
        alt=""
      />
      {
            showInfo
              ? (
                <div className={`${styles.info}`}>
                  <div className={`${styles.icons}`}>
                    <div className={`${styles.iconsPrimary}`}>
                      <div>
                        <PlayArrowIcon
                          className={`${styles.icon} ${styles.play}`}
                        />
                      </div>
                      <div className={`${styles.addIcon}`}>
                        <AddIcon
                          className={`${styles.icon}`}
                          onMouseEnter={() => setDescAdd(true)}
                          onMouseLeave={() => setDescAdd(false)}
                        />
                        {
                          descAdd ? <DialogIconsMovie text="Agregar a Mi lista" left="30" /> : null
                        }
                      </div>
                      <div>
                        {
                          showLike
                            ? (
                              <ThumbUpIcon
                                onMouseEnter={() => setShowLike(false)}
                                onMouseLeave={() => setShowLike(true)}
                                className={`${styles.icon}`}
                              />
                            )
                            : (
                              <div
                                className={`${styles.like}`}
                                onMouseEnter={() => setShowLike(false)}
                                onMouseLeave={() => setShowLike(true)}
                              >
                                <div className={`${styles.addIcon}`}>
                                  <ThumbDownIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescDislike(true)}
                                    onMouseLeave={() => setDescDislike(false)}
                                  />
                                  {
                                    descDislike ? <DialogIconsMovie text="No es para mí" left="20" /> : null
                                  }
                                </div>
                                <div className={`${styles.addIcon}`}>
                                  <ThumbUpIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescLike(true)}
                                    onMouseLeave={() => setDescLike(false)}
                                  />
                                  {
                                    descLike ? <DialogIconsMovie text="Me gusta" left="20" /> : null
                                  }
                                </div>
                                <div className={`${styles.addIcon}`}>
                                  <FavoriteBorderIcon
                                    className={`${styles.likeIcon}`}
                                    onMouseEnter={() => setDescLove(true)}
                                    onMouseLeave={() => setDescLove(false)}
                                  />
                                  {
                                    descLove ? <DialogIconsMovie text="Me encanta" left="20" /> : null
                                  }
                                </div>
                              </div>
                            )
                        }
                      </div>
                    </div>
                    <div className={`${styles.iconsSecondary}`}>
                      <div className={`${styles.addIcon}`}>
                        <KeyboardArrowDownIcon
                          className={`${styles.icon} ${styles.details}`}
                          onMouseEnter={() => setDescDetails(true)}
                          onMouseLeave={() => setDescDetails(false)}
                          onClick={() => handleGithubClick()}
                        />
                        {
                        descDetails ? (
                          <DialogIconsMovie
                            text="Github"
                            left="23"
                          />
                        ) : null
                      }
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.chapterInfo}`}>
                    <span className={`${styles.title}`}>{title}</span>
                  </div>
                  <div className={`${styles.techs}`}>
                    {techs.map((movie) => (
                      <img src={movie} alt="" />
                    ))}
                  </div>
                </div>
              ) : null
        }
    </div>
  )
}

export default Movie

Movie.propTypes = {
  index: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  techs: PropTypes.string.isRequired,
}
