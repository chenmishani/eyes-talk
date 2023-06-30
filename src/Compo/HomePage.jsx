import React, { useState } from "react";
import "./style.css";
import suprise from "./photos2/suprise.jpg";
import d8s from "./photos/d8s.JPG";
import d4s from "./photos/d4s.JPG";
import l1s from "./photos/l1s.JPG";
import a1s from "./photos/a1s.JPG";
import homePage1 from "./photos/homePage1.png";
import homePage2 from "./photos/homePage2.png";
import homePage3 from "./photos/homePage3.png";
import homePage4 from "./photos/homePage4.png";
import homePage5 from "./photos/homePage5.png";
import homePageTitle from "./photos/homePageTitle.png";
import homePageVideo from "./photos2/homePageVideo.mp4";


import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";


export default function HomePage(props) {
  const [flag, setFlag] = useState(false);
  const nev = useNavigate();

 

  // const showCntChain = (i) => {
  //   if (flag == false) {
  //     return (
  //       <button
  //         className="btn2"
  //         onClick={() => {
  //           props.addChain(i);
  //         }}
  //       >
  //         הוספה לסל
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <button
  //           style={{
  //             width: "10px",
  //             border: "0px",
  //             background: "white",
  //             fontSize: "20px",
  //             margin: "10px",
  //           }}
  //           onClick={() => {
  //             props.deleteChain(props.arrChains[i].name, i);
  //           }}
  //         >
  //           -
  //         </button>
  //         <button className="btn2" style={{ width: "40px" }}>
  //           {props.arrChains[4].cnt}
  //         </button>
  //         <button
  //           style={{
  //             width: "10px",
  //             border: "0px",
  //             background: "white",
  //             fontSize: "20px",
  //             margin: "5px",
  //           }}
  //           onClick={() => {
  //             props.addChain(i);
  //           }}
  //         >
  //           +
  //         </button>
  //       </div>
  //     );
  //   }
  // };

  // const MediaChains = [
  //   {
  //     photo: (
  //       <img style={{ width: "90%", height: "90%" }} src={d8s} alt="logo" />
  //     ),
  //     name: "D8",
  //     price: 150,
  //     index: 8,
  //   },
  //   {
  //     photo: (
  //       <img style={{ width: "90%", height: "90%" }} src={d4s} alt="logo" />
  //     ),
  //     name: "D4",
  //     price: 150,
  //     index: 4,
  //   },
  // ];

  // const MediaBracelets = [
  //   {
  //     photo: (
  //       <img style={{ width: "90%", height: "90%" }} src={l1s} alt="logo" />
  //     ),
  //     name: "L1",
  //     price: 150,
  //     index: 0,
  //   },
  //   {
  //     photo: (
  //       <img style={{ width: "90%", height: "90%" }} src={a1s} alt="logo" />
  //     ),
  //     name: "A1",
  //     price: 150,
  //     index: 5,
  //   },
  // ];

  const right = <BsArrowRightShort size="25px" />;
  const left = <BsArrowLeftShort size="25px" />;

  const SliderData = [
    {
      image: (
        <img
          onClick={() => {
            nev("/sale");
          }}
          style={{ height: "100%", width: "90%" }}
          src={homePage1}
          alt="logo"
        />
      ),
    },
    {
      image: (
        <img
          onClick={() => {
            nev("/sale");
          }}
          style={{ height: "100%", width: "90%" }}
          src={homePage2}
          alt="logo"
        />
      ),
    },
    {
      image: (
        <img
          onClick={() => {
            nev("/sale");
          }}
          style={{ height: "100%", width: "90%" }}
          src={homePage3}
          alt="logo"
        />
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }




  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      <div className="mediaMainDiv">
      <div style={{marginTop:'20px'}}>
            <img style={{ width: "85%" }} src={homePageTitle} alt="logo" />
          </div>
        <div style={{display:'flex',justifyContent:'space-between',width:'50%',margin:'0 auto'}}>
        <Link to={"/chains"}> <button style={{width:'70px',backgroundColor:'black',color:'white',borderRadius:'45%',height:'30px'}}>שרשראות</button>  </Link>
        <Link to={"/Bracelets"}> <button style={{width:'70px',backgroundColor:'black',color:'white',borderRadius:'45%',height:'30px'}}>צמידים</button>  </Link>
        </div>

           <div>
       <video style={{width:'85%',marginTop:'20px'}} autoPlay loop muted playsInline >
        <source src={homePageVideo} type="video/mp4" />
        </video>
        
    </div>

        <Link to={"/Bracelets"}>
          <div>
            <img style={{ width: "85%" }} src={homePage4} alt="logo" />
          </div>
        </Link>
        <Link to={"/chains"}>
          <div>
            <img style={{ width: "85%" }} src={homePage5} alt="logo" />
          </div>
        </Link>

        <div className="photo-gallery">
      <div className="scrollable-container">
        <div className="photo-wrapper">
        <img style={{ height: "80%", width: "80%" }}
          onClick={() => {nev("/sale")}} src={homePage1} alt="Photo 1" />
        </div>
         <div className="photo-wrapper">
          <img style={{ height: "100%", width: "80%" }}
           onClick={() => {nev("/sale")}} src={homePage2} alt="Photo 2" />
        </div>
        <div className="photo-wrapper">
          <img style={{ height: "100%", width: "80%" }}
           onClick={() => {nev("/sale")}} src={homePage3} alt="Photo 3" />
        </div>
        </div>
    </div>

          {/* <div style={{ width: "100%", marginBottom: "20px", marginTop: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div onClick={prevSlide}>{left}</div>
            </div>
            <div>
              {" "}
              <section className="slider">
                {SliderData.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}
                    >
                      {index === current && slide.image}
                    </div>
                  );
                })}
              </section>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div onClick={nextSlide}>{right}</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* div for web */}

      <div className="mainDiv">
        <div className="saleDiv">
          <div style={{ marginLeft: "75%", marginTop: "0px" }}>
            <p
              style={{
                width: "100%",
                fontSize: "35px",
                fontStyle: "rubik",
                marginTop: "0px",
              }}
            >
              הנמכרים ביותר
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenBraceletCompo(10);
                    }}
                  >
                    {props.arrBracelets[10].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>A6 צמיד </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrBracelets[10].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addBracletes(10);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenBraceletCompo(3);
                    }}
                  >
                    {props.arrBracelets[3].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>L4 צמיד </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrBracelets[3].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addBracletes(10);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(0);
                    }}
                  >
                    {
                      <img
                        style={{
                          width: "85%",
                          height: "50%",
                          marginTop: "50px",
                        }}
                        src={suprise}
                        alt="logo"
                      />
                    }
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                  שרשרת בהפתעה
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[0].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(0);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(22);
                    }}
                  >
                    {props.arrChains[22].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>Y12 שרשרת</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[22].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(22);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(4);
                    }}
                  >
                    {props.arrChains[4].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}> D4 שרשרת </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[4].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(4);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  {" "}
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenBraceletCompo(2);
                    }}
                  >
                    {props.arrBracelets[2].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>L3 צמיד </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrBracelets[2].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addBracletes(2);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  {" "}
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenBraceletCompo(0);
                    }}
                  >
                    {props.arrBracelets[0].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>L1 צמיד </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrBracelets[0].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addBracletes(0);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(21);
                    }}
                  >
                    {props.arrChains[21].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>Y11 שרשרת</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[21].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(21);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  {" "}
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(1);
                    }}
                  >
                    {props.arrChains[1].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}> D1 שרשרת </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[1].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(1);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            <div className="homePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                  {" "}
                  <div
                    style={{ height: "230px" }}
                    onClick={() => {
                      props.chosenChainCompo(6);
                    }}
                  >
                    {props.arrChains[6].photo}
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}> D6 שרשרת </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrChains[6].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(6);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="saleDiv">
          <div style={{ marginLeft: "75%", marginTop: "0px" }}>
            <p
              style={{
                width: "100%",
                fontSize: "35px",
                fontStyle: "rubik",
                marginTop: "0px",
              }}
            >
              המבצעים שלנו
            </p>
          </div>

          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: "300px",
                paddingBottom: "10px",
                display: "flex",
                flexDirection: "column",
                border: "2px solid #adcbd3",
              }}
            >
              <div style={{ height: "200px" }}> {props.saleArr[0].photo}</div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman",
                    marginBottom: "0px",
                    marginTop: "50px",
                  }}
                >
                  {props.saleArr[0].name}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "20px", marginTop: "0px" }}>
                  {`₪ ${props.saleArr[0].price} `}
                </p>
                <div style={{ width: "80%", margin: "0 auto" }}>
                  <button
                    className="btn3"
                    onClick={() => {
                      props.addSale(0);
                    }}
                  >
                    הוספה לסל
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "300px",
                paddingBottom: "10px",
                display: "flex",
                flexDirection: "column",
                border: "2px solid #adcbd3",
              }}
            >
              <div style={{ height: "200px" }}> {props.saleArr[1].photo}</div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman",
                    marginBottom: "0px",
                    marginTop: "50px",
                  }}
                >
                  {props.saleArr[1].name}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "20px", marginTop: "0px" }}>
                  {`₪ ${props.saleArr[1].price} `}
                </p>
                <div style={{ width: "80%", margin: "0 auto" }}>
                  <button
                    className="btn3"
                    onClick={() => {
                      props.addSale(1);
                    }}
                  >
                    הוספה לסל
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "300px",
                paddingBottom: "10px",
                display: "flex",
                flexDirection: "column",
                border: "2px solid #adcbd3",
              }}
            >
              <div style={{ height: "200px" }}> {props.saleArr[2].photo}</div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Times New Roman",
                    marginBottom: "0px",
                    marginTop: "50px",
                  }}
                >
                  {props.saleArr[2].name}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "20px", marginTop: "0px" }}>
                  {`₪ ${props.saleArr[2].price} `}
                </p>
                <div style={{ width: "80%", margin: "0 auto" }}>
                  <button
                    className="btn3"
                    onClick={() => {
                      props.addSale(2);
                    }}
                  >
                    הוספה לסל
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
