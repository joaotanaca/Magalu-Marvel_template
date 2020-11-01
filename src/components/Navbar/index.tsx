import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  ImageContainer,
  Nav,
  SubtitleNav,
  TitleNav,
  InputContainer,
  PreviewSearch,
  Preview
} from './styles'
import SearchIcon from './SearchIcon.png'
import { StateRedux } from '../../utils/interfaces/redux'
import { searchHero } from '../../store/actions'
import { Dispatch } from 'redux'
import { useLocation, useParams } from 'react-router-dom'
import api from '../../services/api'
import { ICompleteCharacter } from '../../utils/interfaces/characters'

const Navbar = () => {
  const dispatch: Dispatch = useDispatch()
  const { search } = useSelector((state: StateRedux) => state)
  const { pathname } = useLocation()
  const params = useParams()
  const [resultSearch, setResultSearch] = useState<ICompleteCharacter>()

  /**
   *
   * @param e: FormEvent<HTMLInputElement>
   */
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    dispatch(searchHero(e.currentTarget.value))
  }
  useEffect(() => {
    const params = search ? { name: search } : {}
    if (pathname !== '/' || params.name) {
      api
        .get('/characters', {
          params
        })
        .then(res => setResultSearch(res.data.data.results[0]))
    }
    if (search === '') setResultSearch(undefined)
  }, [search])

  useEffect(() => {
    dispatch(searchHero(''))
  }, [params])

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
        {pathname !== '/' && search ? (
          <PreviewSearch>
            <Preview to={`/hero/${resultSearch?.id}`}>
              {resultSearch?.name}
            </Preview>
          </PreviewSearch>
        ) : (
          ''
        )}
      </InputContainer>
    </Nav>
  )
}

export default Navbar
