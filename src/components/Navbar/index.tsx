import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  ImageContainer,
  Nav,
  SubtitleNav,
  TitleNav,
  InputContainer
} from './styles'
import SearchIcon from './SearchIcon.png'
import { StateRedux } from '../../utils/interfaces/redux'
import { searchHero } from '../../store/actions'
import { Dispatch } from 'redux'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const dispatch: Dispatch = useDispatch()
  const { search } = useSelector((state: StateRedux) => state)
  const { pathname } = useLocation()
  /**
   *
   * @param e: FormEvent<HTMLInputElement>
   */
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    dispatch(searchHero(e.currentTarget.value))
  }

  return (
    <Nav className={pathname !== '/' ? 'container hero' : 'container'}>
      <ImageContainer to="/">
        <img src="/Group@3x.png" />
      </ImageContainer>
      {pathname === '/' && (
        <>
          <TitleNav>explore o universo</TitleNav>
          <SubtitleNav>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </SubtitleNav>
        </>
      )}
      <InputContainer>
        <img src={SearchIcon} alt="Icone de pesquisa" />
        <input
          placeholder="Procure por heróis"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </InputContainer>
    </Nav>
  )
}

export default Navbar
