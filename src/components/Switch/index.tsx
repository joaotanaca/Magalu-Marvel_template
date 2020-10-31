import React from 'react'
import { Button, SwitchContainer } from './styles'
const Switch = ({
  active = true,
  ...rest
}: {
  active: boolean
  onClick: () => void
}) => {
  return (
    <SwitchContainer {...rest}>
      <Button className={active ? ' active' : ''} />
    </SwitchContainer>
  )
}

export default Switch
