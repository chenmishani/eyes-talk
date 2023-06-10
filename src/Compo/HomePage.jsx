import React from "react";
import "./style.css";
import suprise from './suprise.jpg'
import d8s from './photos/d8s.JPG'
import d4s from './photos/d4s.JPG'
import l1s from './photos/l1s.JPG'
import a1s from './photos/a1s.JPG'

import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <div className="mediaMainDiv">
        <div className="mediaSaleDiv">
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div className="meadiaHomePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  {" "}
                  <div
                    style={{ height: "200px",marginTop:'20px'}}
                    onClick={() => {
                      props.chosenBraceletCompo(0);
                    }}
                  >
                      <img style={{width:'90%',height:'90%'}} src={l1s} alt="logo" />
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

            <div className="meadiaHomePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                    <div
                    style={{ height: "200px",marginTop:'20px' }}
                    onClick={() => {
                      props.chosenChainCompo(4);
                    }}
                  >
                    <img style={{width:'90%',height:'90%'}} src={d4s} alt="logo" />
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                   D4 שרשרת{" "}
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

            <div className="meadiaHomePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/bracelet"}>
                  {" "}
                  <div
                    style={{ height: "200px",marginTop:'20px'}}
                    onClick={() => {
                      props.chosenBraceletCompo(5);
                    }}
                  >
                  <img style={{width:'90%',height:'90%'}} src={a1s} alt="logo" />
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>A1 צמיד </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "100%",
                    margin: "0 auto",
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >{`₪ ${props.arrBracelets[5].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addBracletes(5);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>      

            
            <div className="meadiaHomePageProduct">
              <div style={{ height: "100%" }}>
                <Link to={"/chain"}>
                    <div
                    style={{ height: "200px",marginTop:'20px'}}
                    onClick={() => {
                      props.chosenChainCompo(8);
                    }}
                  >
                   <img style={{width:'90%',height:'90%'}} src={d8s} alt="logo" />
                  </div>
                </Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                 
                  D8 שרשרת
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
                >{`₪ ${props.arrChains[8].price} `}</p>
              </div>
              <div>
                <button
                  className="btn2"
                  onClick={() => {
                    props.addChain(8);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>

            

          </div>
        </div>

        <div className="mediaSupriseDiv">
          <div style={{ margin: "0 auto", width: "100%" }}>
            <h2
              style={{
                width: "100%",
                fontSize: "25px",
                fontStyle: "rubik",
                marginTop: "0px",
              }}
            >
              ??אפשר לא לאהוב הפתעות
            </h2>
          </div>

          <div
            style={{
              width: "175px",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              backgroundColor:'white',
              border: '2px solid black'
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "27px",
                  fontFamily: "Times New Roman",
                  marginBottom: "20px",
                }}
              >
                !{props.arrChains[0].name}
              </h1>
            </div>
                <Link to={"/chain"}>  <div style={{ height: "100px" }}  onClick={() => {props.chosenChainCompo(0)}}>
                   {<img style={{width:'80%',height:'75%',marginTop:'10px'}} src={suprise} alt="logo" />}</div></Link>
            <div>
                <p
                style={{ fontSize: "20px", marginTop: "0px" }}
              >{`₪ ${props.arrChains[0].price} `}</p>
              <div>
                <button
                  className="btn4"
                  onClick={() => {
                    props.addSale(0);
                  }}
                >
                  הוספה לסל
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mediaSaleDiv">
        
          <div
            style={{
              width: "330px",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column",
              border: "2px solid #adcbd3",
              margin: "0 auto",
            }}
          >
            <div style={{ height: "200px" }}> {props.saleArr[0].photo}</div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "Times New Roman",
                  marginBottom: "0px",
                }}
              >
                {props.saleArr[0].name}
              </p>
            </div>
            <div>
              {" "}
              <p
                style={{ fontSize: "20px", marginTop: "0px" }}
              >{`₪ ${props.saleArr[0].price} `}</p>
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
              width: "330px",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column",
              border: "2px solid #adcbd3",
              margin: "0 auto",
              marginTop: "10px",
            }}
          >
            <div style={{ height: "200px" }}> {props.saleArr[2].photo}</div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "Times New Roman",
                  marginBottom: "0px",
                }}
              >
                {props.saleArr[2].name}
              </p>
            </div>
            <div>
              {" "}
              <p
                style={{ fontSize: "20px", marginTop: "0px" }}
              >{`₪ ${props.saleArr[2].price} `}</p>
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
                  {" "}
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
                  {" "}
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
              <Link to={"/chain"}>  <div style={{ height: "230px" }}  onClick={() => {props.chosenChainCompo(0)}}>
                   {<img style={{width:'85%',height:'50%',marginTop:'50px'}} src={suprise} alt="logo" />}</div></Link>
              </div>
              <div>
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                  שרשרת בהפתעה{" "}
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
                  {" "}
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
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                  {" "}
                  Y12 שרשרת{" "}
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
                  {" "}
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
                  {" "}
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
                <p style={{ fontSize: "100%", marginTop: "0px" }}>
                  {" "}
                  Y11 שרשרת{" "}
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
                    marginTop:'50px'
                  }}
                >
                  {props.saleArr[0].name}
                </p>
              </div>
              <div>
                {" "}
                <p
                  style={{ fontSize: "20px", marginTop: "0px" }}
                >{`₪ ${props.saleArr[0].price} `}</p>
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
                    marginTop:'50px'
                  }}
                >
                  {props.saleArr[1].name}
                </p>
              </div>
              <div>
                {" "}
                <p
                  style={{ fontSize: "20px", marginTop: "0px" }}
                >{`₪ ${props.saleArr[1].price} `}</p>
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
                    marginTop:'50px'
                  }}
                >
                  {props.saleArr[2].name}
                </p>
              </div>
              <div>
                {" "}
                <p
                  style={{ fontSize: "20px", marginTop: "0px" }}
                >{`₪ ${props.saleArr[2].price} `}</p>
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
