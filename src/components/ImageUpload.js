import React, { useRef } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { validFileType } from '../utils';

const StyledFileInput = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  input {
    display: none;
  }
  label {
    display: block;
    width: 51px;
    height: 51px;
    background-color: rgba(0,0,0,0.35);
    border-radius: 3px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.35);
    text-align: center;
    border: 3px solid #fff;
    color: #fff;
    line-height: 48px;
    cursor: pointer;
  }
`

const ImageUpload = ({updateImage}) => {
  const input = useRef(null)
  const onChange = () => {
    const curFiles = input.current.files
    if(curFiles.length === 0) return
    for(const file of curFiles) {
      if(validFileType(file)) {
        const src = URL.createObjectURL(file)
        typeof updateImage === 'function' && updateImage(src)
      }
    }
  }
  return <StyledFileInput>
    <label htmlFor="image"><FontAwesomeIcon icon={faImage} size="lg" /></label>
    <input
      ref={input}
      type="file"
      name="image"
      id="image"
      accept=".png, .jpeg, .jpg"
      onChange={onChange} 
    />
  </StyledFileInput>
}

export default ImageUpload