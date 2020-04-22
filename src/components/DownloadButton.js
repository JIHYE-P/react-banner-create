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
  background-color: #1098ad;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.35);
`

const DownloadButton = ({href}) => {
  return <StyledButton href={href} download="banner-image.png">
    <FontAwesomeIcon icon={faDownload} />  Download
  </StyledButton>
}

export default DownloadButton