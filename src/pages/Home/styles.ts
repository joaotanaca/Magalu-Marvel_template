import styled from 'styled-components'
import mixins from '../../styles/mixins'
import { ThemeProps } from '../../utils/interfaces/styles'
import { ImSpinner9 } from 'react-icons/im'

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mixins.sm`
    justify-content: center;
  `}
`

export const Header = styled.div`
  flex-basis: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`

export const FindHeros = styled.p`
  color: ${(props: { theme: ThemeProps }) => props.theme.text_sub};
`
export const Filters = styled.div`
  color: ${(props: { theme: ThemeProps }) => props.theme.red};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  ${mixins.sm`
    display: none;
  `}
  img {
    height: 2.2vw;
  }
`
export const Order = styled.p`
  margin: 0 20px 0 10px;
  ${mixins.sm`
    display: none;
  `}
`
export const OnlyFavorites = styled.p`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  &.active {
    border-color: ${(props: { theme: ThemeProps }) => props.theme.red};
  }
`

export const FilterMobile = styled.div`
  display: none;
  position: relative;
  ${mixins.sm`
    display: unset;
  `};
  .dropdown {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: absolute;
    padding: 7px 5px 0;
    top: 100%;
    right: 0;
    display: none;
    img {
      display: none;
    }
    p {
      margin: 7px 0;
    }
  }
  &:hover {
    .dropdown {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
`
export const SpinnerLoading = styled(ImSpinner9)`
  animation: rotate 1s linear infinite normal;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const BottomContainerCards = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`
export const MoreHeros = styled.button`
  cursor: pointer;
  color: ${(props: { theme: ThemeProps }) => props.theme.white};
  background-color: ${(props: { theme: ThemeProps }) => props.theme.red};
  border: 0;
  border-radius: 5px;
  font-size: calc(9px + 1vw);
  padding: 10px 20px;
`
