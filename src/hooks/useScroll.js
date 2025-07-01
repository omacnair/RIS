import { useRef } from 'react'

/**
 * Кастомный хук для навигации по странице
 * @returns {Object} refs и функция scrollTo
 */
export const useScroll = () => {
  const refs = {
    hero: useRef(null),
    about: useRef(null),
    products: useRef(null),
    consultation: useRef(null)
  }

  const scrollTo = (refName) => {
    refs[refName].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return { refs, scrollTo }
}