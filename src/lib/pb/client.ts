import PocketBase, { OAuth2AuthConfig } from "pocketbase";
import { GithubOauthResponse } from "./types";
import { TypedPocketBase } from "typed-pocketbase";
import { MashambaUserCreate, Schema } from "./db-types";
import { tryCatchWrapper } from "@/utils/helpers/async";
import { PB_URL } from "../env";
import { NextRequest } from "next/server";


export type PocketBaseClient = TypedPocketBase<Schema>;



export async function initPocketBaseFromRequest(request: NextRequest) {
  const pb = new PocketBase(PB_URL) as PocketBaseClient;
  // load the store data from the request cookie string
  pb.authStore.loadFromCookie(request?.cookies.get("pb_auth")?.value || "");
  // send back the default 'pb_auth' cookie to the client with the latest store state
  pb.authStore.onChange(() => {
    request.cookies.set("pb_auth", pb.authStore.exportToCookie());
  });

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    pb.authStore.isValid &&
      (await pb.collection("mashamba_user").authRefresh());
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear();
  }

  return pb;
}

export async function createUser(
  pb: PocketBaseClient,
  data: MashambaUserCreate,
) {
  const res = await tryCatchWrapper(
    pb.collection("mashamba_user").create(data),
  );
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  return res;
}

export async function verifyUserEmail(pb: PocketBaseClient, email: string) {
  return await tryCatchWrapper(
    pb.collection("mashamba_user").requestVerification(email),
  );
}

export async function emailPasswordLogin(
  pb: PocketBaseClient,
  identity: string,
  password: string,
) {
  const user = await tryCatchWrapper(
    pb.collection("mashamba_user").authWithPassword(identity, password),
  );
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
  return user;
}

// export async function oauthLogin(options:OAuth2AuthConfig) {
//     return await tryCatchWrapper(pb.collection('pocketbook_user').authWithOAuth2(options))
// }

export async function listOAuthMethods(pb: PocketBaseClient) {
  return await tryCatchWrapper(
    pb.collection("mashamba_user").listAuthMethods(),
  );
}

export async function triggerOuathLogin(
  pb: PocketBaseClient,
  options: OAuth2AuthConfig,
) {
  return await tryCatchWrapper<GithubOauthResponse>(
    pb.collection("mashamba_user").authWithOAuth2(options) as any,
  );
}

export async function oneClickOauthLogin(
  pb: PocketBaseClient,
  provider: "github" | "google",
) {
  try {
    // const authData = await pb.collection('mashamba_user').authWithOAuth2({ provider});
    const authData = await pb
      .collection("mashamba_user")
      .authWithOAuth2({ provider });
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
    return authData.record;
  } catch (error) {
    throw error;
  }
}

type CollectionName = keyof Schema;

export function getFileURL({
  collection_id_or_name,
  file_name,
  record_id,
}: {
  collection_id_or_name?: CollectionName;
  record_id?: string;
  file_name?: string;
}) {
  if (!collection_id_or_name || !file_name || !record_id) {
    return "";
  }
  // http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME?thumb=100x300
  return `${PB_URL}/api/files/${collection_id_or_name}/${record_id}/${file_name}`;
}

