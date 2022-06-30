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


export default function ({buttons, timer}) {

  buttonPlay.addEventListener('click', function() {
    buttons.pressPlay()
    // timer.countDown()
  })

  buttonPause.addEventListener('click', function() {
    buttons.pressPause()

    //pressButton()
    //clearTimeout(timeOut)
  })

  buttonStop.addEventListener('click', function() {
    // pressButton()
    // timer.reset()
  })

  buttonUp.addEventListener('click', function() {
    // pressButton()
    buttons.increment()
  })

  buttonDown.addEventListener('click', function() {
    // pressButton()
    buttons.decrement()
  })

  buttonTree.addEventListener('click', function(){
    // soundTree()
    buttons.pressTree()
  })

  buttonCloud.addEventListener('click', function(){
    // soundCloud()
    buttons.pressCloud()
  })

  buttonMarket.addEventListener('click', function(){
    // soundMarket()
    buttons.pressMarket()
  })

  buttonFire.addEventListener('click', function(){
    // soundFire()
    buttons.pressFire()
  })

  // retornar ou exportar 
}