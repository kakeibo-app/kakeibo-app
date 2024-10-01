import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Resource } from "sst";

const sql = neon(Resource.NeonDatabaseUrl.value);
export const db = drizzle(sql);
