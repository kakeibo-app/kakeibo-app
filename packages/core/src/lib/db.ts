import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Resource } from "sst";

export const db = drizzle(
  new Pool({
    connectionString: Resource.NeonDatabaseUrl.value,
  })
);
