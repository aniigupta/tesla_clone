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
   <Section
   title ="Model  X"
   description ="order online for touchless Delivery"
   backgroundImg ="model-x.jpg"
   leftBtnText= "custom order"
   rightBtnText ="Exixting inventory"
   />
   <Section
   title ="Model  Y"
   description ="order online for touchless Delivery"
   backgroundImg ="model-y.jpg"
   leftBtnText= "custom order"
   rightBtnText ="Exixting inventory"
   />
   <Section
   title ="Model  3"
   description ="order online for touchless Delivery"
   backgroundImg ="model-3.jpg"
   leftBtnText= "custom order"
   rightBtnText ="Exixting inventory"
   />
   <Section
   title ="Lowest cost solar panels in America"
   description ="Money-back guarantee"
   backgroundImg ="solar-panel.jpg"
   leftBtnText= "Order Now"
   rightBtnText = "Learn more"
   />
   <Section
   title ="Solar for New Roofs"
   description ="solar Roof costs Less Than a New Roof Plus Solar Panels"
   backgroundImg ="solar-roof.jpg"
   leftBtnText= "Order Now"
   rightBtnText ="Learn more"
   />
   <Section
   title ="Accessories"
   description =""
   backgroundImg ="accessories.jpg"
   leftBtnText= "Shop Now"  
   />
   </Container>
  )
}

export default Home

const Container =styled.div`
height :  100vh;
z-index:10;
`