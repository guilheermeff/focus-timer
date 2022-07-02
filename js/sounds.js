const rain = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true") 
const nature = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true") 
const fire = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true") 
const coffee = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true") 

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
let soundON = false

rain.loop = true
nature.loop = true
fire.loop = true
coffee.loop = true

export {
  rain,
  nature,
  fire,
  coffee,
  buttonPressAudio,
  kitchenTimer,
  soundON
}
