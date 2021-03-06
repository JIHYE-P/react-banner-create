import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.45);
  color: #f8f8f8;
  margin-bottom: 40px;
  h1 {
    font-size: 18px;
    font-weight: normal;
  }
  span {
    margin-left: auto;
  }
`

const Header = () => {
  return  <StyledHeader>
    <h1>Banner</h1>
    <span>By JIHYE</span>
  </StyledHeader>
}

export default Header