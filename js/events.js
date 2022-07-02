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

import { buttonPressAudio } from "./sounds.js"

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
    buttons.pressTree()
    buttons.soundTree()
  })

  buttonCloud.addEventListener('click', function(){
    buttons.pressCloud()
    buttons.soundCloud()
  })

  buttonMarket.addEventListener('click', function(){
    buttons.pressMarket()
    buttons.soundMarket()
  })

  buttonFire.addEventListener('click', function(){
    buttons.pressFire()
    buttons.soundFire()
  })
}