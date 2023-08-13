import React, { useState } from "react";
import suprise from "./photos2/suprise.jpg";
import viBlue from "./photos2/vi.png";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {Link, useNavigate } from "react-router-dom";

export default function ChosenChain(props) {

  const plus = <AiOutlinePlusCircle size="18px" />;
  const minus = <AiOutlineMinusCircle size="18px" />;

  const nev =useNavigate()
  
  
  const [flag, setFlag] = useState(false);


  const showCnt = () => {
    if (flag == false) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add();
          }}
        >
          הוספה לסל
        </button>
      );
    } else {
      return (
             <div style={{display:'flex',justifyContent:'center'}}>
                 <div onClick={()=>{ props.add()}}> {plus}</div>
                 <div className="btn2" style={{width:'15%',marginLeft:'5px',marginRight:'5px',fontSize:'20px'}}>{props.chosenChain.cnt}</div>
                 <div onClick={()=>{ props.delete(props.chosenChain.index)}}>{minus}</div>
                 
                </div>       
      )
    }
  }

  const supriseDiv = () => {
    if (flag == true || props.chosenChain.cnt > 0) {
      return <img style={{ width: "40px" }} src={viBlue} alt="vi" />;
    } else {
      return (
        <button
          className="btn3"
          onClick={() => {
            props.add();
          }}
        >
          הוספה לסל
        </button>
      );
    }
  };



  const showDiv = () => {
    if(props.chosenChain==0){
      return  <div className='cont' style={{width:'80%',margin:'0 auto',marginTop:'30px',marginBottom:'50px',border:'1px solid black',height: "350px"}} >
      <p style={{marginTop:'50px',fontSize:'250%',fontFamily: "Times New Roman"}}> לא נבחר מוצר</p>
      <p style={{fontSize:'130%',marginTop:'30px',marginBottom:'40px'}} onClick={()=>{nev('/')}}>לחזרה לעמוד הראשי לחץ כאן</p>
      <div style={{display: "flex",justifyContent: "space-between",width: "50%",margin: "0 auto",}}>
          <Link to={"/chains"}>
          <button style={{width: "70px",backgroundColor: "black",color: "white",borderRadius: "45%",height: "30px"}}>
              שרשראות
            </button>
          </Link>

          <Link to={"/Bracelets"}>
          <button style={{width: "70px",backgroundColor: "black",color: "white",borderRadius: "45%",height: "30px"}}>
              צמידים
            </button>
          </Link>
        </div>
    
    </div>
    
    }
    else{
    if (props.chosenChain.price == 180) {
      return (
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto" }}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div style={{}}>
                <img style={{ width: "50%" }} src={suprise} alt="logo" />
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
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
        <div>
        <div className="chosenChainMedia">
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto" }}>
              <div className="photo-gallery" style={{height:'300px'}}>
              <div className="scrollable-container">
                <div className="photo-wrapper">
                {props.chosenChain.photo1}
                </div>
                <div className="photo-wrapper">
                {props.chosenChain.photo}
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h1 style={{ marginLeft: "10px" }}>{props.chosenChain.name}</h1>
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
        </div>
        <div className="chosenChainWeb">
        <div className="chosenProductDiv">
        <div style={{ margin: "0 auto", display: "flex" }}>
            <div style={{height:'340px'}}>{props.chosenChain.photo}</div>
            <div style={{width:'265px'}}>{props.chosenChain.photo1}</div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h1 style={{ marginLeft: "10px" }}>{props.chosenChain.name}</h1>
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
        </div>
        </div>
      );
    }
  }
  };

  return <div style={{marginBottom:'20px'}}>
    {showDiv()}
    </div>;
}
