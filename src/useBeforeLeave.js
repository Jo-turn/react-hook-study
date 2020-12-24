import React, { useState, useEffect, useRef } from 'react'

const useBeforeLeave = onBefore => {
  const handle = event => {
    const { clientY } = event
    if (clientY <= 0) {
      onBefore()
    }
  }
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return
    }
    document.addEventListener('mouseleave', handle)
    return () => document.removeEventListener('mouseleave', handle)
  }, [])
}

const App = () => {
  const beForLife = () => console.log('Please dont leave')
  useBeforeLeave(beForLife)
  return (
    <div className="App">
      <h1>히히</h1>
    </div>
  )
}
export default App
