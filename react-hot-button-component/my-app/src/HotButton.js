import { useState } from "react";

export default function HotButton ({text}) {
  const [clickCount, setClicked] = useState(0);
  const handleClick = () => {
    setClicked(clickCount + 1)
    console.log(clickCount)
}

  const style =
    (clickCount <= 3) ? {
      backgroundColor: "rgb(53,28,116)",
      color: "white"
    }
    : (clickCount <= 6) ? {
      backgroundColor: "rgb(103,78,167)",
      color: "white"
    }
    : (clickCount <= 9) ? {
      backgroundColor: "rgb(224,102,102)",
      color: "white"
    }
    : (clickCount <= 12) ? {
      backgroundColor: "rgb(246, 178, 106)",
    }
    : (clickCount <= 15) ? {
      backgroundColor: "rgb(255,255,0)",
    }
    : (clickCount <= 18) ? {
      backgroundColor: "white",
    }
    : {color: "black"};




  return (<button
    onClick={handleClick}
    type="button"
    style={style}
    >
      {text}
    </button>
  )
 }
