import './App.css';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { useState } from 'react';

import Title from './Compo/Title';
import ChainsPage from './Compo/ChainsPage';
import Bracelets from './Compo/BraceletsPage';
import HomePage from './Compo/HomePage';
import CartPage from './Compo/CartPage';
import Finish from './Compo/Finish';
import SubTitle from './Compo/SubTitle';
import ChosenChain from './Compo/ChosenChain';
import ChosenBracelet from './Compo/ChosenBracelet';
import Order from './Compo/Order';
import Contact from './Compo/Contact';
import Sale from './Compo/SalePage';



import d1 from './Compo/chains/d1.png'
import d2 from './Compo/chains/d2.png'
import d3 from './Compo/chains/d3.png'
import d4 from './Compo/chains/d4.png'
import d5 from './Compo/chains/d5.png'
import d6 from './Compo/chains/d6.png'
import d7 from './Compo/chains/d7.png'
import d8 from './Compo/chains/d8.png'
import d9 from './Compo/chains/d9.png'
import d10 from './Compo/chains/d10.png'
import y1 from './Compo/chains/y1.png'
import y2 from './Compo/chains/y2.png'
import y3 from './Compo/chains/y3.png'
import y4 from './Compo/chains/y4.png'
import y5 from './Compo/chains/y5.png'
import y6 from './Compo/chains/y6.png'
import y7 from './Compo/chains/y7.png'
import y8 from './Compo/chains/y8.png'
import y9 from './Compo/chains/y9.png'
import y10 from './Compo/chains/y10.png'
import y11 from './Compo/chains/y11.png'
import y12 from './Compo/chains/y12.png'
import y13 from './Compo/chains/y13.png'
import y14 from './Compo/chains/y14.png'
import suprise from './Compo/suprise.jpg'

import sale1 from './Compo/photos/sale1.JPG'
import sale2 from './Compo/photos/sale2.JPG'
import sale3 from './Compo/photos/sale3.JPG'



import l1 from './Compo/bracelets/l1.png'
import l2 from './Compo/bracelets/l2.png'
import l3 from './Compo/bracelets/l3.png'
import l4 from './Compo/bracelets/l4.png'
import l5 from './Compo/bracelets/l5.png'
import a1 from './Compo/bracelets/a1.png'
import a2 from './Compo/bracelets/a2.png'
import a3 from './Compo/bracelets/a3.png'
import a4 from './Compo/bracelets/a4.png'
import a5 from './Compo/bracelets/a5.png'
import a6 from './Compo/bracelets/a6.png'

import d3s from './Compo/photos/d3s.JPG'
import d4s from './Compo/photos/d4s.JPG'
import d5s from './Compo/photos/d5s.JPG'
import d6s from './Compo/photos/d6s.JPG'
import d7s from './Compo/photos/d7s.JPG'
import d8s from './Compo/photos/d8s.JPG'
import d10s from './Compo/photos/d10s.JPG'
import y2s from './Compo/photos/y2s.JPG'
import y3s from './Compo/photos/y3s.JPG'
import y6s from './Compo/photos/y6s.JPG'
import y9s from './Compo/photos/y9s.JPG'
import y12s from './Compo/photos/y12s.JPG'

import l1s from './Compo/photos/l1s.JPG'
import l2s from './Compo/photos/l2s.JPG'
import l3s from './Compo/photos/l3s.JPG'
import a1s from './Compo/photos/a1s.JPG'
import a2s from './Compo/photos/a2s.JPG'
import a3s from './Compo/photos/a3s.JPG'
import a4s from './Compo/photos/a4s.JPG'
import a6s from './Compo/photos/a6s.JPG'



















