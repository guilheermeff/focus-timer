export default function Timer({
  minutesDisplay,
  secondsDisplay,
}){

  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  const newMinutes = minutesDisplay.textContent
  const newSeconds = secondsDisplay.textContent
  let timeOut
  
  
  function countDown(){
    
    timeOut = setTimeout(function(){
      
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      
      if((minutes == 0) && (seconds == 0)){
        reset()
        return
      } else if(seconds == 0){
        seconds = 60
        updateDisplay(String(minutes -1), seconds)
      }
      
      // fix this line
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
      
      countDown()
    },1000)
  }
  
  function reset(){
    buttonPlay.classList.toggle('.hide')
    buttonPause.classList.toggle('.hide')
    
    updateDisplay(newMinutes, newSeconds)
    clearTimeout(timeOut)
  }
  
  function updateDisplay(newMinutes, newSeconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
  }

  return {
    updateDisplay,
    countDown,
    reset
  }
}