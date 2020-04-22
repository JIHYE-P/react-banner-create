import {canvasTextDraw} from './utils'
export class Canvas {
  constructor({
    canvas,
    size, 
    text,
    fontFamily,
    fontSize,
    fontColor,
    backagroundColor,
    backgroundImage 
  } = {}){
    Object.assign(this, {canvas, size, text, fontFamily, fontSize, fontColor, backagroundColor, backgroundImage}) 
  }

  loadImage(src){
    return new Promise((res) => {
      const img = new Image()
      img.onload = () => res(img)
      img.src = src
    })
  }

  async update({
    canvas,
    size, 
    text,
    fontFamily,
    fontSize,
    fontColor,
    backagroundColor,
    backgroundImage
  }){
    if(this.backgroundImage !== backgroundImage) {
      this.image = await this.loadImage(backgroundImage).catch(console.error)
    }
    Object.assign(this, {canvas, size, text, fontFamily, fontSize, fontColor, backagroundColor, backgroundImage}) 
  }
  

  render(){
    const canvas = this.current
    const ctx = canvas.getContext('2d')
    
    if(this.image) ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = this.backagroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    canvasTextDraw(canvas, this.text, this.fontFamily, this.fontSize, this.fontColor)
  }
}
// const url = canvas.toDataURL()
// this.href = url