import { useEffect,useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


interface UseSearchWithQuery {
  queries:{
    q?: string;
    t?: "" | "house" | "land";
    p?: number;

  },
  auto_repalce?: boolean,
}
export function useListingsFilter({ queries:{p,q,t},auto_repalce=false }: UseSearchWithQuery) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [_, startTransition] = useTransition();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if(p){
      params.set("p",`${p}`)
    }else{
      params.delete("p")
    }

    if(q&&q.length>0){
      params.set("q",q)
    }else{
      params.delete("q")
    }

    if (t && t.length > 0){
      params.set("t",t)
    }else{
      params.delete("t")
    }

    console.log({p,q,t})
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, [q,p,t]);

  return { pathname, searchParams };
}
