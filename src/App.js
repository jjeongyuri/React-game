import Border from "./Border";
import Button from "./Button";
import Proplay from "./Proplay";
import './App.css';
import { useState } from "react";

const randomDate = (value)=>{
  return Math.ceil(Math.random() * value)
}
let count = 0;

function App() {
  const [ahistory,setAhistory] = useState([]);
  const [bhistory,setBhistory] = useState([]);
  // const [play,setPlay] = useState(1)

  const playClick = ()=>{
    
    // console.log(count)
    if(count <= 5){
      count ++ ;
    // console.log(count)
    const aaa = randomDate(9);
    const bbb = randomDate(9);
    setAhistory([...ahistory,aaa]);
    setBhistory([...bhistory,bbb]);
    console.log(count);
    }
    else if(count === 6) {
      ++ count  ;
      count = 0;
      setAhistory([]);
      setBhistory([]);
    }
  }
  const resetClick = () =>{
    setAhistory([]);
    setBhistory([]);
  }
  
  return (
   <div id="Wrap">
    <div>
    <div className="practice">
      <Proplay count={count} aTem = {ahistory} bTem = {bhistory}/>
    </div>
    <div className="btn">
      <Button onClick={playClick}>start</Button>
      <Button onClick={resetClick}>reset</Button>
    </div>
    <div className="contain">
      <Border name="A" team="a" myteam={ahistory}></Border>
      <Border name="B" team="b" myteam={bhistory}></Border>
    </div>
    </div>
   </div>
  )
}

export default App;
