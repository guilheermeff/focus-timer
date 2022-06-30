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
  buttonPressAudio

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

  function pressCloud() {
    fillModifyCloud.classList.toggle('selected')
    buttonCloud.classList.toggle('selected')
  }

  function pressMarket() {
    fillModifyMarket.classList.toggle('selected')
    buttonMarket.classList.toggle('selected')
  }

  function pressFire() {
    fillModifyFire.classList.toggle('selected')
    buttonFire.classList.toggle('selected')
  }

  function pressButton() {
    buttonPressAudio.play()
  }
  
  function soundTree() {
    nature.play()
  }
  
  function soundCloud() {
    rain.play()
  }
  
  function soundMarket() {
    coffee.play()
  }
  
  function soundFire() {
    fire.play()
  }
  
  function soundFineshed() {
    kitchenTimer.play()
  }

  return {
    pressPlay,
    pressPause,
    increment,
    decrement,
    pressTree,
    pressCloud,
    pressMarket,
    pressFire,
    pressButton
  }
}