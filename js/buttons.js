import {
  nature,
  rain,
  coffee,
  fire
} from "./sounds.js"

export default function Buttons({
  buttonPlay,
  buttonPause,
  minutesDisplay,
  fillModifyTree,
  buttonTree,
  fillModifyCloud,
  buttonCloud,
  fillModifyMarket,
  buttonMarket,
  fillModifyFire,
  buttonFire,
  buttonPressAudio,
  soundON,
}) {

  function pressPlay() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pressPause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function increment() {
    minutesDisplay.textContent = (Number(minutesDisplay.textContent) + 5)
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
  }

  function decrement() {
    minutesDisplay.textContent = (Number(minutesDisplay.textContent) - 5)
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
  }

  function pressTree() {
    fillModifyTree.classList.toggle('selected')
    buttonTree.classList.toggle('selected')
  }

  function soundTree() {
    if(soundON == false){
      soundON = true
      pauseSounds()
      console.log(soundON)
      nature.play()
    } else {
      soundON = false
      pauseSounds()
      clearButtons()
    }
  }

  function pressCloud() {
    fillModifyCloud.classList.toggle('selected')
    buttonCloud.classList.toggle('selected')
  }

  function soundCloud() {
    if(soundON == false){
      soundON = true
      pauseSounds()
      console.log(soundON)
      rain.play()
    } else {
      soundON = false
      pauseSounds()
      clearButtons()
    }
  }

  function pressMarket() {
    fillModifyMarket.classList.toggle('selected')
    buttonMarket.classList.toggle('selected')
  }

  function soundMarket() {
    if(soundON == false){
      soundON = true
      pauseSounds()
      console.log(soundON)
      coffee.play()
    } else {
      soundON = false
      pauseSounds()
      clearButtons()
    }
  }

  function pressFire() {
    fillModifyFire.classList.toggle('selected')
    buttonFire.classList.toggle('selected')
  }

  function soundFire() {
    if(soundON == false){
      soundON = true
      pauseSounds()
      console.log(soundON)
      fire.play()
    } else {
      soundON = false
      pauseSounds()
      clearButtons()
    }
  }

  function pressButton() {
    buttonPressAudio.play()
  }
  
  function pauseSounds(){
    rain.pause()
    nature.pause()
    fire.pause()
    coffee.pause()
  }

  function clearButtons() {
    fillModifyTree.classList.remove('selected')
    buttonTree.classList.remove('selected')
    fillModifyCloud.classList.remove('selected')
    buttonCloud.classList.remove('selected')
    fillModifyMarket.classList.remove('selected')
    buttonMarket.classList.remove('selected')
    fillModifyFire.classList.remove('selected')
    buttonFire.classList.remove('selected')
  }


  return {
    pressPlay,
    pressPause,
    increment,
    decrement,
    pressTree,
    soundTree,
    pressCloud,
    soundCloud,
    pressMarket,
    soundMarket,
    pressFire,
    soundFire,
    pressButton
  }
}