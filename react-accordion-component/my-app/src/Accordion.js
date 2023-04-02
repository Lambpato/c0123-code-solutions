import { useState } from "react";
import './Accordion.css'

export default function Accordion({lang}) {
  const [isClicked, setClicked] = useState(true);

  const [current, setCurrent] = useState(0)

  const toggleAccord = (i) => {
    current !== i ? setCurrent(i) : setCurrent(0);
    setClicked(!isClicked);
    console.log(isClicked);
  };

  return  (
    <div className="accord">
      <AccordList lang={lang} onItemClick={toggleAccord} current={current}  />
    </div>
  )
}

const AccordList = ({lang, current, onItemClick, isClicked}) => {
  const list = lang.map(list =>
    <li onClick={() => onItemClick(list.key)}
    key={list.key}>
    <h1>{list.name}</h1>
    <p className="langs">{current === list.key ? list.details  :  ''  }</p>
    </li>)
  return <ul>{list}</ul>
}
