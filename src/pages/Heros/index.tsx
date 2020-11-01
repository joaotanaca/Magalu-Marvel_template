/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as Icon from 'react-icons/io'
import { IconBaseProps } from 'react-icons'
import { ThemeContext } from 'styled-components'

import BaseContainer from '../../components/BaseContainer'
import api from '../../services/api'
import { ICompleteCharacter } from '../../utils/interfaces/characters'
import { StateRedux } from '../../utils/interfaces/redux'
import {
  Container,
  ContainerInformationsLeft,
  TitleContainer,
  Description,
  ContainerInformationsRight,
  ContainerInformations,
  MoviesComics,
  Comics,
  Movies,
  Rating,
  LastComic,
  ComicsContainer,
  Comic,
  TitleComics
} from './styles'
import { ThemeProps } from '../../utils/interfaces/styles'
import { addCharacters, removeCharacters } from '../../store/actions'
import book from './book.png'
import movies from './video.png'

const Heros = () => {
  const params: { id: string } = useParams()
  const theme: ThemeProps = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { favorite } = useSelector((state: StateRedux) => state)
  const [hero, setHero] = useState<ICompleteCharacter>()
  const [comicsArray, setComicsArray] = useState<any[]>([])

  const IconStyle: IconBaseProps = useMemo(
    () => ({
      size: 30,
      color: theme.red,
      cursor: 'pointer'
    }),
    [theme]
  )

  useEffect(() => {
    api
      .get(`/characters/${params.id}`)
      .then(res => setHero(res.data.data.results[0]))
    api
      .get(`/characters/${params.id}/comics`, {
        params: {
          orderBy: 'onsaleDate',
          limit: 10
        }
      })
      .then(({ data }) => {
        console.log(data.data.results)
        setComicsArray([...data.data.results])
      })
  }, [])

  return (
    <BaseContainer>
      {hero ? (
        <Container>
          <ContainerInformations>
            <ContainerInformationsLeft>
              <TitleContainer>
                <h1>{hero.name}</h1>
                {favorite.find(
                  heroFavorited => heroFavorited.id === hero.id
                ) ? (
                  <Icon.IoMdHeart
                    {...IconStyle}
                    onClick={() => dispatch(removeCharacters(hero.id))}
                  />
                ) : (
                  <Icon.IoMdHeartEmpty
                    {...IconStyle}
                    onClick={() =>
                      favorite.length < 5 && dispatch(addCharacters(hero))
                    }
                  />
                )}
              </TitleContainer>
              <Description>{hero.description}</Description>
              <MoviesComics>
                <Comics>
                  <p>Quadrinhos</p>
                  <div>
                    <img src={book} />
                    {hero.comics.available}
                  </div>
                </Comics>
                <Movies>
                  <p>Filmes</p>
                  <div>
                    <img src={movies} />
                    {hero.stories.available}
                  </div>
                </Movies>
              </MoviesComics>
              <Rating>
                <p>Rating:</p>
                {[0, 1, 2, 3, 4].map(number => (
                  <Icon.IoMdStar
                    key={number * number}
                    size={20}
                    color={theme.red}
                  />
                ))}
              </Rating>
              <LastComic>
                <b>Último quadrinho:</b>{' '}
                {!!comicsArray.length &&
                  new Date(
                    comicsArray[0].dates[0].date.replace('-000', '200')
                  ).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
              </LastComic>
            </ContainerInformationsLeft>
            <ContainerInformationsRight>
              <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} />
            </ContainerInformationsRight>
          </ContainerInformations>
          <ComicsContainer>
            <TitleComics>Últimos lançamentos:</TitleComics>
            {comicsArray.map(comic => (
              <Comic key={comic.id}>
                <img
                  src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                />
                {comic.title}
              </Comic>
            ))}
          </ComicsContainer>
          <></>
        </Container>
      ) : (
        <></>
      )}
    </BaseContainer>
  )
}

export default Heros
