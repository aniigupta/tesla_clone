import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S1</h1>
        <p>Order online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
      <ButtonGroup>
        <LeftButton>
          Custom order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
      </Buttons>
      <DownArrow src="/images/down-arrow.svg"/>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url('/images/model-s.jpg');
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}
`;

const LeftButton = styled.div`
  background-color: black;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 20px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`

`