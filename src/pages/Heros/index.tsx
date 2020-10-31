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
  Description
} from './styles'
import { ThemeProps } from '../../utils/interfaces/styles'
import { addCharacters, removeCharacters } from '../../store/actions'

const Heros: React.FC = () => {
  const params: { id: string } = useParams()
  const theme: ThemeProps = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { favorite } = useSelector((state: StateRedux) => state)
  const [hero, setHero] = useState<ICompleteCharacter>()

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
  }, [])
  return (
    <BaseContainer>
      {hero ? (
        <Container>
          <ContainerInformationsLeft>
            <TitleContainer>
              <h1>{hero.name}</h1>
              {favorite.find(heroFavorited => heroFavorited.id === hero.id) ? (
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
          </ContainerInformationsLeft>
        </Container>
      ) : (
        <></>
      )}
    </BaseContainer>
  )
}

export default Heros
