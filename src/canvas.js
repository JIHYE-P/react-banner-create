import { canvasTextDraw, canvasImageDraw } from "./utils"

export class Canvas {
  constructor({
    canvas,
    size, 
    text, 
    fontTheme = {family: 'Arial, sans-serif', size: '20', color: '#000000'}, 
    background = {color: '#000000', image: false, src: ''}
  }) {
    Object.assign(this, {canvas, size, text, fontTheme, background})
  }

  render(){
    const canvas = this.canvas

      const ctx = canvas.getContext('2d')
      ctx.fillStyle = this.background.color
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if(this.background.src) return
      const img = new Image()
      img.onload = () => this.background.image = true
      img.src = this.background.src
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      
      // this.background.image && canvasImageDraw(canvas, img)
      // this.background.image = false

      canvasTextDraw(canvas, this.text, this.fontTheme)
    }
}