import React, { useState, useEffect } from 'react'

const App = () => {
  const sayHello = () => console.log('sayHello')
  const [number, setNumber] = useState(0)
  const [aNumver, setANumber] = useState(0)
  useEffect(sayHello, [number])
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumver + 1)}>{aNumver}</button>
    </div>
  )
}
export default App
