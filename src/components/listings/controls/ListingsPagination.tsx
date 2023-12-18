"use client"

import ResponsivePagination from "react-responsive-pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListResult } from "pocketbase";

interface ListingsPaginationProps {
   page_details:ListResult<any>
}

export function ListingsPagination({page_details}:ListingsPaginationProps){
const pathname = usePathname();
const searchParams = useSearchParams();
const { replace } = useRouter();
return (
  <div className="w-full  flex items-center justify-center">
 <ResponsivePagination current={page_details.page} 
    total={page_details.totalPages}
    onPageChange={(e)=>{
       const params = new URLSearchParams(searchParams);
       params.set("p", e.toString());
       replace(`${pathname}?${params.toString()}`);
    }} />
  </div>
);
}
