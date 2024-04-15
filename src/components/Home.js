import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
   <Container>
   <Section
   title ="Model  S"
   description ="order online for touchless Delivery"
   backgroundImg ="model-s.jpg"
   leftBtnText= "custom order"
   rightBtnText ="Exixting inventory"
   />
   {/* <Section/>
   <Section/>
   <Section/> */}
   </Container>
  )
}

export default Home

const Container =styled.div`
height :  100vh;
`