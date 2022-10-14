import { ConfigService } from "@nestjs/config";

export default () => {
  const config = new ConfigService();
  // config().database.host+"root:"+config().database.pass+"@"+config().database.name+"/?retryWrites=true&w=majority")
  console.log(process.env.DATABASE_HOST+process.env.DATABASE_USER+":"+process.env.DATABASE_PASS+"@"+process.env.DATABASE_NAME+"/?retryWrites=true&w=majority")
  return ({
    port: parseInt(config.get("PORT")) || 3000,
    database: {
      host: process.env.DATABASE_HOST || "mongodb://localhost",
      port: parseInt(process.env.DATABASE_PORT) || 27017,
      user: process.env.DATABASE_USER || "root",
      name: process.env.DATABASE_NAME || "dbExample",
      pass: process.env.DATABASE_PASS || ""
    }
  });
}