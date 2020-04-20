import React from 'react'
import styled from 'styled-components'

const DefaultInput = styled.input`
  display: inline-block;
  padding: 10px 12px;
  height: 40px;
  border: none;
  background-color: #fff;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`

const Input = props => <DefaultInput {...props} />

export default Input