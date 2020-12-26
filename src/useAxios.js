import defalultAxios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (opts, axiosInstance = defalultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    })
    if (!opts.url) {
      return
    }
    setTrigger(Date.now())
  }
  const [trigger, setTrigger] = useState(0)
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data,
        })
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error,
        })
      })
  }, [axiosInstance])
  return { ...state, refetch }
}

export default useAxios
