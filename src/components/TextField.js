import React from 'react'
import Input from './Input'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  width: 100%;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.35);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.55);
  outline: none;
  &::placeholder {
    color: #eee;
  }
`

const TextField = ({onChange, onFocus, onBlur, placeholder}) => {
  return <StyledInput big name="text" onChange={onChange} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
}

export default TextField