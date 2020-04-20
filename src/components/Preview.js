import React, { useRef, useEffect } from 'react'

const Preview = ({width, height, backgroundColor}) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      if(canvas.getContext){
        const ctx = canvas.getContext('2d')
    
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
    render()
  }, [width, height, backgroundColor])
  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Preview