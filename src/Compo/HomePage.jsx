import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import d5 from "./chains/d5.png";
import d6 from "./chains/d6.png";
import l1 from "./bracelets/l1.png";
import a3 from "./bracelets/a3.png";
import homePage1 from "./photos/homePage1.png";
import homePage2 from "./photos/homePage2.png";
import homePage3 from "./photos/homePage3.png";
import homePage4 from "./photos/homePage4.png";
import homePage5 from "./photos/homePage5.png";
import homePageTitle from "./photos2/title.png";
import homePageVideo from "./photos2/homePageVideo.mp4";
import HomePageBar from "./HomePageBar";




export default function HomePage(props) {
  const nev = useNavigate();



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: '80px'

      }}
    >
      <div className="mediaMainDiv">



        <div style={{ marginTop: "20px" }}>
          <HomePageBar />
          <img style={{ width: "100%" }} src={homePageTitle} alt="logo" />
        </div>
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

        <div>
          <video
            style={{ width: "100%", marginTop: "20px" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={homePageVideo} type="video/mp4" />
          </video>
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
                    height: "350px",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "80%", height: "75%", marginTop: "60px" }}
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

            <div className="photo-wrapper">
              <Link to={"/chain"}>
                <div
                  onClick={() => {
                    props.chosenChainCompo(6);
                  }}
                  style={{
                   height: "350px",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "90%", height: "70%", marginTop: "60px" }}
                    src={d6}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                D6
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
                    height: "350px",
                    width: "90%",
                  }}
                >

                  <img
                    style={{ width: "65%", height: "65%", marginTop: "80px" }}
                    src={a3}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                A3
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
                    height: "350px",
                    width: "90%",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "80%", marginTop: "60px" }}
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


      </div>

      {/* div for web */}
      <div className="mainDiv">
        <div style={{display:"flex"}}>
        <div>
        <Link to={"/chains"}>
          <div>
            <img style={{ width: "75%"}} src={homePage5} alt="logo" />
          </div>
        </Link>
        </div>
        <div style={{marginRight:'28px'}}>
          <video
            style={{ width: "112%"}}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={homePageVideo} type="video/mp4" />
          </video>
        </div>
        <div>
        <Link to={"/Bracelets"}>
          <div>
            <img style={{ width: "75%" }} src={homePage4} alt="logo" />
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
                    props.chosenChainCompo(6);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"                 
                  }}
                >

                  <img
                    style={{ width: "90%", height: "80%", marginTop: "70px" }}
                    src={d6}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
              D6
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
                    props.chosenBraceletCompo(7);
                  }}
                  style={{
                    height: "350px",
                    width: "90%"
                    }}
                >

                  <img
                    style={{ width: "80%", height: "80%", marginTop: "60px" }}
                    src={a3}
                    alt="logo"
                  />
                </div>  </Link>
              <p className="homePageP">
                A3
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
