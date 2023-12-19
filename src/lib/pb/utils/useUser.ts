import { PocketBaseClient, getFileURL } from "@/lib/pb/client";
import { UtilityStaffResponse } from "@/lib/pb/db-types";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { PB_URL } from "@/lib/env";
import PocketBase from "pocketbase";
export function useUser() {
  const pb = new PocketBase(PB_URL) as PocketBaseClient;
  const qc = useQueryClient();

  const clearAuthStore = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          pb.authStore.clear();
          document.cookie = pb.authStore.exportToCookie({
            httpOnly: false,
          });
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 4000);
    });
  };

  const mutation = useMutation({
    mutationFn: async () => {
      return await clearAuthStore();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["user"] });
      window?.location && window?.location.reload();
    },
  });

  const user = pb.authStore.model as UtilityStaffResponse;

  const user_avatar = user?.avatar
    ? getFileURL({
        collection_id_or_name: "mashamba_user",
        file_name: user.avatar,
        record_id: user.id,
      })
    : "";

  return {
    user,
    pb,
    user_mutation: mutation,
    loggout: mutation.mutate,
    user_avatar,
  };
}
