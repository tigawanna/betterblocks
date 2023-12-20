"use client"

import { useSearchWithQuery } from "@/utils/hooks/search";
import { Search, Loader, X } from "lucide-react";
import { Input } from "../shadcn/ui/input";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ListingsLookupProps {

}

export function ListingsLookup({}:ListingsLookupProps){
const { isDebouncing,debouncedValue, keyword, setKeyword,pathname,searchParams} = useSearchWithQuery();

return (
    <div className="w-full  flex flex-col items-center justify-center gap-2 ">
  <div className="w-full  flex items-center justify-center gap-2 ">
    <Search height="16" width="16" className="" />

    <div className="w-[70%] flex relative items-center">
      <Input
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      />
      {isDebouncing && <Loader className="animate-spin absolute right-[5%]" />}
      {!isDebouncing && keyword?.length > 0 && (
        <X className="absolute right-[2%]" onClick={() => setKeyword("")} />
      )}
    </div>
  </div>
    <div className="w-full  flex items-center justify-center gap-2 ">
        type
    </div>
<Link href={"/listings?"+searchParams}  className="hover:text-secondary btn btn-wide font-bold text-lg">
Search
</Link>
     </div>
);
}
