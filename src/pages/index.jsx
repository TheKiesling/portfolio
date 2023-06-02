/* eslint-disable import/no-unresolved */
import React from 'react'
import { useStoreon } from 'storeon/react'
import { routerKey } from '@storeon/router'
import Home from './Home/Home'
import Technologies from './Technologies/Technologies'
import AboutMe from './AboutMe/AboutMe'
import Web from './Web/Web'
import Apps from './Apps/Apps'
import Projects from './Projects/Projects'
import Others from './Others/Others'

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case 'home':
      Component = <Home />
      break
    case 'technologies':
      Component = <Technologies />
      break
    case 'aboutme':
      Component = <AboutMe />
      break
    case 'web':
      Component = <Web />
      break
    case 'apps':
      Component = <Apps />
      break
    case 'projects':
      Component = <Projects />
      break
    case 'others':
      Component = <Others />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
