import React, { useRef, useEffect } from 'react'
import { Canvas } from '../canvas'

const canvasInstance = new Canvas()

const PreviewCanvas = ({size, text, fontTheme, background}) => {
  const canvasRef = useRef(null)
  useEffect(() => {    
    (async () => {
      await canvasInstance.update({
        canvas: canvasRef.current,
        size: size,
        text: text,
        fontFamily: fontTheme.family,
        fontSize: fontTheme.size,
        fontColor: fontTheme.color,
        backagroundColor: background.color,
        backgroundImage: background.image
      })
      canvasInstance.render()
    })()
  }, [size, text, fontTheme, background])
  
  return <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
}

export default PreviewCanvas