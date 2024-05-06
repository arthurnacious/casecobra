import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    port: process.env.DB_PORT as unknown as number,
    database: process.env.DB_NAME as string,
    password: process.env.DB_PASS,
  },
} satisfies Config;
