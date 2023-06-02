import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/GitHub'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp'
import {
  NavElement,
} from '@components'
import {
  navigate,
} from '@store'
import styles from './NavBar.module.css'

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [transparent, setTransparent] = useState(true)

  window.onscroll = () => {
    setTransparent(window.pageYOffset === 0)
  }

  return (
    <nav className={transparent ? `${styles.navBar}` : `${styles.navBarN}`}>
      <div className={`${styles.navPrimary}`}>
        <img
          src="/Logo_Kislin_SF.png"
          alt=""
          className={`${styles.logo}`}
          onClick={() => window.scrollTo({ top: 0 })}
        />
        <span
          onClick={() => navigate('/')}
          onKeyUp=""
          role="button"
          tabIndex={-1}
        >
          Inicio
        </span>
        <span onClick={() => navigate('/web')}> Web </span>
        <span onClick={() => navigate('/apps')}> Apps </span>
        <span onClick={() => navigate('/projects')}> Projects </span>
        <span onClick={() => navigate('/others')}> Others </span>
        <span onClick={() => navigate('/technologies')}> Technologies </span>
      </div>
      <div className={`${styles.navSecondary}`}>
        <div
          className={showSearch ? `${styles.search}` : `${styles.noSearch}`}
          aria-hidden
          onClick={() => setShowSearch(true)}
          onBlur={() => setShowSearch(false)}
          onKeyUp=""
          role="button"
        >
          <SearchIcon />
          {
            // eslint-disable-next-line jsx-a11y/no-autofocus
            showSearch ? <input placeholder="Títulos, personas, géneros" autoFocus /> : null
          }
        </div>
        <NavElement text=" " />
        <div
          className={`${styles.notifications}`}
          onMouseOver={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
          onFocus={() => setShowNotifications(false)}
          onClick={() => window.open('https://github.com/TheKiesling')}
        >
          <div>
            <NotificationsNoneIcon />
          </div>
        </div>
        <div
          className={`${styles.profile}`}
          onMouseOver={() => setShowProfile(true)}
          onMouseLeave={() => setShowProfile(false)}
          onFocus={() => setShowProfile(false)}
          onClick={() => navigate('/aboutme')}
        >
          <div
            className={`${styles.avatar}`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <ArrowDropDown className={showProfile ? `${styles.up}` : `${styles.down}`} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
