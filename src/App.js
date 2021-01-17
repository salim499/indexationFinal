import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import StarRatingComponent from "react-star-rating-component";
import Wordcloud from './WordCloud'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function splitTable(table){
  let compt=[]
  let count=0
  for(let i=0;i<table.length;i=i+3){
    count++
    compt.push(count)
  }

    return compt
}
function htmlToString(str){
  let res=str.replace(/&eacute;/ig,"é")
             .replace(/&acirc;/ig,"â")
             .replace(/&egrave;/ig,"è")
             .replace(/&agrave;/ig,"à")
             .replace(/�/ig,"é")
             .replace(/&ccedil/ig,"ç")
  return res
}
function wordsVides(str){
  let res=str.replace(/&eacute;/ig,"é")
             .replace(/&acirc;/ig,"â")
             .replace(/&egrave;/ig,"è")
             .replace(/&agrave;/ig,"à")
             .replace(/�/ig,"é")
             .replace(/&ccedil/ig,"ç")
  .replace(/eacute/ig,"")
  .replace(/acirc/ig,"")
  .replace(/egrave/ig,"")
  .replace(/agrave/ig,"")
  .replace(/�/ig,"")
  .replace(/ccedil/ig,"")
  .replace(/(href+)/ig,"")
  .replace(/^align(.*)/ig,"")
  .replace(/^class(.*)/ig,"")
  .replace('="',"")
  .replace(/nbsp/ig,"")
  .replace(/^est$/ig,"")
  .replace(/^repr$/ig,"")
  .replace(/^faq$/ig,"")
  .replace(/^qui$/ig,"")
  .replace(/^acc$/ig,"")
  .replace(/^lors$/ig,"")
  .replace(/^sur$/ig,"")
  .replace(/^par$/ig,"")
  .replace(/^ont$/ig,"")
  .replace(/^ann$/ig,"")
  .replace(/^raquo$/ig,"")
  .replace(/^laquo$/ig,"")
  .replace(/^span$/ig,"")
  .replace(/^des$/ig,"")
  .replace(/^de$/ig,"")
  .replace(/^les$/ig,"")
  .replace(/^le$/ig,"")
  .replace(/^mes$/ig,"")
  .replace(/^me$/ig,"")
  .replace(/^ses$/ig,"")
  .replace(/^se$/ig,"")
  .replace(/^hat$/ig,"")
  .replace(/^syst$/ig,"")
  .replace(/^dans$/ig,"")
  .replace(/^pour$/ig,"")
  .replace(/^ter$/ig,"")
  .replace(/^que$/ig,"")
  .replace(/^un$/ig,"")
  .replace(/^une$/ig,"")
  .replace(/^ainsi$/ig,"")
  .replace(/^img$/ig,"")
  .replace(/^src$/ig,"")
  .replace(/^tre$/ig,"")
  .replace(/^pre$/ig,"")
  .replace(/borr0"/ig,"")
  .replace(/^target/ig,"")
  .replace(/^blank/ig,"")
  .replace(/^afin/ig,"")
  .replace(/^une/ig,"")
  .replace(/gif(.*)/ig,"")
  .replace(/alt(.*)/ig,"")
  .replace(/png(.*)/ig,"")
  .replace(/^width(.*)/ig,"") 
  .replace(/^height(.*)/ig,"")
  .replace(/^top(.*)/ig,"")
  .replace(/^inx$/ig,"")
  .replace(/^rob$/ig,"")
  .replace(/^ing$/ig,"")
  .replace(/^tab$/ig,"")
  .replace(/^lui$/ig,"")
  .replace(/^curit$/ig,"")
  .replace(/^pas$/ig,"")
  .replace(/^ges$/ig,"")
  .replace(/^scer$/ig,"")
  .replace(/^ima$/ig,"")
  .replace(/^rveur$/ig,"")
  .replace(/^plus$/ig,"")
  .replace(/^faire$/ig,"")
  .replace(/^aux$/ig,"")
  .replace(/^the$/ig,"")
  .replace(/^requ$/ig,"")
  .replace(/^3a39"$/ig,"")
  .replace(/^sans$/ig,"")
  .replace(/^mais$/ig,"")
  .replace(/^mani$/ig,"")
  .replace(/^basant$/ig,"")
return res 
}

function App() {
  function paginationNumber(e){
    let limit=e.target.dataset["val"]*3
    setSelectedFilesSplit(SelectedFiles.slice(limit-3,limit))
 }
   const inputSearch=useRef(null)

   const [state, setState]=useState([])
   const [SelectedFiles, setSelectedFiles]=useState([])
   const [SelectedFilesSplit, setSelectedFilesSplit]=useState([])
   const [fileWordCloud,setFileWordCloud]=useState([])
   const [fileWordCloudShow, setFileWordCloudShow]=useState([])
   const [color, setColor]=useState("green")
   const [text, setText]=useState("ouvrir ")
   const [mode, setMode]=useState()
   useEffect(()=>{
     axios.get(`https://indexationphp.herokuapp.com/`)
     .then(data=>{
       console.log(data.data)
       data.data.forEach(element => {
         for(const key in element.head){
           for(const key2 in element.body){
             if (key===key2){   
               element.head[key]=element.head[key]+element.body[key2]
              //console.log(element.file,key,element.head[key],key2,element.body[key2])
             }
           }
         }
          Object.assign(element.body,element.head)       
       });
       setState(data.data)
     })
   },[])

   function searchFunction(e){
    setSelectedFiles([])
    let inputWords=inputSearch.current.value.split(" ")
    let words=inputWords.filter(word=>word.length>0)
    let tab=[]
    words.forEach(word => {
      state.forEach(element => {
        for(const key in element.body){
          /*/////////////////////////////////// */
          if(mode==="Includes"){
            if(key===word.toLowerCase()){
              console.log(key, word.toLowerCase())
              let f = tab.find(e=>e.element===element)
              if(f){}
              else{
               tab.push({id:element.descriptions+element.title+element.keywords, element:element})
              }
            }
          }
         /*/////////////////////////////////// */ 
          else {
            let count=0
            for(let i = 0; i < word.toLowerCase().length; i++){
                if(key.includes(word.toLowerCase().charAt(i))){
                  count++
                }
            }
            if(Math.abs(word.toLowerCase().length-count)<1){
              console.log(word.toLowerCase().length,count)
              let f = tab.find(e=>e.element===element)
              if(f){}
              else{
               tab.push({id:element.descriptions+element.title+element.keywords, element:element})
              }
            }
          }
        }
        setSelectedFiles(tab)
        console.log(SelectedFiles)
        setSelectedFilesSplit(tab.slice(0,3))
      });     
    });
   }
   function wordCloudF(e){
     if(fileWordCloudShow.includes(e.target.dataset.val)){
       e.target.style.color="green"
       setColor("green")
       setText("ouvrir ")
      setFileWordCloudShow(fileWordCloudShow.filter(el=>el!==e.target.dataset.val))      
     }else{
      e.target.style.color="red"
       setColor("red")
       setText("fermer ")
      let tab=[]
      let fileSelected=SelectedFiles.find(el=>el.id===e.target.dataset.val)
      for (const key in fileSelected.element.body){
        if(wordsVides(key).length>3){
          tab.push({text:wordsVides(key), value:fileSelected.element.body[key]})
        }
      }
      setFileWordCloud(tab)
      setFileWordCloudShow(fileWordCloudShow=>[...fileWordCloudShow,e.target.dataset.val]) 
     }
   }

   function setModeF(e){
      setMode(e.target.dataset.mode)
   }
  return (
    <div className="App">
            <nav>
      
        <ul id="nav_bar"> 
          <li  id="sign_in" className="nav-links"><a onClick={setModeF} data-mode="Includes" href="#">Mode strict</a></li> 
          <li  id="sign_in" className="nav-links"><a onClick={setModeF} data-mode="SemiIncludes" href="#">Mode SemiIncludes</a></li>
          <li  id="sign_in" className="nav-links"><a onClick={setModeF} data-mode="SemiChar" href="#">Mode SemiChar</a></li>
          <li  id="sign_in" className="nav-links"><a onClick={setModeF} data-mode="Char" href="#">Mode Char</a></li>
        </ul>  
      </nav>
        <img src={logo} className="App-logo" alt="logo" />
    <div class="logo">
      <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
    </div>
    <div class="bar">
      <input ref={inputSearch} class="searchbar" type="text" title="Search"/>
    </div>
    <div class="buttons">
      <button onClick={searchFunction} class="button" type="button">Chercher</button>
     </div>
     <br/><br/>
     <div className="global">
     {SelectedFilesSplit.map((val,key)=>(
        <div className="g">
       <div className="firstPart">
        <h4 className="title">{htmlToString(val.element.title)}</h4>
        <p className="p">{val.element.descriptions?htmlToString((val.element.descriptions+val.element.keywords).slice(0,300)):htmlToString((val.element.keywords).slice(0,300))}</p>
        <br/>
        <StarRatingComponent
                             name="rate1"
                             starCount={5}
                             value={5}
                           />                              
       &nbsp;
       &ensp;
        <button className="myButton" style={{color:"black"}} data-val={val.id}  onClick={wordCloudF}>{text} nuage de mots</button>
        <br/><br/><br/>
       </div>
       {fileWordCloudShow.includes(val.id)?
        <TransformWrapper>
          <TransformComponent>
       <div className="secondPart">
       <Wordcloud word={fileWordCloud}></Wordcloud>
       </div> 
         </TransformComponent>
       </TransformWrapper>
       :null}
       </div>
     ))}
     </div>
     <br/>
      <div className="Footer">
        {SelectedFiles?splitTable(SelectedFiles).map((val,key)=>(
          <React.Fragment>
         <a onClick={paginationNumber}
         data-val={val}
         href="#"
         rel="noopener noreferrer"
       >
       {val}
       </a>
       &ensp;
       &nbsp;
       </React.Fragment>
        )):null}
        </div>
        <br/><br/>
    </div>
  );
}

export default App;
