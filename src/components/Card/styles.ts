import styled from 'styled-components'
import { ThemeProps } from '../../utils/interfaces/styles'

export const CardContainer = styled.div`
  flex-basis: calc(25% - 20px);
  text-align: left;
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 20vw;
  border-bottom: 3px solid ${(props: { theme: ThemeProps }) => props.theme.red};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
