//Stylind different ways
import styled from 'styled-components';

export const Content = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  height: 83vh;
  margin: 0 auto;
  overflow: auto;
`;

export const Loading = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  position: absolute;
  left:0;
  bottom: 50px;
  right:0;
  margin:auto;
  text-align: center;
`;