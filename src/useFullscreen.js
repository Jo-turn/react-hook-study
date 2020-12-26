import React, { useState, useRef, useEffect } from 'react'

const useFullscreen = callback => {
  const element = useRef()
  const runCb = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull)
    }
  }
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen()
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen()
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen()
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen()
      }
      runCb(true)
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.current.mozCancelFullscreen) {
      document.current.mozRequestFullscreen()
    } else if (document.current.webkitExitFullscreen) {
      document.current.webkitRequestFullscreen()
    } else if (document.current.msExitFullscreen) {
      document.current.msRequestFullscreen()
    }
    runCb(false)
  }
  return { element, triggerFull, exitFull }
}

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? 'We are full' : 'We are small')
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS)
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <div ref={element}>
        <h1>
          <img src="https://imgnews.pstatic.net/image/025/2020/09/22/0003037524_001_20200923055324738.jpg?type=w647" />
        </h1>
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
    </div>
  )
}
export default App
