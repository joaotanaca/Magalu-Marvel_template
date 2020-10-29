import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Global } from './styles'

const BaseContainer = ({
  children,
  style
}: {
  children: JSX.Element
  style?: React.CSSProperties
}) => {
  const { pathname } = useLocation()
  return (
    <>
      <Global route={pathname} />
      <Container style={style}>{children}</Container>
    </>
  )
}

export default BaseContainer
