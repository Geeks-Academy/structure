import React from "react";
import Social from "./Social";
import { ISocialList } from "./SocialList.model";

const SocialList = ({ socials }: ISocialList): JSX.Element => {
  return (
    <div>
      <span className="text-3xl font-bold"> Socials </span>
      <ul className="mt-10">
        {socials.map(({_id, ...social}) => {
          console.log(_id, social)
          return (
            <li key={_id}>
              <Social link={"tempString"} social={social.social} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialList;
