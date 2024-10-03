import { db } from "../lib/db";
import { user } from "./user.sql";

export module User {
  export const list = async () => {
    return await db.select().from(user);
  };
}
