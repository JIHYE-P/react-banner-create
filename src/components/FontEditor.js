import React from 'react'
import styled from 'styled-components';
import Select from './Select';
import { fontFamilyList, fontSizeList } from '../utils';

const StyledSelector = styled.div`
  span {
    display: block;
    margin-bottom: 8px;
    text-align: left;
    color: #f8f8f8;
  }
  display: inline-block;
  margin: 0 10px;
`

const FontEditor = ({onChange}) => {
  return <>
    <StyledSelector>
      <span>Font Family</span>
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
      <span>Font Size</span>
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