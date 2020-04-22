import React from 'react'
import styled from 'styled-components';
import Select from './Select';
import { fontFamilyList, fontSizeList } from '../utils';

const StyledSelector = styled.div`
  display: inline-block;
  margin: 0 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.35);
  span {
    width: 100px;
    display: inline-block;
    padding: 11px 15px;
    height: 40px;
    font-size: 15px;
    color: #333;
    vertical-align: middle;
    background-color: #eee;
    border-radius: 5px 0 0 5px;
  }
  select {
    width: 205px;
    vertical-align: middle;
    height: 40px;
    border-radius: 0 5px 5px 0;
  }
`

const FontEditor = ({onChange}) => {
  return <>
    <StyledSelector>
      <span>font family</span>
      <Select name="family" onChange={onChange}>
        {
          fontFamilyList.map((family, index) => {
            const name = family.split(',')
            return (<option value={family} key={`family-${index}`}>{family}</option>)
          })
        }
      </Select>
    </StyledSelector>
    <StyledSelector>
      <span>font size</span>
      <Select name="size" onChange={onChange}>
        {
          fontSizeList.map((size, index) => {
            return (<option value={size} key={`size-${index}`}>{size}px</option>)
          })
        }
      </Select>
    </StyledSelector>
  </>
}

export default FontEditor