/* eslint-disable indent */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { IoMdHeart } from 'react-icons/io'
import { MdFilterList } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ThemeContext } from 'styled-components'
import BaseContainer from '../../components/BaseContainer'
import Card from '../../components/Card'
import Switch from '../../components/Switch'
import api from '../../services/api'
import { ICompleteCharacter } from '../../utils/interfaces/characters'
import { StateRedux } from '../../utils/interfaces/redux'
import { ThemeProps } from '../../utils/interfaces/styles'
import {
  Header,
  FindHeros,
  Filters,
  Order,
  OnlyFavorites,
  FilterMobile,
  CardsContainer,
  SpinnerLoading,
  BottomContainerCards,
  MoreHeros
} from './styles'

const Home = () => {
  const [heros, setHeros] = useState<ICompleteCharacter[]>([])
  const { search, favorite } = useSelector((state: StateRedux) => state)
  const [page, setPage] = useState<number>(0)
  const [pages, setPages] = useState<number>(0)
  const [azOrder, setAZOrder] = useState<boolean>(true)
  const [onlyFavortites, setOnlyFavorites] = useState<boolean>(false)
  const [loadingHeros, setLoadingHeros] = useState<boolean>(false)
  const theme: ThemeProps = useContext(ThemeContext)

  const fetchApi = useCallback(async () => {
    setLoadingHeros(true)
    const { data } = await api.get('/characters', {
      params: {
        offset: page * 20
      }
    })
    setHeros([...heros, ...data.data.results])
    if (pages === 0) setPages(Math.ceil(data.data.total / 20))
    setLoadingHeros(false)
  }, [page, heros, setLoadingHeros, setPages])

  useEffect(() => {
    fetchApi()
  }, [page])

  const renderCards = useCallback(() => {
    let cards: JSX.Element[]
    const herosVerification = onlyFavortites ? favorite : heros
    if (search === '' && azOrder) {
      cards = herosVerification.map(hero => <Card key={hero.id} hero={hero} />)
    } else if (!azOrder) {
      const revertHeros = [...herosVerification]
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
        .reverse()
      cards = revertHeros.map(hero => <Card key={hero.id} hero={hero} />)
    } else {
      const herosFiltered = herosVerification.filter(hero =>
        hero.name.toLowerCase().includes(search.toLowerCase())
      )
      cards = herosFiltered.map(hero => <Card key={hero.id} hero={hero} />)
    }
    return cards
  }, [heros, azOrder, search, favorite, onlyFavortites])

  const optionsFilter = () => (
    <>
      <img src="/super_hero.png" />
      <Order>Ordenar por nome - {azOrder ? 'A/Z' : 'Z/A'}</Order>
      <Switch
        active={azOrder}
        onClick={() => {
          setAZOrder(prev => !prev)
        }}
      />
      <OnlyFavorites
        onClick={() => setOnlyFavorites(prev => !prev)}
        className={onlyFavortites ? 'active' : ''}
      >
        <IoMdHeart size={24} color={theme.red} style={{ marginRight: 5 }} />
        Somente favoritos
      </OnlyFavorites>
    </>
  )

  return (
    <BaseContainer>
      <>
        <Header>
          <FindHeros>Encontrados {heros.length} heróis</FindHeros>
          <Filters>{optionsFilter()}</Filters>
          <FilterMobile>
            <MdFilterList color={theme.red} size={24} />
            <div className="dropdown">{optionsFilter()}</div>
          </FilterMobile>
        </Header>
        <CardsContainer>
          {renderCards()}
          <BottomContainerCards>
            {loadingHeros ? (
              <SpinnerLoading size={30} color={theme.red} />
            ) : (
              <MoreHeros
                onClick={() => {
                  setPage(prev => prev + 1)
                }}
              >
                Carregar heróis
              </MoreHeros>
            )}
          </BottomContainerCards>
        </CardsContainer>
      </>
    </BaseContainer>
  )
}

export default Home
