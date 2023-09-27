import React, { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {Link, useNavigate } from "react-router-dom";



export default function ChosenBracelet(props) {


  const plus = <AiOutlinePlusCircle size="18px" />;
  const minus = <AiOutlineMinusCircle size="18px" />;
  const [flag, setFlag] = useState(false);

  const nev =useNavigate()

 
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
           <div style={{display:'flex',justifyContent:'center'}}>
                 <div style={{marginTop:'2px'}} onClick={()=>{ props.add()}}> {plus}</div>
                 <div className="btn2" style={{width:'10%',marginLeft:'5px',marginRight:'5px',fontSize:'20px'}}>
                  {props.chosenBracelet.cnt}</div>
                 <div style={{marginTop:'2px'}} onClick={()=>{ props.delete()}}>{minus}</div>
                 
                </div>       
        
      )
    }
  }

  const showDiv= ()=>{
    if(props.chosenBracelet==0){
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
        return (
        <div style={{marginBottom:'20px'}}>
          <div className="chosenBraceletMedia">
            <div className="chosenProductDiv">
              <div style={{ margin: "0 auto" }}>
                <div className="photo-gallery" style={{ height: "300px" }}>
                  <div className="scrollable-container">
                    <div className="photo-wrapper">
                      {props.chosenBracelet.photo}
                      <p style={{fontSize:'50px',marginTop:'0px',margin:'0 auto'}}>. <span style={{color:'grey'}}>.</span> </p>
                    </div>
                    <div className="photo-wrapper">
                      {props.chosenBracelet.photo1}
                      <p style={{fontSize:'50px',marginTop:'31px',margin:'0 auto'}}><span style={{color:'grey'}}>.</span> .  </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ margin: "0 auto" }}>
                <h1>{props.chosenBracelet.name}</h1>
                <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
                <p>צבעים: {props.chosenBracelet.color} </p>
                <p
                  style={{ fontSize: "25px" }}
                >{`₪ ${props.chosenBracelet.price} `}</p>
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
          <div className="chosenBraceletWeb">
            <div className="chosenProductDiv">
              <div style={{ margin: "0 auto", display: "flex" }}>
                <div style={{height:'350px'}}>{props.chosenBracelet.photo}</div>
                <div style={{width:'320px'}}> {props.chosenBracelet.photo1}</div>
              </div>
    
              <div style={{ margin: "0 auto" }}>
                <h1>{props.chosenBracelet.name}</h1>
                <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
                <p>צבעים: {props.chosenBracelet.color} </p>
                <p
                  style={{ fontSize: "25px" }}
                >{`₪ ${props.chosenBracelet.price} `}</p>
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
    return <div style={{marginBottom:'20px'}}>
    {showDiv()}
    </div>
  }

