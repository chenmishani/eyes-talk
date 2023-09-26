import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import "./style.css";
import d5 from "./chains/d5.png";
import d2 from "./chains/d2.png";
import l1 from "./bracelets/l1.png";
import a2 from "./bracelets/a2.png";
import homePage1 from "./photos/homePage1.png";
import homePage2 from "./photos/homePage2.png";
import homePage3 from "./photos/homePage3.png";
import homePage4 from "./photos/homePage4.png";
import homePage5 from "./photos/homePage5.png";
import homePageTitle from "./photos2/title.png";
import homePageVideo from "./photos2/homePageVideo.mp4";
import HomePageBar from "./HomePageBar";
import videoSource from './photos2/homePageVideo.mp4';




export default function HomePage(props) {
  const nev = useNavigate();
  const videoPlayer=()=>{
    return (
      <div>
        <video style={{ width: "100%", marginTop: "20px" }}
            autoPlay 
            muted 
            loading="lazy"
            loop
            playsInline>
           <source src={videoSource} type="video/mp4"/>

        </video>
      </div>
     
    )
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000); 

     return () => clearTimeout(timeout);
  }, []);
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: '80px'
      }}>

      <div className="mediaMainDiv">
      {loading ? (
        <div style={{width:'100%'}}> 
        <div className="loading">
          <div style={{width:'23%',margin:'0 auto'}}>
          <ClockLoader
        color='#adcbd3'
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      <p style={{fontSize:'20px',fontFamily: "Times New Roman"}}>Life isn't prfercr but jewelry can be </p>
      </div>
         
        </div>
      ) : (
        <>
         
        <div style={{ marginTop: "20px" }}>
          <HomePageBar />
          <img style={{ width: "100%" }} src={homePageTitle} alt="logo" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: "0 auto", }}>
          <Link to={"/chains"}>
            <button className="mediaBtn">
              שרשראות
            </button>
          </Link>

          <Link to={"/Bracelets"}>
            <button className="mediaBtn">
              צמידים
            </button>
          </Link>
          
        </div>

        <div>
            {videoPlayer()}
        </div>

        <Link to={"/Bracelets"}>
          <div>
            <img style={{ width: "100%" }} src={homePage4} alt="logo" />
          </div>
        </Link>
        <Link to={"/chains"}>
          <div>
            <img style={{ width: "100%" }} src={homePage5} alt="logo" />
          </div>
        </Link>

        <p className="subtitle">הנמכרים ביותר</p>
        <div className="photo-gallery" style={{ height: "15%" }}>
          <div className="scrollable-container">
            <div className="photo-wrapper">
              <Link to={"/bracelet"}>
                <div
                  onClick={() => {
                    props.chosenBraceletCompo(0);
                  }}
                  style={{
                    height: "200%",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "80%", height: "75%", marginTop: "60px" }}
                    src={l1}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP" style={{marginTop:'10px'}}>
                L1
              </p>

              <p className="homePageP2">
                צמיד
              </p>
              <p className="homePageP">
                ₪120
              </p>
            </div>

            <div className="photo-wrapper">
              <Link to={"/chain"}>
                <div
                  onClick={() => {
                    props.chosenChainCompo(2);
                  }}
                  style={{
                   height: "200%",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "100%", height: "75%", marginTop: "40px" }}
                    src={d2}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                D2
              </p>
              <p className="homePageP2">
                שרשרת
              </p>
              <div>
                <p className="homePageP"> <span className="sale">₪150</span> {`₪${120} `}</p>

              </div>
            </div>
            <div className="photo-wrapper">
              <Link to={"/bracelet"}>
                <div
                  onClick={() => {
                    props.chosenBraceletCompo(7);
                  }}
                  style={{
                    height: "200%",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "80%", height: "60%", marginTop: "70px" }}
                    src={a2}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP" style={{marginTop:'25px'}}>
                A2
              </p>
              <p className="homePageP2">
                צמיד
              </p>
              <div>
                <p className="homePageP">₪120</p>

              </div>
            </div>
            <div className="photo-wrapper">
              <Link to={"/chain"}>
                <div
                  onClick={() => {
                    props.chosenChainCompo(5);
                  }}
                  style={{
                    height: "200%",
                    width: "90%",
                  }}
                >
                  <img
                    style={{  width: "100%", height: "75%", marginTop: "20px"  }}
                    src={d5}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                D5
              </p>
              <p className="homePageP2">
                שרשרת
              </p>
              <div>
                <p className="homePageP"> <span className="sale">₪150</span> {`₪${120} `}</p>

              </div>
            </div>
          </div>
        </div>

        <p className="subtitle">במיוחד בשבילך </p>
        <div className="photo-gallery" style={{ height: '15%' }}>
          <div className="scrollable-container">
            <div className="photo-wrapper">
              <img
                style={{ height: "80%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage1}
                alt="Photo 1"
              />
            </div>

            <div className="photo-wrapper">
              <img
                style={{ height: "80%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage2}
                alt="Photo 2"
              />
            </div>
            <div className="photo-wrapper">
              <img
                style={{ height: "80%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage3}
                alt="Photo 3"
              />
            </div>
          </div>
        </div>

        </>
      )}
      </div>

      {/* div for web */}
      <div className="mainDiv">
        <div style={{display:"flex"}}>
        <div>
        <Link to={"/Bracelets"}>
          <div>
            <img style={{ width: "90%" }} src={homePage4} alt="logo" />
          </div>
        </Link>
        </div>
        <div style={{marginRight:'75px'}}>
          <video
            style={{ width: "148%"}}
            preload="auto"
            autoPlay={true}
            loop
            muted
            playsInline
          >
            <source src={homePageVideo} type="video/mp4" />
          </video>
        </div>
        <div>
        <Link to={"/chains"}>
          <div>
            <img style={{ width: "85%"}} src={homePage5} alt="logo" />
          </div>
        </Link>
        </div>
       
        </div>

   


       <p className="subtitle" style={{marginTop:'40px',marginBottom:'0px'}}>הנמכרים ביותר</p>
          <div style={{display:'flex',margin:'0 auto'}}>
            <div style={{margin:'40px'}}>
              <Link to={"/bracelet"}>
                <div
                  onClick={() => {
                    props.chosenBraceletCompo(0);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"                  
                  }}
                >

                  <img
                    style={{ width: "90%", height: "80%", marginTop: "60px" }}
                    src={l1}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                L1
              </p>

              <p className="homePageP2">
                צמיד
              </p>
              <p className="homePageP">
                ₪120
              </p>
            </div>

            <div style={{margin:'40px'}}>
              <Link to={"/chain"}>
                <div 
                  onClick={() => {
                    props.chosenChainCompo(2);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"                 
                  }}
                >

                  <img
                    style={{ width: "90%", height: "80%", marginTop: "70px" }}
                    src={d2}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
              D2
              </p>
              <p className="homePageP2">
                שרשרת
              </p>
              <div>
                <p className="homePageP"> <span className="sale">₪150</span> {`₪${120} `}</p>

              </div>
            </div>
            <div style={{margin:'40px'}}>
              <Link to={"/bracelet"}>
                <div
                  onClick={() => {
                    props.chosenBraceletCompo(2);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"
                    }}
                >

                  <img
                    style={{ width: "80%", height: "80%", marginTop: "60px" }}
                    src={a2}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                A2
              </p>
              <p className="homePageP2">
                צמיד
              </p>
              <div>
                <p className="homePageP">₪120</p>

              </div>
            </div>
            <div style={{margin:'40px'}}>
              <Link to={"/chain"}>
                <div
                  onClick={() => {
                    props.chosenChainCompo(5);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"
                   }}
                >
                  <img
                    style={{ width: "90%", height: "80%", marginTop: "70px" }}
                    src={d5}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                D5
              </p>
              <p className="homePageP2">
                שרשרת
              </p>
              <div>
                <p className="homePageP"> <span className="sale">₪150</span> {`₪${120} `}</p>

              </div>
            </div>
          </div>

          <p className="subtitle" style={{marginTop:'40px',marginBottom:'0px'}}>במיוחד בשבילך</p>
          <div>
          <div style={{display:'flex',margin:'0 auto'}}>
            <div style={{margin:'40px'}}>
            <img
                style={{ height: "70%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage1}
                alt="Photo 1"
              />
            </div>

            <div style={{margin:'40px'}}>
            <img
                style={{ height: "70%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage2}
                alt="Photo 1"
              />
            </div>
            <div style={{margin:'40px'}}>
            <img
                style={{ height: "70%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage3}
                alt="Photo 1"
              />
            </div>
          
        </div>
        </div>

      </div>
    </div>
  );
}
