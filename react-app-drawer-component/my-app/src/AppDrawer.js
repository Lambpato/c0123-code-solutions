import { useState } from "react";
import { FaHamburger } from "react-icons/fa"
import './AppDrawer.css'

export default function AppDrawer ({list}) {
  const [isClicked, setClicked] = useState(true);
  const [current, setCurrent] = useState(0);

  const toggleDrawer = () => {
    setClicked(!isClicked)
  };

  const toggleItem = (i) => {
    setCurrent(i);
    setClicked(!isClicked)
  };

  const burgerButton = isClicked ? "menu-icon" : "hidden";
  const drawerView = isClicked ? "menu-drawer" : "menu-drawer is-open";
  const overlayView = isClicked ? "menu-shade" : "menu-shade is-drawn";

    return (
<>
      <button onClick={toggleDrawer} className={burgerButton}><FaHamburger /></button>

      <div className="listnames">
        {current===0 ? '' : current}
      <div/>

      <div onClick={toggleDrawer} className={overlayView}></div>

        <div className={drawerView}>
          <div>
            <h1>One Piece</h1>
            <DrawerList list={list} onItemClick={toggleItem} />
          </div>
        </div>
        </div>
</>
    )

}

 const DrawerList = ({list, onItemClick}) => {
       const listItems = list.map(e => <li  onClick={() => onItemClick(e.name) }key={e.key}>{e.name}</li>)
       return <ul>{listItems}</ul>
    }
