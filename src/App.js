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
const byValue = (a,b) => b.poids - a.poids;
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
   let [SelectedFilesSplit, setSelectedFilesSplit]=useState([])
   const [fileWordCloud,setFileWordCloud]=useState([])
   const [fileWordCloudShow, setFileWordCloudShow]=useState([])
   const [color, setColor]=useState("green")
   const [text, setText]=useState("ouvrir ")
   const [mode, setMode]=useState("Includes")
   const [colorMode, setColorMode]=useState(["#000000"," #ffffff"," #ffffff"," #ffffff"])
   useEffect(()=>{
     axios.get(`https://indexationphp.herokuapp.com/`)
     .then(data=>{
       console.log(data.data)
       data.data.forEach(element => {
         for(const key in element.head){
           for(const key2 in element.body){
             if (key===key2){   
               element.head[key]=element.head[key]+element.body[key2]
             }
           }
         }
          Object.assign(element.body,element.head)       
       });
       setState(data.data)
     })
   },[])

   function searchFunction(e){
     console.log(mode)
    setSelectedFiles([])
    let inputWords=inputSearch.current.value.split(" ")
    let words=inputWords.filter(word=>word.length>0)
    let tab=[]
    words.forEach(word => {
      state.forEach(element => {
        for(const key in element.body){
          /*/////////////////////////////////// */
          if(mode==="Includes"){
            if(key.includes(word.toLowerCase()) || word.toLowerCase().includes(key)){
              if(Math.abs(key.length-word.toLowerCase().length)<3){
                let f = tab.find(e=>e.element===element)
                if(f){}
                else{
                 tab.push({poids:element.body[key],id:element.descriptions+element.title+element.keywords, element:element, click:0})
                }
              }
            }
          }
         /*/////////////////////////////////// */ 
          else if(mode==="Char"){
            let count=0
            for(let i = 0; i < word.toLowerCase().length; i++){
                if(key.includes(word.toLowerCase().charAt(i))){
                  count++
                }
            }
            if(Math.abs(word.toLowerCase().length-count)<1){
              if(Math.abs(key.length-count)<3){
                console.log(word.toLowerCase().length,count)
                let f = tab.find(e=>e.element===element)
                if(f){}
                else{
                 tab.push({poids:element.body[key],id:element.descriptions+element.title+element.keywords, element:element, click:0})
                }
              }
            }
          }
          else if(mode==="SemiChar"){
            let firstPartR = word.toLowerCase().substr(0, word.toLowerCase().length / 2)  
            // get the second part of word request
            let secondPartR = word.toLowerCase().substr(word.toLowerCase().length / 2, word.toLowerCase().length)
            
            let firstPartW = key.substr(0, key.length / 2)  
            // get the second part of word bdd
            let secondPartW = key.substr(key.length / 2, key.length)

            let count=0
            for (let i = 0; i < firstPartR.length; i++) {
              if(firstPartW.includes(firstPartR.charAt(i))){
              count=count+1
              }
            }
            for (let i = 0; i < secondPartR.length; i++) {
              if(secondPartW.includes(secondPartR.charAt(i))){
                count=count+1
              }
            }
            if(word.toLowerCase().length-count<3){    
              let f = tab.find(e=>e.element===element)
              if(f){}
              else{
               tab.push({poids:element.body[key],id:element.descriptions+element.title+element.keywords, element:element, click:0})
              } 
            }
          }
          else if(mode==="SemiIncludes"){
            let firstPartR = word.toLowerCase().substr(0, word.toLowerCase().length / 2)  
            // get the second part of word request
            let secondPartR = word.toLowerCase().substr(word.toLowerCase().length / 2, word.toLowerCase().length)
            
            let firstPartW = key.substr(0, key.length / 2)  
            // get the second part of word bdd
            let secondPartW = key.substr(key.length / 2, key.length)
            if(
              firstPartW===firstPartR||
              secondPartW===secondPartR||
              secondPartR===secondPartW||
              firstPartR===firstPartW
              ){
                let f = tab.find(e=>e.element===element)
                if(f){}
                else{
                 tab.push({poids:element.body[key],id:element.descriptions+element.title+element.keywords, element:element, click:0})
                }
              }           
          }
        }
        const sorted = [...tab].sort(byValue);
        setSelectedFiles(sorted)
        setSelectedFilesSplit(sorted.slice(0,3))
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
      if(e.target.dataset.mode==="Includes"){
        setColorMode(["#000000","#ffffff","#ffffff","#ffffff"])
      } else if(e.target.dataset.mode==="SemiIncludes"){
        setColorMode(["#ffffff","#000000","#ffffff","#ffffff"])       
      } else if(e.target.dataset.mode==="SemiChar"){
        setColorMode(["#ffffff","#ffffff","#000000","#ffffff"])
      } else if(e.target.dataset.mode==="Char"){
        setColorMode(["#ffffff","#ffffff","#ffffff","#000000"])
      }
   }
   function clickF(e){
     let tab=[]
     SelectedFilesSplit.forEach(file => {
       tab.push(file)
     });
     let f=tab.find(el=>el.element.title===e.target.dataset.val)
     f.click++
     setSelectedFilesSplit(tab) 
   }
  return (
    <div className="App">
            <nav>
        <ul id="nav_bar"> 
          <li id="sign_in" className="nav-links"><a style={{color:colorMode[0]}} onClick={setModeF} data-mode="Includes" href="#">Mode strict</a></li> 
          <li id="sign_in" className="nav-links"><a style={{color:colorMode[1]}} onClick={setModeF} data-mode="SemiIncludes" href="#">Mode SemiIncludes</a></li>
          <li id="sign_in" className="nav-links"><a style={{color:colorMode[2]}} onClick={setModeF} data-mode="SemiChar" href="#">Mode SemiChar</a></li>
          <li id="sign_in" className="nav-links"><a style={{color:colorMode[3]}} onClick={setModeF} data-mode="Char" href="#">Mode Char</a></li>
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
        <h4 className="title"><a data-val={val.element.title} onClick={clickF} target="_blank" href={"https://salim499.github.io/dataVizFinalRender/CommentCaMarche/"+val.element.file.split("/")[val.element.file.split.length+1]}>{htmlToString(val.element.title)}</a></h4>
        <p className="p">{val.element.descriptions?htmlToString((val.element.descriptions+val.element.keywords).slice(0,300)):htmlToString((val.element.keywords).slice(0,300))}</p>
        <br/>
        <StarRatingComponent
                             name="rate1"
                             starCount={5}
                             value={val.click}
                           />                              
       &nbsp;
       &ensp;
        <button className="myButton" style={{color:"black"}} data-val={val.id}  onClick={wordCloudF}>{text} nuage de mots</button>
       &nbsp;
       &ensp;
       <h3 style={{color:"green"}}>poids du document ==> {val.poids}</h3>
        <br/><br/><br/>
       </div>
       {fileWordCloudShow.includes(val.id)?
        <TransformWrapper>
          <TransformComponent>
       <div className="secondPart" style={{marginTop:"8%"}}>
       <Wordcloud style={{marginTop:"5%"}} word={fileWordCloud}></Wordcloud>
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
         className="App-link"
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
