import { cookies, headers } from "next/headers";
import PocketBase from "pocketbase";
import { MashambaUserResponse } from "../db-types";
import { PB_URL } from "../../env";
import { PocketBaseClient } from "../client";


export async function server_component_pb() {
  const pb_cookie = await cookies().get("pb_auth")?.value;
  const pb = new PocketBase(PB_URL) as PocketBaseClient

  if (pb_cookie&&pb_cookie!=="") {
    const pb_model = JSON.parse(pb_cookie).model;
    pb.authStore.save(pb_model.token, pb_model);
  }

  return { pb, cookies, headers };
}

export async function getPBCookieUser() {
  try {
    const { cookies } = await server_component_pb();
    const user_string = cookies().get("pb_auth")?.value ?? "{}";
    const user = user_string!==""?JSON.parse(user_string).model as MashambaUserResponse:undefined
    return user;
  } catch (error) {
    throw error;
  }
}
