import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.45);
  color: #f8f8f8;
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
    <h1>Banner Create</h1>
    <span>By JIHYE</span>
  </StyledHeader>
}

export default Header