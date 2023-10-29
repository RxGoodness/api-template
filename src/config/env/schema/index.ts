import { Joi } from "celebrate";

// define validation for all the env vars
export const schema = {
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  APP_NAME: Joi.string().required(),
  PORT: Joi.number().default(5000),
  LOCAL_PORT: Joi.number().default(3003),
  MONGODB_URI: Joi.string()
    .description("Production Database host name")
    .required(),
};
