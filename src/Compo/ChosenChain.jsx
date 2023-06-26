import React, { useState } from "react";
import {AiOutlineRightCircle} from "react-icons/ai";
import {AiOutlineLeftCircle} from "react-icons/ai";
import {FcApproval} from "react-icons/fc";
import suprise from './suprise.jpg'


export default function ChosenChain(props) {

  const right=<AiOutlineRightCircle size='25px'/>
  const left=<AiOutlineLeftCircle size='25px'/>
  const vi=<FcApproval size='25px'/>

  const [flag, setFlag] = useState(false);


  const SliderData=[
   { image:props.chosenChain.photo},
   { image:props.chosenChain.photo1}  
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

  
  const showCnt = () => {
    if (flag == false) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add()
          }}
        >
          הוספה לסל
        </button>
      );
    } else {
      return (
        <div>
          <button
            style={{
              width: "10px",
              border: "0px",
              background: "white",
              fontSize: "20px",
              }}
            onClick={() => {
              props.delete(props.chosenChain.index);
            }}
          >
            -
          </button>
          <button className="btn2" style={{ width: "25px",textAlign:'center',justifyContent:'center',margin:'5px' }}>
            {props.chosenChain.cnt}
          </button>
          <button
            style={{
              width: "10px",
              border: "0px",
              background: "white",
              fontSize: "20px",
            }}
            onClick={() => {
              props.add();
            }}
          >
            +
          </button>
        </div>
      );
    }
  };

  const supriseDiv=()=>{
    if(flag==true){
      return <div>{vi}</div>
    }
    else{
      return  <button
      className="btn3"
      onClick={() => {
        props.add();
      }}
    >
      הוספה לסל
    </button>
    }
  }

  const showDiv = () => {
  
    if (props.chosenChain.price == 180) {
      return (  

<div className="chosenProductDiv">
             <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{}}><img style={{width:'50%'}} src={suprise} alt="logo"  /></div>
          </div>
          </div>
          <div style={{margin:'0 auto'}}>
            <h1>{props.chosenChain.name}</h1>
            <p>
              {" "}
              שרשרת יחודית שמיוצרת לאדם אחד בלבד,הצבע אקראי ולא ניתן לבחירה
            </p>
            <p
              style={{ fontSize: "25px", marginTop: "50px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
              <div
          onClick={() => {
            setFlag(true);
          }}
        >
          {supriseDiv()}
        </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="chosenProductDiv">
          <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center',marginRight:'10px'}}><div onClick={prevSlide} >{left}</div></div>
          <div> <section className='slider'>
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
          <div style={{margin:'0 auto'}} >
            <h1 style={{marginLeft:'10px'}} >{props.chosenChain.name}</h1>
            <p style={{ marginTop: "50px" }}>
              שרשרת בעבודת יד שעשויה מחרוזים איכותיים
            </p>
            <p>צבעים: {props.chosenChain.color} </p>
            <p
              style={{ fontSize: "25px", marginTop: "40px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
            <div
          onClick={() => {
            setFlag(true);
          }}
        >
          {showCnt()}
        </div>
          </div>
        </div>
      );
    }
  };

  return <div>{showDiv()}</div>;
}
