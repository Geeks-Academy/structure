import React from "react";
import { ISocial } from "Types/interfaces";
import {
} from "./Social.styled";

const Social = ({ link, social:{ active, image, name } }: ISocial): JSX.Element => {
  return (
    <div>
      <p> {link} </p>
      <p> {active} </p>
      <p> {image} </p>
      <p> {name} </p>
    </div>
  );
};

export default Social;
