import React, { useContext } from 'react'
import { ICompleteCharacter } from '../../utils/interfaces/characters'
import { BottomContainer, CardContainer, ImageContainer } from './styles'
import * as Icon from 'react-icons/io'
import { IconBaseProps } from 'react-icons'
import { ThemeContext } from 'styled-components'
import { ThemeProps } from '../../utils/interfaces/styles'
import { useDispatch, useSelector } from 'react-redux'
import { StateRedux } from '../../utils/interfaces/redux'
import { addCharacters, removeCharacters } from '../../store/actions'
import { Link } from 'react-router-dom'

const Card = ({ hero }: { hero: ICompleteCharacter }) => {
  const theme: ThemeProps = useContext(ThemeContext)
  const { favorite } = useSelector((state: StateRedux) => state)
  const dispatch = useDispatch()
  const IconStyle: IconBaseProps = {
    size: 24,
    color: theme.red,
    cursor: 'pointer'
  }
  return (
    <CardContainer>
      <ImageContainer>
        <img
          alt={hero.name}
          src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
        />
      </ImageContainer>
      <BottomContainer>
        <Link to={`/hero/${hero.id}`}>{hero.name}</Link>
        {favorite.find(heroFavorited => heroFavorited.id === hero.id) ? (
          <Icon.IoMdHeart
            {...IconStyle}
            onClick={() => dispatch(removeCharacters(hero.id))}
          />
        ) : (
          <Icon.IoMdHeartEmpty
            {...IconStyle}
            onClick={() => favorite.length < 5 && dispatch(addCharacters(hero))}
          />
        )}
      </BottomContainer>
    </CardContainer>
  )
}

export default Card