function App() {
  
  const [arrChains,setarrChains]= useState([
{photo: <img style={{width:'60%',height:'55%',marginTop:'5%'}} src={suprise} alt="logo" />,cnt:0, name:'שרשרת בהפתעה',price:180 ,src:{suprise}},
{photo: <img style={{width:'60%',height:'80%'}} src={d1} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d1} alt="logo" />,name:'D1',price:150,color:'כחול,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d2} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d2} alt="logo" />,name:'D2',price:150,color:'ירוק כהה,אפור,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d3} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d3s} alt="logo" />,name:'D3',price:150,color:'ורוד,לבן,צהוב,שחור'},
{photo: <img style={{width:'60%',height:'80%'}} src={d4} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d4s} alt="logo" />,name:'D4',price:150,color:'ירוק,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d5} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d5s} alt="logo" />,name:'D5',price:150,color:'תכלת,אפור,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d6} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d6s} alt="logo" />,name:'D6',price:150,color:'צהוב,אפור,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d7} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d7s} alt="logo" />,name:'D7',price:150,color:'חום,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d8} alt="logo" />,cnt:0, photo1: <img style={{width:'200px',height:'30%'}} src={d8s} alt="logo" />,name:'D8',price:150,color:'כחול,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={d9} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d9} alt="logo" />,name:'D9',price:150,color:'אפור,לבן,חום'},
{photo: <img style={{width:'60%',height:'80%'}} src={d10} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={d10s} alt="logo" />,name:'D10',price:150,color:'כתום,כחול'},
{photo: <img style={{width:'60%',height:'80%'}} src={y1} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y1} alt="logo" />,name:'Y1',price:150,color:'כחול,חום,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y2} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y2s} alt="logo" />,name:'Y2',price:150,color:'שחור,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y3} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y3s} alt="logo" />,name:'Y3',price:100,color:'לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y4} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y4} alt="logo" />,name:'Y4',price:150,color:'ירוק,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y5} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y5} alt="logo" />,name:'Y5',price:150,color:'ורוד,צהוב,לבן,אפור'},
{photo: <img style={{width:'60%',height:'80%'}} src={y6} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y6s} alt="logo" />,name:'Y6',price:150,color:'כחול,תכלת,חום,אדום,אפור,לבן,שחור'},
{photo: <img style={{width:'60%',height:'80%'}} src={y7} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y7} alt="logo" />,name:'Y7',price:150,color:'ירוק,לבן,שחור'},
{photo: <img style={{width:'60%',height:'80%'}} src={y8} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y8} alt="logo" />,name:'Y8',price:150,color:'סגול,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y9} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y9s} alt="logo" />,name:'Y9',price:150,color:'ירוק'},
{photo: <img style={{width:'60%',height:'80%'}} src={y10} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y10} alt="logo" />,name:'Y10',price:150,color:'אפור,חום,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y11} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y11} alt="logo" />,name:'Y11',price:150,color:'ירוק זית,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y12} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y12s} alt="logo" />,name:'Y12',price:150,color:'ירוק,ורוד,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y13} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y13} alt="logo" />,name:'Y13',price:150,color:'ירוק,שחור,לבן'},
{photo: <img style={{width:'60%',height:'80%'}} src={y14} alt="logo" />,cnt:0, photo1: <img style={{width:'200px'}} src={y14} alt="logo" />,name:'Y14',price:150,color:'חום,שחור,אדום,לבן'},
])

const [arrBracelets,setArrBracelets]= useState([
  {photo: <img style={{width:'80%',height:'90%'}} src={l1} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={l1s} alt="logo" />, name:'L1',price:120,color:'כחול,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={l2} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={l2s} alt="logo" />, name:'L2',price:120,color:'כחול כהה,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={l3} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={l3s} alt="logo" />, name:'L3',price:120,color:'אפור,לבן,אדום'},
  {photo: <img style={{width:'80%',height:'90%'}} src={l4} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={l4} alt="logo" />, name:'L4',price:120,color:'תכלת,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={l5} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={l5} alt="logo" />, name:'L5',price:120,color:'אפור כהה,אפור בהיר,שקוף'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a1} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a1s} alt="logo" />, name:'A1',price:120,color:'ירוק,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a2} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a2s} alt="logo" />, name:'A2',price:120,color:'שחור,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a3} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a3s} alt="logo" />, name:'A3',price:120,color:'תכלת,אפור,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a4} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a4s} alt="logo" />, name:'A4',price:120,color:'ירוק זית,לבן'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a5} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a5} alt="logo" />, name:'A5',price:120,color:'סגול,לבן,שחור'},
  {photo: <img style={{width:'80%',height:'90%'}} src={a6} alt="logo" />,cnt:0,photo1: <img style={{width:'190px'}} src={a6s} alt="logo" />, name:'A6',price:120,color:'לבן,שחור'},
])


const [arrSales,setArrSales]=useState([
  {photo: <img style={{width:'70%',height:'100%',marginTop:'10px'}} src={sale1} alt="logo" />,cnt:0, name:'שרשרת + צמיד ',price:200},
  {photo: <img style={{width:'70%',height:'100%',marginTop:'10px'}} src={sale2} alt="logo" />,cnt:0, name:'שרשרת + צמיד ',price:200},
  {photo: <img style={{width:'70%',height:'100%',marginTop:'10px'}} src={sale3} alt="logo" />,cnt:0, name:'שרשרת + צמיד ',price:200}
])

const [num,setNum]=useState(0)
const [temp,settemp]=useState(0)
const [cart,setcart]= useState([])

const addChain=(index)=>{
  if(arrChains[index].cnt<1){
    setcart([...cart,arrChains[index]])
  }
settemp(temp+arrChains[index].price)
setNum(num+1)
arrChains[index].cnt=arrChains[index].cnt+1
}

const addChain2=()=>{
  if(chosenChain.cnt<1){
    setcart([...cart,chosenChain])
  }
  settemp(temp+chosenChain.price)
  setNum(num+1)
  chosenChain.cnt=chosenChain.cnt+1
      
  }


  const addChain3=(index)=>{
    settemp(temp+arrChains[index].price)
    setNum(num+1)
    arrChains[index].cnt=arrChains[index].cnt+1
    }

