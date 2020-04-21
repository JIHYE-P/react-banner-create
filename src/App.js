import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import SizeField from './components/SizeField'
import Preview from './components/Preview';
import TextField from './components/TextField';
import FontEditor from './components/FontEditor';
import ColorPicker from './components/ColorPicker';
import { faFillDrip, faFont } from '@fortawesome/free-solid-svg-icons'
import { ChromePicker } from 'react-color'
import { randomHexColor, getContrast } from './utils';

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
  margin: 40px 0;
  text-align: center;
  select {
    width: 210px;
  }
`
const StyledColorEditor = styled.div`
  position: relative;
  display: inline-block;
  > div {
    margin: 0 20px;
  }
`

const App = () => {
  const [sizeValue, setSizeValue] = useState({width: '700', height: '350'})
  const [fontTheme, setFontTheme] = useState({family: 'Arial, sans-serif', size: '20', color: '#000'})
  const [text, setText] = useState('Sample Banner')
  const [bgColor, setBgColor] = useState({displayColorPicker: false, color: '#000000'})
  const [textColor, setTextColor] = useState({displayColorPicker: false, color: '#ffffff'})
  useEffect(() => {
    const bgColorHex = randomHexColor()
    const textColorHex = getContrast(bgColorHex)
    setBgColor({...bgColor, color: `#${bgColorHex}`})
    setFontTheme({...fontTheme, color: textColorHex})
  }, [])
  const handleSizeChange = ({target}) => {
    setSizeValue(prev => ({...prev, [target.name]: target.value}))
  }  
  const handleTextChange = ({target}) => {
    setText(target.value)
  }
  const handleFontTheme = ({target}) => {
    setFontTheme(prev => ({...prev, [target.name]: target.value}))
  }
  const handleBgColorOpen = () => {
    setBgColor({...bgColor, displayColorPicker: !bgColor.displayColorPicker})
  }
  const handleBgColorClose = () => {
    setBgColor({...bgColor, displayColorPicker: false})
  }
  const handleBgColor = (color) => {
    setBgColor({...bgColor, color: color.hex})
  }
  const handleTextColorOpen = () => {
    setTextColor({...textColor, displayColorPicker: !textColor.displayColorPicker})
  }
  const handleTextColorClose = () => {
    setTextColor({...textColor, displayColorPicker: false})
  }
  const handleTextColor = (color) => {
    setTextColor({...textColor, color: color.hex})
    setFontTheme({...fontTheme, color: color.hex})
  }

  const placeholder = 'typing text here :)'
  return <section style={{textAlign: 'center'}}>
    <StyledBannerSizeField>
      <SizeField sizeValue={sizeValue} onChange={handleSizeChange} />
    </StyledBannerSizeField>
    <StyledBannerPreview>
      <Preview width={sizeValue.width} height={sizeValue.height} backgroundColor={bgColor.color} text={text} fontTheme={fontTheme} />
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
    <StyledColorEditor>
      <ColorPicker 
        onOpen={handleBgColorOpen}
        onClose={handleBgColorClose}
        color={bgColor.color}
        icon={faFillDrip}
        displayColorPicker={bgColor.displayColorPicker}
        colorPicker={<ChromePicker color={bgColor.color} onChange={handleBgColor} disableAlpha={true} />}
      />
      <ColorPicker 
        onOpen={handleTextColorOpen}
        onClose={handleTextColorClose}
        color={textColor.color}
        icon={faFont}
        displayColorPicker={textColor.displayColorPicker}
        colorPicker={<ChromePicker color={textColor.color} onChange={handleTextColor} disableAlpha={true} />}
      />
    </StyledColorEditor>
  </section>
}

export default App;
