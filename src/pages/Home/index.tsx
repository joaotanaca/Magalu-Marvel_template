import React, { useEffect, useState } from 'react'
import BaseContainer from '../../components/BaseContainer'
import Card from '../../components/Card'
import api from '../../services/api'
import { ICompleteCharacter } from '../../utils/interfaces/characters'

const styleContainer: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

const Home = () => {
  const [heros, setHeros] = useState([])
  const fetchApi = async () => {
    const { data } = await api.get('/characters')
    setHeros(data.data.results)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <BaseContainer style={styleContainer}>
      <>
        {heros.map((hero: ICompleteCharacter) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </>
    </BaseContainer>
  )
}

export default Home
