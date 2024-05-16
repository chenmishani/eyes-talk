import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function ChosenRing(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plus = <AiOutlinePlusCircle size="18px" />;
  const minus = <AiOutlineMinusCircle size="18px" />;


  const nev = useNavigate()

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openFullScreen = (photoUrl) => {
    setSelectedPhoto(photoUrl);
  };

  const closeFullScreen = () => {
    setSelectedPhoto(null);
  };

  const showCnt = () => {
    if (props.chosenRing.cnt < 1) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add();
          }}
        >
          For sale
        </button>
      );
    } else {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div onClick={() => { props.add() }}> {plus}</div>
          <div className="btn2" style={{ width: '15%', marginLeft: '5px', marginRight: '5px', fontSize: '20px' }}>{props.chosenRing.cnt}</div>
          <div onClick={() => { props.delete(props.chosenRing.index) }}>{minus}</div>

        </div>
      )
    }
  }

  const showDiv = () => {
    if (props.chosenRing == 0) {
      return <div className='cont' style={{ width: '80%', margin: '0 auto', marginTop: '30px', marginBottom: '50px', border: '1px solid black', height: "350px" }} >
        <p style={{ marginTop: '50px', fontSize: '250%', fontFamily: "Times New Roman" }}> לא נבחר מוצר</p>
        <p style={{ fontSize: '130%', marginTop: '30px', marginBottom: '40px' }} onClick={() => { nev('/') }}>לחזרה לעמוד הראשי לחץ כאן</p>
        <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: "0 auto", }}>
          <Link to={"/chains"}>
            <button style={{ width: "70px", backgroundColor: "black", color: "white", borderRadius: "45%", height: "30px" }}>
              שרשראות
            </button>
          </Link>

          <Link to={"/Bracelets"}>
            <button style={{ width: "70px", backgroundColor: "black", color: "white", borderRadius: "45%", height: "30px" }}>
              צמידים
            </button>
          </Link>
        </div>

      </div>

    }
    else {
      return (
        <div style={{ marginBottom: '20px' }}>
          <div className="chosenBraceletMedia">
            <div className="chosenProductDiv">
              <div style={{ margin: "0 auto" }}>
                <div>
                  <div className="photo-gallery" style={{ height: "250px" }}>
                    <div className="scrollable-container">
                      <div className="photo-wrapper" onClick={() => openFullScreen(props.chosenRing.photo)}>
                        {props.chosenRing.photo}
                      </div>
                      <div className="photo-wrapper" onClick={() => openFullScreen(props.chosenRing.photo1)}>
                        {props.chosenRing.photo1}
                      </div>
                    </div>
                  </div>

                  {selectedPhoto && (
                    <div className="fullscreen-overlay" onClick={closeFullScreen}>
                      <div className="fullscreen-photo">
                        {selectedPhoto}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ margin: "0 auto" }}>
                <h1 style={{ margin: '0px' }}>{props.chosenRing.name}</h1>
                <p> {props.chosenRing.about}</p>
                <p>צבע: {props.chosenRing.color} </p>
                <p
                  style={{ fontSize: "25px", fontFamily: "Times New Roman Times serif" }}
                >{`₪ ${props.chosenRing.price} `}</p>
                <div>

                  {showCnt()}
                </div>
              </div>
            </div>
          </div>
          <div className="chosenBraceletWeb">
            <div className="chosenProductDiv">
              <div style={{ margin: "0 auto", display: "flex" }}>
                <div style={{ height: '350px' }}>{props.chosenRing.photo}</div>
                <div style={{ width: '320px' }}> {props.chosenRing.photo1}</div>
              </div>

              <div style={{ margin: "0 auto" }}>
                <h1>{props.chosenRing.name}</h1>
                <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
                <p>צבעים: {props.chosenRing.color} </p>
                <p
                  style={{ fontSize: "25px", fontFamily: "Times New Roman Times serif" }}
                >{`₪ ${props.chosenRing.price} `}</p>
                <div>

                  {showCnt()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return <div style={{ marginBottom: '20px' }}>
    {showDiv()}
  </div>
}
