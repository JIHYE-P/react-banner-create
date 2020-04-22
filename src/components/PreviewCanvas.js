import React, { useRef, useEffect } from 'react'
import { Canvas } from '../canvas'

const PreviewCanvas = ({size, text, fontTheme, background}) => {
  const canvasRef = useRef(null)
  useEffect(() => {    
    const canvas = new Canvas({
      canvas: canvasRef.current,
      text: text,
      fontTheme: fontTheme,
      background: background
    })    
    canvas.render()
  }, [size, text, fontTheme, background])
  
  return <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
}

export default PreviewCanvas