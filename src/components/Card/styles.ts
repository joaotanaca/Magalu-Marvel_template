import styled from 'styled-components'
import mixins from '../../styles/mixins'
import { ThemeProps } from '../../utils/interfaces/styles'

export const CardContainer = styled.div`
  flex-basis: calc(25% - 20px);
  text-align: left;
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;
  ${mixins.xs`
    flex-basis: calc(100% - 20px);
  `}
  ${mixins.sm`
    flex-basis: calc(50% - 20px);
  `}
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  a {
    text-decoration: none;
    color: ${(props: { theme: ThemeProps }) => props.theme.text_primary};
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 20vw;
  ${mixins.xs`
    height: 70vw;
  `}
  ${mixins.sm`
    height: 50vw;
  `}
  border-bottom: 3px solid ${(props: { theme: ThemeProps }) => props.theme.red};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
