import { useState } from "react"
export default function ToggleButton ({text, color}) {
  const [isClicked, setisClicked] = useState(false)
  const handleClick = () => {
    setisClicked(!isClicked);
    console.log(isClicked);
  }
  if (!isClicked) {
   return (<button
    onClick={handleClick}
    type="button"
    style={{backgroundColor: "white"}}
    >
      {text}
      </button>
   )
  } else {
     return (
  <button
  onClick={handleClick}
  type="button"
  style={{backgroundColor: color}}
  >
    {text}
  </button>
 )
  }

}
