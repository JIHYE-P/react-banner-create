import React, { useRef, useEffect, useState } from 'react'
import { setCanvasText, drawCanvasImage } from '../utils'

const Preview = ({width, height, backgroundColor, text, fontTheme, href, updatePreview, bgImageSrc}) => {
  const canvasRef = useRef(null)
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    if (!bgImageSrc) return;
    const img = new Image
    img.onload = () => {
      setBgImage(img)
    }
    img.src = bgImageSrc
  }, [bgImageSrc]);

  useEffect(() => {
    const canvas = canvasRef.current
    if(canvas.getContext){
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (bgImage) drawCanvasImage(canvas, ctx, bgImage);
      const {family, size, color} = fontTheme
      setCanvasText(canvas, text, {family: family, size: size, color: color})

      const url = canvas.toDataURL();
      href !== url && updatePreview(url)
    }
    
  }, [width, height, backgroundColor, text, fontTheme, href, updatePreview, bgImage, fontTheme, text])

  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Preview