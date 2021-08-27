import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Key from "./Key.js"
import {acordes, acordes2} from "../Globals"

const Keyboard = styled.ul`
    margin-top: 10%;
    display: flex;
    justify-content: center;
    list-style: none;
    @media screen and (max-width: 768px) {
    align-items:center;
    flex-direction: column;
    margin-top: 10%;
 }
    
`
const Acord = styled.li`
`
const H1 = styled.h1`
  text-align: center;
  @media screen and (max-width: 768px) {
    display:none
 } 
`

const reproducirNota = audio => {
    const Note = new Audio(`./sounds/${audio}.mp3`)
    Note.play();
    setTimeout(() => (Note.volume = 0), 2000);
  };
  
const Component = () => {

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
      if(acordes[e.key.toLowerCase().toString()]){
        const Note = new Audio(`./sounds/${acordes[e.key.toLowerCase().toString()]}.mp3`)
        console.log(e)
        refs[e.key.toLowerCase().toString()].current.style.transform = "scale(.98)"
        refs[e.key.toLowerCase().toString()].current.style.boxShadow = "0 -1px 10px #0568f2"
        Note.play();
        Note.volume = 1
        setTimeout(() => (Note.volume = 0), 2000);  
        setTimeout(() => (refs[e.key.toLowerCase().toString()].current.style = ""), 200);  
    };
  }
    window.addEventListener("keypress", handleKeyPress)
})
console.log(refQ)
   return(
    <>
        <Keyboard >
          {acordes2.map((obj)=>{
            const i = obj.key
            const j = obj.value
            const type = obj.type
            return(
              <Acord onClick={() => reproducirNota(j)}><Key referencia={refs[i]} type={type}/></Acord>
            )
          })}
        </Keyboard>
        <H1>2-3-5-6-7-9-0</H1>
        <H1>Q-W-E-R-T-Y-U-I-O-P</H1>
    </>
   )
}
 
export default Component