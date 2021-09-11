import React from 'react'
import styled from 'styled-components'
 
const Key = styled.div`
    width: ${(props)=> (props.type==="white") ? "80px" : "40px"};
    height: ${(props)=> (props.type==="white") ? "300px" : "160px"};
    position: ${(props)=> (props.type==="white") ? "" : "absolute"};
    margin: ${(props)=> (props.type==="white") ? "0" : "0 -20px"};
    background-color: ${(props)=> (props.type==="white") ? "white" : "black"};
    z-index: ${(props)=> (props.type==="white") ? "1" : "2"};
    border: 1px black solid;
<<<<<<< HEAD
    
=======
    &:active{
        transform: scale(.98); 
        box-shadow: 0 -1px 10px #0568f2;
    }
>>>>>>> 79003e3de6430da2945b5d7fd675c90620980d9c
    @media screen and (max-width: 768px) {
    height: ${(props)=> (props.type==="white") ? "80px" : "40px"};
    width: ${(props)=> (props.type==="white") ? "300px" : "160px"};
    margin: ${(props)=> (props.type==="white") ? "0" : "-20px 0 -20px -10px"};
    flex-direction: column;
 }
`
 
const Component = ({type, referencia}) => {
<<<<<<< HEAD
=======
    console.log(referencia)
>>>>>>> 79003e3de6430da2945b5d7fd675c90620980d9c
   return(
       <Key type={type} ref={referencia}/>
   )
}
 
export default Component