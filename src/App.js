import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import SizeField from './components/SizeField'
import Preview from './components/Preview';
import TextField from './components/TextField';
import FontEditor from './components/FontEditor';

const StyledBannerSizeField = styled.div`
  text-align: center;
`
const StyledBannerPreview = styled.div`
  margin: 20px auto 30px;
`
const StyledBannerTextField = styled.div`
  width: 500px;
  margin: 0 auto;
`
const StyledFontEditor = styled.div`
  margin: 50px 0;
  text-align: center;
  select {
    width: 210px;
  }
`
const App = () => {
  const [sizeValue, setSizeValue] = useState({width: '700', height: '350'})
  const [fontTheme, setFontTheme] = useState({family: 'Arial, sans-serif', size: '20', color: '#000'})
  const [text, setText] = useState('Sample Banner')

  const handleSizeChange = ({target}) => {
    setSizeValue(prev => ({...prev, [target.name]: target.value}))
  }  

  const handleTextChange = ({target}) => {
    setText(target.value)
  }

  const handleFontTheme = ({target}) => {
    setFontTheme(prev => ({...prev, [target.name]: target.value}))
    console.log(fontTheme)
  }

  const {width, height} = sizeValue
  const placeholder = 'typing text here 👍'

  return <section>
    <StyledBannerSizeField>
      <SizeField sizeValue={sizeValue} onChange={handleSizeChange} />
    </StyledBannerSizeField>
    <StyledBannerPreview>
      <Preview width={width} height={height} backgroundColor='#fff' text={text} fontTheme={fontTheme} />
    </StyledBannerPreview>
    <StyledBannerTextField>
      <TextField 
        placeholder={placeholder}
        onChange={handleTextChange} 
        onFocus={({target}) => target.placeholder = ''} 
        onBlur={({target}) => (target.value === '') && (target.placeholder = placeholder)} 
      />
    </StyledBannerTextField>
    <StyledFontEditor>
      <FontEditor onChange={handleFontTheme} />
    </StyledFontEditor>
  </section>
}

export default App;
