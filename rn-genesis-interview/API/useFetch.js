import {useState, useEffect} from 'react'

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setErrorState] = useState();
  const [res, setRes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setRes(data)
        setIsLoading(false)
      } catch (error) {
        setErrorState(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData();
  },[res, errorState, isLoading]);
  
  return [res, isLoading, errorState]
};

export default useFetch;