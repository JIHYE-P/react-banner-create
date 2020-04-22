
export const canvasTextDraw = (canvas, text, family, size, color) => {
  const ctx = canvas.getContext('2d')
  const x = canvas.width/2
  const y = canvas.height/2
  ctx.font = `${size}px ${family}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, x, y)
}

export const canvasImageDraw = (canvas, img) => {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  ctx.globalAlpha = 0.4;
} 

export const fontFamilyList = [
  'Arial, sans-serif',
  'Courier, serif',
  'Times New Roman, serif',
  'Impact, sans-serif',
  '궁서, serif',
  '돋움, sans-serif',
  '바탕, sans-serif'
]
export const fontSizeList = [20, 30, 40, 50, 60, 70, 80, 90, 100, 120]

export const randomHexColor = () => `${Math.floor(Math.random() * 16777215).toString(16)}` // 16777215 === ffffff

export const getContrast = (hexColor) => {
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 2), 16)
  const b = parseInt(hexColor.substring(4, 2), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 220 ? '#000000' : '#ffffff'
}

export const fileTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
]

export const validFileType = file => fileTypes.includes(file.type)

