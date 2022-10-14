import { ConfigService } from "@nestjs/config";
export default () => {
    const config = new ConfigService();
        return ({
         port: parseInt(config.get("PORT")) || 3000,
        database: {
        host: process.env.DATABASE_HOST || "mongodb://localhost",
        port: parseInt(process.env.DATABASE_PORT) || 27017,
        name: process.env.DATABASE_NAME || "dbExample",
        }
  });
}