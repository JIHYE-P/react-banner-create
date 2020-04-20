import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import BannerSizeField from './components/BannerSizeField'
import Preview from './components/Preview';

const StyledBannerSizeField = styled.div`
  text-align: center;
`
const StyledBannerPreview = styled.div`
  margin: 20px auto;
`

const App = () => {
  const [sizeValue, setSizeValue] = useState({width: '700', height: '350'})
  const handleChange = ({target}) => {
    setSizeValue(prev => ({...prev, [target.name]: target.value}))
    console.log(sizeValue)
  }  
  const {width, height} = sizeValue
  return <section>
    <StyledBannerSizeField>
      <BannerSizeField sizeValue={sizeValue} onChange={handleChange} />
    </StyledBannerSizeField>
    <StyledBannerPreview>
      <Preview width={width} height={height} backgroundColor='#fff' />
    </StyledBannerPreview>
  </section>
}

export default App;
