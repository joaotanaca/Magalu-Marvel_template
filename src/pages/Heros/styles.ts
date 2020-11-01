import styled from 'styled-components'
import mixins from '../../styles/mixins'
import { ThemeProps } from '../../utils/interfaces/styles'

export const Container = styled.div`
  width: 95%;
  margin: 20px auto 80px;
`
export const ContainerInformations = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`

export const ContainerInformationsLeft = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column;
  margin-right: 20px;
`

export const ContainerInformationsRight = styled.div`
  flex: 6;
  display: flex;
  flex-flow: column;
  margin-left: 20px;
  ${mixins.sm`
    display: none;
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props: { theme: ThemeProps }) => props.theme.text_secondary};
`

export const MoviesComics = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
export const Comics = styled.div`
  display: flex;
  flex-flow: column;
  p {
    font-size: calc(9px + 0.3vw);
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`

export const Movies = styled.div`
  display: flex;
  flex-flow: column;
  p {
    font-size: calc(9px + 0.3vw);
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`
export const Rating = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: calc(9px + 0.3vw);
  p {
    margin-right: 10px;
  }
`
export const LastComic = styled.p`
  margin-top: 20px;
  font-size: calc(9px + 0.3vw);
`
export const ComicsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 30px 0;
`
export const Comic = styled.div`
  flex-basis: calc(15% - 40px);
  margin: 40px 0;
  padding: 0 20px;
  ${mixins.sm`
    flex-basis: calc(50% - 40px);
  `}
  img {
    width: 100%;
    object-fit: contain;
  }
`
export const TitleComics = styled.h2`
  flex-basis: 100%;
  margin-bottom: 40px;
`
