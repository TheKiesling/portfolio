import { createRouter } from '@storeon/router'

export default createRouter([
  ['/', () => ({ page: 'home' })],
  ['/web', () => ({ page: 'web' })],
  ['/apps', () => ({ page: 'apps' })],
  ['/projects', () => ({ page: 'projects' })],
  ['/others', () => ({ page: 'others' })],
  ['/technologies', () => ({ page: 'technologies' })],
  ['/aboutme', () => ({ page: 'aboutme' })],
])
