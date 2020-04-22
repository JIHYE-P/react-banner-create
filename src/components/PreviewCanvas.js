import React, { useRef, useEffect } from 'react'
import { Canvas } from '../canvas'

const canvasInstance = new Canvas()

const PreviewCanvas = ({size, text, fontTheme, background, href, updatePreview}) => {
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

      const url = canvasRef.current.toDataURL();
      href !== url && updatePreview(url)
    })()
  }, [size, text, fontTheme, background, href, updatePreview])

  return <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
}

export default PreviewCanvas