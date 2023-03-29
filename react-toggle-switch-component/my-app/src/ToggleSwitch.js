import { useState } from "react"
import './ToggleSwitch.css';

export default function ToggleSwitch () {
  const [isClicked, setisClicked] = useState(false)

  const handleClick = () => {
    setisClicked(!isClicked)
  }

  const onOFF = isClicked ? "ON" : "OFF"

  return (<>
  <div className="switcheroony-container">
        <label className="switch">
      <input
      type="checkbox"
      onClick={handleClick}
       />
        <span className="slider round"></span>
    </label>
    <div>{onOFF}</div>
  </div>
  </>
  )
}
