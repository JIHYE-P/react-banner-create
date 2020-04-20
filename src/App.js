import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import BannerSizeField from './components/BannerSizeField'
import BannerDiv from './components/atoms/BannerDiv'

const StyledBannerSizeField = styled.div`
  text-align: center;
`
const StyledBannerWrapper = styled.div`
  margin: 20px auto;
`

const App = () => {
  const [sizeValue, setSizeValue] = useState({width: 700, height: 350})
  const handleChange = ({target}) => {
    setSizeValue({[target.name] : target.value})
  }  
  const {width, height} = sizeValue
  return <section>
    <StyledBannerSizeField>
      <BannerSizeField sizeValue={sizeValue} onChange={handleChange} />
    </StyledBannerSizeField>
    <StyledBannerWrapper>
      <BannerDiv width={width} height={height} backgroundColor="#fff" />
    </StyledBannerWrapper>
  </section>
}

export default App;
