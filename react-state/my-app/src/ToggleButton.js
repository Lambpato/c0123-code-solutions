import { useState } from "react"
export default function ToggleButton ({text, color}) {
  const [isClicked, setisClicked] = useState(false)
    console.log(`useState ${isClicked}`)
    const handleClick = () => {
    console.log(`before settter ${isClicked}`);
    setisClicked(!isClicked);
    console.log(`after setter ${isClicked}`);
  }

   return (<button
    onClick={handleClick}
    type="button"
    style={!isClicked ? {backgroundColor: "white"} : {backgroundColor: color}}
    >
      {text}
      </button>
   )

}
