import React, { useEffect } from 'react'
import api from '../../services/api'

// import { Container } from './styles';

const Home: React.FC = () => {
  const fetchApi = async () => {
    const { data } = await api.get('/characters')
    console.log(data.data.results[0])
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return <div />
}

export default Home
