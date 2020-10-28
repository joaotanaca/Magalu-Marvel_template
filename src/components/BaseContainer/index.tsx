import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Global } from './styles'

const BaseContainer = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  return (
    <>
      <Global route={pathname} />
      <Container>{children}</Container>
    </>
  )
}

export default BaseContainer
