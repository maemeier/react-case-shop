import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

const Homepage = () => {
  return (
    <div>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>Hello from Homepage</h1>;
        }}
      </ProductConsumer>
    </div>
  );
};

const color = "pink";

const Button = styled.button`
  color: red;
  background: ${color};
  font-size: ${props => (props.large ? "3rem" : "1rem")};
`;
export default Homepage;
