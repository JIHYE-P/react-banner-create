import React, { useRef, useState } from 'react'
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

const ImageUpload = ({updateImageSrc}) => {
  const input = useRef(null)
  const updateImage = () => {
    // while(preview.current.firstChild) {
    //   preview.current.removeChild(preview.current.firstChild);
    // }
    const curFiles = input.current.files
    if(curFiles.length === 0) return
    for(const file of curFiles) {
      if(validFileType(file)) {
        const imgSrc = URL.createObjectURL(file)
        typeof updateImageSrc === 'function' && updateImageSrc(imgSrc)
      }
    }
  }
  return <StyledFileInput>
    <label htmlFor="bgImage"><FontAwesomeIcon icon={faImage} size="lg" /></label>
    <input
      ref={input}
      type="file"
      name="bgImage"
      id="bgImage"
      accept=".png, .jpeg, .jpg"
      onChange={updateImage} 
    />
  </StyledFileInput>
}

export default ImageUpload