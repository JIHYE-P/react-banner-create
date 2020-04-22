import React, { useRef, useEffect, useState } from 'react'
import { setCanvasText, drawCanvasImage } from '../utils'

const Preview = ({size, text, fontTheme, backgroundColor, imageSrc, href, updatePreview}) => {
  const canvasRef = useRef(null)
  const [isImage, setIsImage] = useState(null);

  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image
    img.onload = () => setIsImage(img)
    img.src = imageSrc
  }, [imageSrc]);

  useEffect(() => {
    const canvas = canvasRef.current
    if(canvas.getContext){
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (isImage) drawCanvasImage(canvas, ctx, isImage);
      
      const {family, size, color} = fontTheme
      setCanvasText(canvas, text, {family: family, size: size, color: color})

      const url = canvas.toDataURL();
      href !== url && updatePreview(url)
    }
    
  }, [size, text, fontTheme, backgroundColor, isImage, href, updatePreview])

  return <canvas ref={canvasRef} width={size.width} height={size.height}></canvas>
}

export default Preview