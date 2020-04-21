import React, { useRef, useEffect } from 'react'

const CanvasImage = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if(canvas.getContext){
      const ctx = canvas.getContext('2d')
  
      const img = new Image()
      img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
      img.onload = () => drawCanvasImage(img, ctx)
      ctx.globalAlpha = 0.4;
      
    }
    const drawCanvasImage = (img, ctx) => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }, [])
  return <canvas ref={canvasRef} width="700" height="350"></canvas>
}

export default CanvasImage