import dotenv from "dotenv";

dotenv.config();

const config = {
  jwtSecret: process.env.JWT_SECRET || "",
  port: process.env.PORT || "",
  mongodbUrl: process.env.MONGODB_URL || "",
};

export default config;