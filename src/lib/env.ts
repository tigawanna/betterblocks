import { Schema } from "./pb/db-types";

export const PB_URL = process.env.PB_URL;
export const PB_AUTH_COLLECTION = process.env.PB_AUTH_COLLECTION as keyof Schema

