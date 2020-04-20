import React, { useRef, useEffect } from 'react'
import { setCanvasText } from '../utils'

const Preview = ({width, height, backgroundColor, text, fontTheme}) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if(canvas.getContext){
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const {family, size, color} = fontTheme
      setCanvasText(canvas, text, {family: family, size: size, color: color})
    }
  }, [width, height, backgroundColor, text, fontTheme])

  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Preview