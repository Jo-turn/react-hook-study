import React, { useState, useRef, useEffect } from 'react'

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return
    }
    if (element.current) {
      const { current } = element
      // console.log(element.current.style.transition);
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  return { ref: element, style: { opacity: 0 } }
}

const App = () => {
  const fadeInH1 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 10)
  return (
    <div className="App">
      <h1 {...fadeInH1}>히히</h1>
      <p {...fadeInP}>lorem ipsum lalalala</p>
    </div>
  )
}
export default App
