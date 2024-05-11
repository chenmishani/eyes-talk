import React, { useState } from "react";
import './style.css'
import logo from './photos2/logo.mp4';
import instegram from './photos2/InstagramLogo.png'
import { useNavigate, Link } from "react-router-dom";
import { CgMenuRound } from 'react-icons/cg'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { BsBasket } from 'react-icons/bs'
import Timer from "./Timer";
import israel from './photos/israel.JPG'




export default function Title(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)

  const humFlag = props.flag


  const toggleMenu = () => {
    setIsOpen(!open);
  }

  const menuStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const menuClass = isOpen && humFlag ? 'menu-container menu-open' : 'menu-container';




  // const [login, setLogin] = useState(false)

  const nav = useNavigate()

  const showNun = () => {
    if (props.num < 1) {
      return <p></p>
    }
    else {
      return <h1 style={{ fontSize: '15px' }}>{props.num}</h1>
    }
  }

  const burgerIcon = <CgMenuRound size='30px' onClick={() => { props.setFlag(!props.flag) }} />
  const whatsappLogo = <FaWhatsapp size='28px' />
  const cart = <BsBasket size='23px' />
  const right = <BsArrowRightCircle size='23px' />

  const deadline = new Date('2023-10-07T23:59:59');



  return (


    <div className="titleDiv">

      <div className="mediaBar">
        <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', height: '200px', width: '100%' }}>
          {/* <div style={{ marginTop: '0px' }}>
            <Timer deadline={deadline} />
          </div> */}
          <div className="bar3">
            <div style={{ display: 'flex', width: '25%' }}>
              <div className='cartLogo' onClick={() => { nav('/Cart') }}>{cart} </div>
              <div className="divNum">{showNun()}</div>
            </div>
            <div style={{ width: '60%' }}>
              <div onClick={() => { nav('/') }}> <h1 className="title" style={{ fontSize: '150%', marginTop: '15px' }}>EYES  TALK</h1></div>
            </div>
            <div>
              <div style={{ display: 'flex', width: '20%' }}>
                <a style={{ marginTop: '12px', color: 'black' }} href="https://wa.me/+972528775898">{whatsappLogo}</a>
                <div> <a href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer"> <img style={{ width: "25px", height: '25px', marginTop: '13px' }} src={instegram} alt="logo" /> </a></div>
                <div style={{ marginTop: '10px' }} onClick={toggleMenu}> {burgerIcon} </div>
              </div>
              <div className={menuClass} style={menuStyle}>
                <div className={'menuDiv'}>


                  <Link to={'/Bracelets'}> <button onClick={toggleMenu} className='humburgerBtn'>{right}</button> </Link>
                  <Link to={'/Bracelets'}> <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn'>צמידים</button> </Link>
                  <Link to={'/chains'}>  <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn' >שרשראות</button> </Link>
                  <Link to={'/Rings'}>  <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn' >טבעות</button> </Link>
                  <Link to={'/suprise'}>  <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn' >שרשרת בהפתעה</button> </Link>
                  <Link to={'/sale'}>  <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn' >מבצעים</button> </Link>
                  <Link to={'/contact'} > <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn'>צור קשר</button></Link>
                  <Link to={'/'}> <button onClick={() => { props.setFlag(!props.flag) }} className='humburgerBtn'>בית</button></Link>
                  <Link to={'/Terms'}> <button className='humburgerBtn'>תקנון</button></Link>
                </div>
              </div>
              {/* {showCompo()} */}


            </div>
          </div>
        </div>

        <Link to={'/'}>
          <div style={{ margin: '0 auto' }}>
            <video style={{ width: '40%', marginTop: '50px', marginLeft: '15px' }} autoPlay muted loop playsInline>
              <source src={logo} type="video/mp4" />
            </video>
          </div>
        </Link>

      </div>


      {/* div for web  */}

      <div className="webTitleDiv">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '25%' }} >
            <div style={{ display: 'flex' }}>
              <div className='cartLogo' style={{ marginTop: '20px' }} onClick={() => { nav('/Cart') }}>{cart} </div>
              <div className="divNum">{showNun()}</div>
              <div> <Link to={'/contact'} > <button className="btnWeb" onClick={() => { props.setFlag(!props.flag) }}>צור קשר</button></Link> </div>
              <div> <Link to={'/terms'} > <button className="btnWeb" onClick={() => { props.setFlag(!props.flag) }}>תקנון</button></Link> </div>

            </div>
          </div>


          <div >
            <div style={{ display: 'flex' }}>

              <div style={{ display: 'flex' }}>
                <div> <Link to={'/suprise'}>  <button className="btnWeb" onClick={() => { props.setFlag(!props.flag) }} >שרשרת בהפתעה</button> </Link> </div>
                <div> <Link to={'/sale'}>  <button className="btnWeb" onClick={() => { props.setFlag(!props.flag) }} >מבצעים</button> </Link> </div>
              </div>

              <div style={{ marginRight: '30px', fontFamily: "Times New Roman", fontSize: '20px' }}><p>בס"ד</p></div>
            </div>
          </div>
        </div>

        <div>
          <div className="logoDiv" >
            <div><h1 className="title">EYES  TALK</h1></div>
            <Link to={'/'}> <div>
              <video style={{ width: '20%' }} autoPlay loop muted playsInline>
                <source src={logo} type="video/mp4" />
              </video>
            </div></Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: '0 auto' }}>

            <div style={{ height: '80px' }} >
              <Link to={'/Bracelets'}> <button className="btn" style={{ marginTop: '20px' }}>הצמידים שלנו</button> </Link>
            </div>

            <div style={{ height: '80px' }}>
              <Link to={'/chains'}> <button className="btn" style={{ marginTop: '20px' }} >השרשראות שלנו</button> </Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  )

}







