import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledButton = styled.a`
  display: inline-block;
  width: 150px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 3px;
  background-color: rgb(32, 201, 151);
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`

const DownloadButton = ({href}) => {
  return <StyledButton href={href} download="banner-image.png">
    <FontAwesomeIcon icon={faDownload} />  Download
  </StyledButton>
}

export default DownloadButton