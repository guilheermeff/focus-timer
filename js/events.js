import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonTree,
  buttonCloud,
  buttonMarket,
  buttonFire
} from "./elements.js"

import {
  rain,
  nature,
  fire,
  coffee,
  buttonPressAudio,
} from "./sounds.js"


export default function ({buttons, timer}) {

  buttonPlay.addEventListener('click', function() {
    buttons.pressPlay()
    buttonPressAudio.play()
    timer.countDown()
  })

  buttonPause.addEventListener('click', function() {
    buttons.pressPause()
    buttonPressAudio.play()
    timer.pause()
  })

  buttonStop.addEventListener('click', function() {
    buttonPressAudio.play()
    timer.reset()
  })

  buttonUp.addEventListener('click', function() {
    buttons.increment()
    buttonPressAudio.play()
  })

  buttonDown.addEventListener('click', function() {
    buttons.decrement()
    buttonPressAudio.play()
  })

  buttonTree.addEventListener('click', function(){
    nature.play()
    buttons.pressTree()
  })

  buttonCloud.addEventListener('click', function(){
    rain.play()
    buttons.pressCloud()
  })

  buttonMarket.addEventListener('click', function(){
    coffee.play()
    buttons.pressMarket()
  })

  buttonFire.addEventListener('click', function(){
    fire.play()
    buttons.pressFire()
  })
}