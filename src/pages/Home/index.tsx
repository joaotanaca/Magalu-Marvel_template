import React, { useEffect } from 'react'
import BaseContainer from '../../components/BaseContainer'
import api from '../../services/api'

const Home: React.FC = () => {
  const fetchApi = async () => {
    const { data } = await api.get('/characters')
    console.log(data.data.results[0])
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <BaseContainer>
      <div />
    </BaseContainer>
  )
}

export default Home
