import { useEffect,useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


interface UseSearchWithQuery {
  queries: Record<string, string>;
}
export function useUpdateSearchParams({ queries }: UseSearchWithQuery) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [_, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    Object.entries(queries).forEach(([k, v]) => {
      if (v && v.length > 0) {
        params.set(k, v);
      } else {
        params.delete(k);
      }
    });

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, [queries]);
  return { pathname, searchParams };
}
