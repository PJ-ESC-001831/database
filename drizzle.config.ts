import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  schema: './schema/*',
  out: './drizzle',
  dbCredentials: {
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    database: process.env.POSTGRES_DB as string,

    // TODO 2024-08-18: Change this to true when using SSL
    ssl: false,
    // ssl: {
    //   rejectUnauthorized: false,
    //   key: fs.readFileSync('server.key').toString(),
    //   cert: fs.readFileSync('server.crt').toString(),
    // },
  },
});
