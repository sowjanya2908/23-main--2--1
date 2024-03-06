import dotenv from "dotenv";
dotenv.config({ path: `.env` });
const appData = {
  port: process.env.PORT,

  api_version: process.env.API_VERSION,

  app_timezone: "asia/calcutta",
 
};

const DB = {
  mongo_connection_string: process.env.MONGO_URL,
};


const configData = {
  app: appData,
  db: DB,
};
export default configData;
