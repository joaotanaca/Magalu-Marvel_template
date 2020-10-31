import React from 'react'
import { Container, Footer } from './styles'

const BaseContainer = ({
  children,
  style
}: {
  children: JSX.Element
  style?: React.CSSProperties
}) => {
  return (
    <>
      <Container style={style}>{children}</Container>
      <Footer />
    </>
  )
}

export default BaseContainer
