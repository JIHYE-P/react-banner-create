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
import PreviewCanvas from './components/PreviewCanvas';

const StyledSectionWrapper = styled.div`
  display:  flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`
const StyledBannerSizeField = styled.div`
  text-align: center;
  margin: 20px 0;
`
const StyledBannerPreview = styled.div`
  margin-bottom: 20px;
`
const StyledBannerTextField = styled.div`
  width: 700px;
  margin: 0 auto;
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
  const [fontTheme, setFontTheme] = useState({family: 'Arial, sans-serif', size: '20', color: '#ffffff'})
  const [text, setText] = useState('Sample Banner')
  const [background, setBackground] = useState({color: '#000000', image: false, src: ''})
  const [href, setHref] = useState('')
  // const [imageSrc, setImageSrc] = useState(null)
  const [colorPicker, setColorPicker] = useState({
    background: {
      isDisplay: false,
      color: '#000000'
    },
    text: {
      isDisplay: false,
      color: '#ffffff'
    }
  })
  useEffect(() => {
    const backgroundColorHex = randomHexColor()
    const textColorHex = getContrast(backgroundColorHex)

    setBackground(prev => ({...prev, color : `#${backgroundColorHex}`}))
    setFontTheme(prev => ({...prev, color: textColorHex}))
    setColorPicker(prev => ({...prev, background: {...prev[background], color: `#${backgroundColorHex}`}}))
  }, [])

  const handleSizeChange = ({target}) => setSize(prev => ({...prev, [target.name]: target.value})) 
  const handleTextChange = ({target}) => setText(target.value)
  const handleFontTheme = ({target}) => setFontTheme(prev => ({...prev, [target.name]: target.value}))
  const handleUpdateImage = src => setBackground({...background, image: true, src: src})
  // const handleUpdatePreview = href => setHref(href)

  const handleColorPickerOpen = type => setColorPicker(prev => ({...prev, [type]: {...prev[type], isDisplay: true}}))
  const handleColorPickerClose = type => setColorPicker(prev => ({...prev, [type]: {...prev[type], isDisplay: false}}))
  const handleColorPickerChange = (type, color) => {
    setColorPicker(prev => ({...prev, [type]: {...prev[type], color: color}}))
    
    type === 'background' && setBackground({...background, color : color})
    type === 'text' && setFontTheme({...fontTheme, color : color})
  } 
  
  const placeholder = 'typing text here :)'
  return <>
    <Header></Header>
    <StyledSectionWrapper>
      <section style={{textAlign: 'center'}}>
        <StyledBannerPreview>
          <PreviewCanvas 
            size={size}
            text={text}
            fontTheme={fontTheme}
            background={background}
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
            icon={faFillDrip}
            onOpen={() => handleColorPickerOpen('background')}
            onClose={() => handleColorPickerClose('background')}
            color={colorPicker.background.color}
            isDisplay={colorPicker.background.isDisplay}
            onChange={(color) => handleColorPickerChange('background', color)}
          />
          <ColorPicker 
            icon={faFont}
            onOpen={() => handleColorPickerOpen('text')}
            onClose={() => handleColorPickerClose('text')}
            color={colorPicker.text.color}
            isDisplay={colorPicker.text.isDisplay}
            onChange={(color) => handleColorPickerChange('text', color)}
          />
          <ImageUpload updateImage={handleUpdateImage} />
        </StyledColorEditor>

        <StyledBannerDownLoad>
          <DownloadButton href={href} />
        </StyledBannerDownLoad>
      </section>
    </StyledSectionWrapper>
  </>
}

export default App;
