import React from 'react'


const Test = ({text = 'Hola soy un texto'}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

export default Test


const Render =() => {
  return (
    <>
      
      <Test text={`lorem`}/>

    </>
  )
}