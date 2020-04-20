import React from 'react'
import styled from 'styled-components'

const DefaultInput = styled.input`
  display: inline-block;
  padding: ${props => props.big ? '10px 20px' : '10px 12px'};
  height: ${props => props.big ? '55px' : '40px'};
  border: none;
  background-color: #fff;
  font-size: ${props => props.big ? '18px' : '14px'};
  font-family: 'Arial', sans-serif;
`

const Input = props => <DefaultInput {...props} />

export default Input