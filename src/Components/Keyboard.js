import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Key from "./Key.js"
import {acordes, acordes2} from "../Globals"

const Keyboard = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    @media screen and (max-width: 768px) {
    align-items:center;
    flex-direction: column;
 }
    
`
const Buttoms = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  .active{
    background: rgb(255,0,0);
    &:hover{
    background: rgb(240,0,0);
    cursor: pointer;
  }
  }
`
const Buttom = styled.button`
  background-color: rgba(0,0,0,0.3);
  font-size: 24px;
  width: 100px;
  height: 40px;
  margin: 0 15px;
  border: none;
  outline: none;
  &:hover{
    background-color: rgba(0,0,0,0.45);
    cursor: pointer;
  }
`
const H1 = styled.h1`
  text-align: center;
  @media screen and (max-width: 768px) {
    display:none
 } 
`
  
const Component = () => {
let recordingStartTime
let recordingEndTime
let songNotes = []
let times = []
let endTimes
let loop 

const toggleRecording = () =>{
  document.getElementById("record").classList.toggle("active")
  if(isRecording()){
    startRecording()
  }
  else{
  recordingEndTime = Date.now() - recordingStartTime
    stopRecording()
  }
}

const startRecording = () => {
  if(isRecording())
  recordingStartTime = Date.now()
  songNotes = []
}
const stopRecording = () => {
  document.getElementById("repeat").classList.add("active")
  playSong()
}

const isRecording = () =>{
  return document.getElementById("record").classList.contains("active")
}
const playSong = () =>{
    songNotes.map(e => {
      times.push(setTimeout(()=> playNote(e.note, e.key), e.startTime)
  )})
    
    endTimes = setTimeout(()=> document.getElementById("repeat").classList.remove("active"), recordingEndTime)
}
const stopSong = () => {
  times.forEach(e => clearTimeout(e))
    clearTimeout(endTimes)
    times=[]
    document.getElementById("loop").classList.remove("active")
    document.getElementById("repeat").classList.remove("active")
}
const recordNote = (note, key) =>{
  songNotes.push({
    note,
    key,
    startTime: Date.now() - recordingStartTime
  })
}
const repeatSong = () => {
  if(document.getElementById("repeat").classList.contains("active")||document.getElementById("record").classList.contains("active")||document.getElementById("loop").classList.contains("active")){
    stopSong()
    document.getElementById("loop").classList.add("active")
    loopSong()
  }
  else{
    document.getElementById("repeat").classList.add("active")
    playSong()
}}
const repeatLoop = () => {
  document.getElementById("loop").classList.remove("active")
  loopSong()
}
const loopSong = () =>{
  if(document.getElementById("repeat").classList.contains("active")||document.getElementById("record").classList.contains("active")||document.getElementById("loop").classList.contains("active")){
    
    stopSong()
    clearTimeout(loop)
  }
  else{
    document.getElementById("loop").classList.add("active")
    playSong()
    loop = setTimeout( ()=> {
      repeatLoop()
    },recordingEndTime )
  }
}
const playNote = (audio, e) => {
    if(isRecording()){
    recordNote(audio, e)
  }  

  const Note = new Audio(`./sounds/${audio}.mp3`)
  Note.play();
  setTimeout(() => Note.volume = 0, 2000);
  if(typeof(e)!=="string"){
    refs[e.key.toLowerCase()].current.style.transform = "scale(.98)"
    refs[e.key.toLowerCase()].current.style.boxShadow = "0 -1px 10px #0568f2"
  setTimeout(() => (refs[e.key.toLowerCase()].current.style = ""), 200);   }
  else{
    refs[e.toLowerCase()].current.style.transform = "scale(.98)"
    refs[e.toLowerCase()].current.style.boxShadow = "0 -1px 10px #0568f2"
    setTimeout(() => (refs[e.toLowerCase()].current.style = ""), 200);   }}
  ;

  const refQ = useRef(null)
  const ref2 = useRef(null)
  const refW = useRef(null)
  const ref3 = useRef(null)
  const refE = useRef(null)
  const refR = useRef(null)
  const ref5 = useRef(null)
  const refT = useRef(null)
  const ref6 = useRef(null)
  const refY = useRef(null)
  const ref7 = useRef(null)
  const refU = useRef(null)
  const refI = useRef(null)
  const ref9 = useRef(null)
  const refO = useRef(null)
  const ref0 = useRef(null)
  const refP = useRef(null)

  const refs = {
    q: refQ,
    2: ref2,
    w: refW,
    3: ref3,
    e: refE,
    r: refR,
    5: ref5,
    t: refT,
    6: ref6,
    y: refY,
    7: ref7,
    u: refU,
    i: refI,
    9: ref9,
    o: refO,
    0: ref0,
    p: refP
  }

  useEffect(()=>{
    function handleKeyPress(e){
      if(acordes[e.key.toLowerCase()]){
        playNote(acordes[e.key.toLowerCase()], e) 
    };
  }
    window.addEventListener("keypress", handleKeyPress)
})
   return(
    <>
      <Buttoms>
        <Buttom id="record" onClick={toggleRecording}>Record</Buttom>
        <Buttom id="repeat" onClick={repeatSong}>Repeat</Buttom> 
        <Buttom id="loop" onClick={loopSong}>Loop</Buttom>
      </Buttoms>
      <Keyboard >
        {acordes2.map((obj)=>{
          const i = obj.key
          const j = obj.value
          const type = obj.type
          return(
            <li onClick={() => playNote(j, i)}><Key referencia={refs[i]} type={type}/></li>
          )
        })}
      </Keyboard>
      <H1>2-3-5-6-7-9-0</H1>
      <H1>Q-W-E-R-T-Y-U-I-O-P</H1>
    </>
   )
}
export default Component