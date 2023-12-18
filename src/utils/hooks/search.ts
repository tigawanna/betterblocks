import { useEffect, useState, useTransition } from "react";
import { useDebouncedValue } from "./debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface UseSearchWithQuery{
search_query?:boolean
default_value?:string
}
export function useSearchWithQuery(opts:UseSearchWithQuery={
  search_query:true
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
 
  const [_, startTransition] = useTransition();
  
  const [keyword, setKeyword] = useState(searchParams?.get("q") ?? opts.default_value ?? "");
  const { debouncedValue, isDebouncing } = useDebouncedValue(keyword, 2000);
  // useEffect(() => {
  //   if (current) {
  //     setKeyword(url?.searchParams?.get("q") ?? "");
  //   }
  // },[])
  useEffect(() => {
    if (debouncedValue ) {
      startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("q", debouncedValue);
      replace(`${pathname}?${params.toString()}`);
      });
    }
    if ((!debouncedValue)||debouncedValue?.length===0 ) {
      startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.delete("q");
      replace(`${pathname}?${params.toString()}`);
      });
    }
  }, [debouncedValue]);
  return { debouncedValue, isDebouncing, keyword, setKeyword };
}
