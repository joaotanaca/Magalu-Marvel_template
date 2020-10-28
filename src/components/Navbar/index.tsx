import React from 'react'
import {
  ImageContainer,
  Nav,
  SubtitleNav,
  TitleNav,
  InputContainer
} from './styles'
import SearchIcon from './SearchIcon.png'

const Navbar = () => {
  return (
    <Nav>
      <ImageContainer>
        <img src="/Group@3x.png" />
      </ImageContainer>
      <TitleNav>explore o universo</TitleNav>
      <SubtitleNav>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </SubtitleNav>
      <InputContainer>
        <img src={SearchIcon} alt="Icone de pesquisa" />
        <input placeholder="Procure por heróis" type="text" />
      </InputContainer>
    </Nav>
  )
}

export default Navbar
