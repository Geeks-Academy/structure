import Input from "components/atoms/Input";
import React from "react";
import { ISocial } from "Types/interfaces";
import {
} from "./Social.styled";

const Social = ({ social }: ISocial): JSX.Element => {
  return (
    <div className="flex">
      <img className="w-32 h-32 border-gray-700 rounded-full" src={`${social?.image}`} alt={`${social?.name}`} />
      <Input label="" ariaLabel="type link" className="w-full ml-10"/>
    </div>
  );
};

export default Social;
