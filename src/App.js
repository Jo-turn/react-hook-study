import React, { useState, useRef, useEffect } from 'react'

import useAxios from './useAxios'

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url:
      'https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json',
  })

  // console.log(`Loding: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  )
}
export default App
