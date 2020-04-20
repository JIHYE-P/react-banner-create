import React, { useEffect } from 'react'
import styled from 'styled-components'
import Input from './Input'

const StyledFormControl = styled.div`
  display: inline-block;
  margin: 0 10px;
  span {
    display: inline-block;
    padding: 11px 15px;
    font-size: 15px;
    color: #333;
    vertical-align: middle;
    background-color: #eee;
    border-radius: 5px 0 0 5px;
  }
  input {
    vertical-align: middle;
    border-radius: 0 5px 5px 0;
  }
`

const BannerSizeField = ({sizeValue, onChange}) => {
  const {width, height} = sizeValue
  return <>
    <StyledFormControl>
      <span>width</span>
      <Input name="width" placeholder="width" value={width} onChange={onChange} />
    </StyledFormControl>
    <StyledFormControl>
      <span>height</span>
      <Input name="height" placeholder="height" value={height} onChange={onChange} />
    </StyledFormControl>
  </>
}

export default BannerSizeField