import Buttons from "./buttons.js"
import Events from "./events.js"

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonTree,
  buttonCloud,
  buttonMarket,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  fillModifyTree,
  fillModifyCloud,
  fillModifyMarket,
  fillModifyFire
} from "./elements.js"

const buttons = Buttons({  
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
  buttonFire
})

Events({buttons})

