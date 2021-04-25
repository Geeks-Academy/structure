import Input from "components/atoms/Input";
import { ISocial, ISocialPart } from "Types/interfaces";

const Social = (social: any): JSX.Element => {
  // const {
  //   link,
  //   social: { image, name },
  // } = social;
  return (
    <div className="flex">
      <img
        className="w-32 h-32 border-gray-700 rounded-full"
        src={social.image}
        alt={social.name}
      />
      <Input
        placeholder={"link"}
        label=""
        ariaLabel="type link"
        className="w-full ml-10"
      />
    </div>
  );
};

export default Social;
