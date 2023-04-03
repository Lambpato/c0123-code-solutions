import { useState, useEffect, useCallback } from "react"
import { FaChevronLeft, FaChevronRight, FaCircle, FaBong } from 'react-icons/fa'
import './carousel.css'

export default function Carousel ({data}) {
    const [currentIndex, setIndex] = useState(0)
    const currentImg = data[currentIndex]

    const rightClick = useCallback(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, [data]);

    useEffect(() => {
      const intervalId = setInterval(rightClick, 3000);
      return () => clearInterval(intervalId);
    }, [currentIndex, rightClick]);


    const leftClick = () => {
      setIndex(((currentIndex - 1) + data.length) % data.length)
    };

    const dotClick = (index) => {
      setIndex(index)
    };

    return (
      <div className='container'>
        <div className='row'>
          <div className='column-third align-arrows'><FaChevronLeft onClick={leftClick} className="arrow" /></div>
          <div className=' column-third'><img src={currentImg.imgUrl} alt={currentImg.name} /></div>
          <div className='column-third align-arrows'><FaChevronRight onClick={rightClick} className="arrow" /></div>
        </div>
        <div className='row'>
          <div className='column-full align-dots'>
            {data.map((data, index) => (<Dot key={data.id} currentIndex={currentIndex} dotClick={dotClick} index={index} />))}
          </div>
        </div>
      </div>
    );
}

const Dot = ({ index, dotClick, currentIndex }) =>  {
  return (
    <>
      {index === currentIndex ? <FaBong size={50} className='dot-pad' /> : <FaCircle size={50} onClick={() => dotClick(index)} className='dot-pad' />}
    </>
  );
}
