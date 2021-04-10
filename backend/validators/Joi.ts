import Joi from "joi";
import { Types } from "mongoose";

interface ExtendedStringSchema extends Joi.StringSchema {
  objectId(): this;
}

interface ExtendedJoi extends Joi.Root {
  string(): ExtendedStringSchema;
}

const objectId: Joi.Extension = {
  base: Joi.string(),
  type: "string",
  messages: {
    "objectId.base": "Invalid MongoDB ObjectId format"
  },
  rules: {
    objectId: {
      validate: (value, helpers) => {
        if (!Types.ObjectId.isValid(value)) {
          return helpers.error("objectId.base");
        }
        return value;
      }
    }
  }
};

const CustomJoi: ExtendedJoi = Joi.extend(objectId);

export default CustomJoi;
