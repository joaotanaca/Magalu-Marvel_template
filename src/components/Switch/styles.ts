import styled from 'styled-components'
import { ThemeProps } from '../../utils/interfaces/styles'

export const SwitchContainer = styled.div`
  position: relative;
  background-color: #e4e5e9;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
`
export const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  background-color: ${(props: { theme: ThemeProps }) => props.theme.red};
  width: 30%;
  border-radius: 100%;
  box-shadow: -3px -3px 10px rgba(255, 20, 16, 0.22),
    0 14px 28px rgba(255, 20, 16, 0.25);
  transition: all 0.2s ease-in-out;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  &.active {
    left: calc(100% - 30% - 5px);
  }
`
