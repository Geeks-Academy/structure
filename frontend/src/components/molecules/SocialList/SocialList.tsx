import React from "react";
import Social from "./Social";
import { ISocialList } from "./SocialList.model";

const SocialList = ({ socials }: ISocialList): JSX.Element => {
  return (
    <ul>
      {socials.map(({ link, social }) => {
        return (
          <li>
            <Social link={link} social={social} />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
