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
import subtitle from "./photos2/subtitle.png";
import subtitle2 from "./photos2/subtitle2.png";
import homePageVideo from "./photos2/homePageVideo.mp4";
import HomePageBar from "./HomePageBar";
import videoSource from './photos2/homePageVideo.mp4';




export default function HomePage(props) {
  const nev = useNavigate();
  const videoPlayer = () => {
    return (
      <div>
        <video style={{ width: "100%", marginTop: "20px" }}
          autoPlay
          muted
          preload="none"
          loop
          playsInline>
          <source src={videoSource} type="video/mp4" />

        </video>
      </div>

    )
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firstTime = localStorage.getItem('firstTime');

    if (firstTime !== null) {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('firstTime', 'false');
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
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
          <div style={{ width: '100%' }}>
            <div className="loading">
              <div style={{ width: '23%', margin: '0 auto' }}>
                <ClockLoader
                  color='#adcbd3'
                  loading={loading}
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              <p style={{ fontSize: '20px', fontFamily: "Times New Roman" }}>Life isn't prferct but jewelry can be </p>
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

            <div onClick={()=>{nev('/Bracelets')}} >
              {videoPlayer()}
            </div>

            
              <div onClick={()=>{nev('/Bracelets')}}>
                <img style={{ width: "100%" }} src={homePage4} alt="logo" />
              </div>
            
            <Link to={"/chains"}>
              <div>
                <img style={{ width: "100%" }} src={homePage5} alt="logo" />
              </div>
            </Link>

            <img style={{ width: "100%" }} src={subtitle} alt="logo" />
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
                  <p className="homePageP" style={{ marginTop: '10px' }}>
                    L1
                  </p>

                  <p className="homePageP2">
                    צמיד
                  </p>
                  <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}>
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
                    <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}> <span className="sale">₪150</span> {`₪${120} `}</p>

                  </div>
                </div>
                <div className="photo-wrapper">
                  <Link to={"/bracelet"}>
                    <div
                      onClick={() => {
                        props.chosenBraceletCompo(6);
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
                  <p className="homePageP" style={{ marginTop: '25px' }}>
                    A2
                  </p>
                  <p className="homePageP2">
                    צמיד
                  </p>
                  <div>
                    <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}>₪120</p>

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
                        style={{ width: "100%", height: "75%", marginTop: "20px" }}
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
                    <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}> <span className="sale">₪150</span> {`₪${120} `}</p>

                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '40px' }}> <img style={{ width: "100%" }} src={subtitle2} alt="logo" /> </div>
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
        <div style={{ width: '100%', display: "flex", justifyContent: 'space-between' }}>

          <div style={{ width: '51%' }}>
            <Link to={"/Bracelets"}>
              <div >
                <img style={{ width: "88%" }} src={homePage4} alt="logo" />
              </div>
            </Link>
          </div>
          <div style={{ width: '30%' }}>
            <video
              style={{ width: "93%" }}
              preload="auto"
              autoPlay={true}
              loop
              muted
              playsInline
            >
              <source src={homePageVideo} type="video/mp4" />
            </video>
          </div>
          <div style={{ width: '50%' }}>
            <Link to={"/chains"}>
              <div >
                <img style={{ width: "90%" }} src={homePage5} alt="logo" />
              </div>
            </Link>
          </div>

        </div>

        <div style={{ marginBottom: '40px' }}> <img style={{ width: "40%" }} src={subtitle} alt="logo" /> </div>
        <div style={{ display: 'flex', margin: '0 auto', width: '90%', justifyContent: 'space-between' }}>
          <div style={{ margin: '40px' }}>
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
            <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}>
              ₪120
            </p>
          </div>

          <div style={{ margin: '40px' }}>
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
              <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}> <span className="sale">₪150</span> {`₪${120} `}</p>

            </div>
          </div>
          <div style={{ margin: '40px' }}>
            <Link to={"/bracelet"}>
              <div
                onClick={() => {
                  props.chosenBraceletCompo(6);
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
              <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}>₪120</p>

            </div>
          </div>
          <div style={{ margin: '40px' }}>
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
              <p className="homePageP" style={{ fontFamily: "Times New Roman Times serif" }}> <span className="sale">₪150</span> {`₪${120} `}</p>

            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}> <img style={{ width: "40%" }} src={subtitle2} alt="logo" /> </div>
        <div>
          <div style={{ display: 'flex', margin: '0 auto' }}>
            <div style={{ margin: '40px' }}>
              <img
                style={{ height: "70%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage1}
                alt="Photo 1"
              />
            </div>

            <div style={{ margin: '40px' }}>
              <img
                style={{ height: "70%", width: "80%" }}
                onClick={() => {
                  nev("/sale");
                }}
                src={homePage2}
                alt="Photo 1"
              />
            </div>
            <div style={{ margin: '40px' }}>
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
