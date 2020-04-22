import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import SizeField from './components/SizeField'
import Preview from './components/Preview';
import TextField from './components/TextField';
import FontEditor from './components/FontEditor';
import ColorPicker from './components/ColorPicker';
import ImageUpload from './components/ImageUpload';
import Header from './components/Header';
import DownloadButton from './components/DownloadButton';

import { faFillDrip, faFont } from '@fortawesome/free-solid-svg-icons'
import { ChromePicker } from 'react-color'

import { randomHexColor, getContrast } from './utils';

const StyledBannerSizeField = styled.div`
  text-align: center;
  margin: 20px 0;
`
const StyledBannerPreview = styled.div`
  margin-bottom: 20px;
`
const StyledBannerTextField = styled.div`
`
const StyledFontEditor = styled.div`
`
const StyledColorEditor = styled.div`
  margin: 20px 0;
  > div {
    margin: 0 10px;
  }
`
const StyledBannerDownLoad = styled.div`
`

const App = () => {
  const [size, setSize] = useState({width: '700', height: '350'})
  const [fontTheme, setFontTheme] = useState({family: 'Arial, sans-serif', size: '20', color: '#000'})
  const [text, setText] = useState('Sample Banner')
  const [bgColor, setBgColor] = useState({displayColorPicker: false, color: '#000000'})
  const [textColor, setTextColor] = useState({displayColorPicker: false, color: '#ffffff'})
  const [href, setHref] = useState('')
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const bgColorHex = randomHexColor()
    const textColorHex = getContrast(bgColorHex)
    setBgColor({...bgColor, color: `#${bgColorHex}`})
    setFontTheme({...fontTheme, color: textColorHex})
  }, [])
  const handleSizeChange = ({target}) => {
    setSize(prev => ({...prev, [target.name]: target.value}))
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
  const handleUpdatePreview = (href) => setHref(href)
  const handleUpdateImage = (src) => setImageSrc(src)

  const placeholder = 'typing text here :)'
  return <>
    <Header></Header>
    <section style={{textAlign: 'center'}}>
      <StyledBannerPreview>
        <Preview
          size={size}
          backgroundColor={bgColor.color}
          text={text}
          fontTheme={fontTheme} 
          href={href}
          updatePreview={handleUpdatePreview}
          imageSrc={imageSrc}
        />
      </StyledBannerPreview>

      <StyledBannerTextField>
        <TextField 
          placeholder={placeholder}
          onChange={handleTextChange} 
          onFocus={({target}) => target.placeholder = ''} 
          onBlur={({target}) => (target.value === '') && (target.placeholder = placeholder)} 
        />
      </StyledBannerTextField>

      <StyledBannerSizeField>
        <SizeField sizeValue={size} onChange={handleSizeChange} />
      </StyledBannerSizeField>

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
        <ImageUpload updateImage={handleUpdateImage} />
      </StyledColorEditor>

      <StyledBannerDownLoad>
        <DownloadButton href={href} />
      </StyledBannerDownLoad>
    </section>
  </>
}

export default App;
