import React, { useRef, useEffect } from 'react'
import { Canvas } from '../canvas'

const canvasInstance = new Canvas()

const PreviewCanvas = ({size, text, fontTheme, backgroundColor, imageSrc}) => {
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
        backgroundColor: backgroundColor,
        imageSrc: imageSrc
      })
      canvasInstance.render()
      
    })()
  }, [size, text, fontTheme, backgroundColor, imageSrc])
  
  return <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
}

export default PreviewCanvas