const addBracelets=(index)=>{
  if(arrBracelets[index].cnt<1){
    setcart([...cart,arrBracelets[index]])
  }
  settemp(temp+arrBracelets[index].price)
  setNum(num+1)
  arrBracelets[index].cnt=arrBracelets[index].cnt+1

  
  }

  const addBracelets2=()=>{
    if(chosenBracelet.cnt<1){
      setcart([...cart,chosenBracelet])
    }
    settemp(temp+chosenBracelet.price)
    setNum(num+1)
    chosenBracelet.cnt=chosenBracelet.cnt+1
        
    }

    const addBracelets3=(index)=>{
      settemp(temp+arrBracelets[index].price)
      setNum(num+1)
      arrBracelets[index].cnt=arrBracelets[index].cnt+1
      }

    const addSale=(index)=>{
      if(arrSales[index].cnt<1){
        setcart([...cart,arrSales[index]])
      }
      settemp(temp+arrSales[index].price)
      setNum(num+1)
      arrSales[index].cnt=arrSales[index].cnt+1

      }
  

const deleteCart=()=>{
  setcart([])
  settemp(0)
  setNum(0)
 for (let i = 0; i < arrChains.length; i++) {
  arrChains[i].cnt=0
  }
  for (let i = 0; i < arrBracelets.length; i++) {
    arrBracelets[i].cnt=0
    }
    for (let i = 0; i < arrSales.length; i++) {
      arrSales[i].cnt=0
      }
  
}

const deleteChain=(i)=>{
  
  if(arrChains[i].cnt>0){
 arrChains[i].cnt=arrChains[i].cnt-1 
 settemp(temp-arrChains[i].price)
 setNum(num-1)
}
}

const deleteChain2=(i)=>{
  
  if(chosenChain.cnt>0){
 chosenChain.cnt=chosenChain.cnt-1 
 settemp(temp-chosenChain.price)
 setNum(num-1)
}
}

const deleteBracelet=(i)=>{
  if(arrBracelets[i].cnt>0){
arrBracelets[i].cnt=arrBracelets[i].cnt-1
settemp(temp-arrBracelets[i].price)
setNum(num-1)
}
}

const deleteBracelet2=(i)=>{
  
  if(chosenBracelet.cnt>0){
    chosenBracelet.cnt=chosenBracelet.cnt-1 
 settemp(temp-chosenBracelet.price)
 setNum(num-1)
}
}

const deleteSale=(i)=>{
  if(arrSales[i].cnt>0){
arrSales[i].cnt=arrSales[i].cnt-1
settemp(temp-arrSales[i].price)
setNum(num-1)
}
}




const [chosenChain,setChosenChain]=useState()

const [chosenBracelet,setChosenBracelet]=useState()


const chosenChainCompo =(i)=>{
  setChosenChain(arrChains[i])
 
}

const chosenBraceletCompo =(i)=>{
  setChosenBracelet(arrBracelets[i])
 
}

const [flag,setFlag]= useState(false)



  return (

    <div className="App" >
       <BrowserRouter>
       <Title cart={cart} num={num} flag={flag} setFlag={setFlag}/>
    <Routes>
    <Route path='/' element= {<HomePage arrChains={arrChains} arrBracelets={arrBracelets} saleArr={arrSales} addChain={addChain} deleteChain={deleteChain} addBracletes={addBracelets} deleteBracelet={deleteBracelet} chosenChainCompo={chosenChainCompo} chosenBraceletCompo={chosenBraceletCompo} addSale={addSale} />} /> 
    <Route path='/Chains' element= {<ChainsPage addChain={addChain} add2={addChain3} delete={deleteChain} arrChains={arrChains} chosenChainCompo={chosenChainCompo}  />} /> 
    <Route path='/Bracelets' element= {<Bracelets arrBracelets={arrBracelets} delete={deleteBracelet} chosenBraceletCompo={chosenBraceletCompo} add={addBracelets} add2={addBracelets3}/>} /> 
    <Route path='/Cart' element= {<CartPage cart={cart} temp={temp} deleteCart={deleteCart} setCart={setcart}/>} /> 
    <Route path='/chain' element= {<ChosenChain chosenChain={chosenChain} add={addChain2} delete={deleteChain2}/>} /> 
    <Route path='/bracelet' element= {<ChosenBracelet chosenBracelet={chosenBracelet} add={addBracelets2} delete={deleteBracelet2}/>} /> 
    <Route path='/sale' element= {<Sale  saleArr={arrSales} add={addSale} delete={deleteSale}/>} /> 
    <Route path='/order' element= {<Order cart={cart} deleteCart={deleteCart} />}/> 
    <Route path='/finish' element= {<Finish />}/> 
    <Route path='/contact' element= {<Contact />}/> 



    </Routes>
    <SubTitle/>

    </BrowserRouter>
    

    </div>
  );
}

export default App;
