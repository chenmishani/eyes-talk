import React, { useState } from "react";
import {AiOutlineRightCircle} from "react-icons/ai";
import {AiOutlineLeftCircle} from "react-icons/ai";

export default function ChosenBracelet(props) {

  const right=<AiOutlineRightCircle size='25px'/>
  const left=<AiOutlineLeftCircle size='25px'/>


  const SliderData=[
   { image:props.chosenBracelet.photo},
   { image:props.chosenBracelet.photo1}  
  ]
  
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }


  return (
    <div className="chosenProductDiv">
          <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center',marginRight:'10px'}}><div onClick={prevSlide} >{left}</div></div>
          <div style={{}}> <section className='slider'>
        {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
             slide.image
            )}
          </div>
        )
      })}
    </section></div>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10px'}}><div onClick={nextSlide}>{right}</div></div>
          </div>

            </div>
      <div style={{margin:'0 auto'}}>
        <h1>{props.chosenBracelet.name}</h1>
        <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
        <p>צבעים: {props.chosenBracelet.color} </p>
        <p style={{ fontSize: "25px" }}>{`₪ ${props.chosenBracelet.price} `}</p>
        <button
          className="btn3"
          onClick={() => {
            props.add(props.chosenBracelet.index);
          }}
        >
          הוספה לסל
        </button>
      </div>
    </div>
  );
}
