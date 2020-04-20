import React from 'react' 
import styled from 'styled-components'

const DefaultSelect = styled.select`
  display: inline-block;
  padding: ${props => props.big ? '10px 23px' : '8px 15px'};
  border: none;
  background-color: #fff;
  font-size: ${props => props.big ? '18px' : '14px'};
  font-family: 'Arial', sans-serif;
  border-radius: 3px;
  color: #555;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.35);
`

const Select = (props) => <DefaultSelect {...props} />

export default Select