"use client";

import { useSearchWithQuery } from "@/utils/hooks/search";
import { Search, Loader, X } from "lucide-react";
import { Input } from "../shadcn/ui/input";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ListingTypeselect } from "./controls/ListingTypeselect";
import { useDebouncedValue } from "@/utils/hooks/debounce";
import { useUpdateSearchParams } from "@/utils/hooks/useUpdateSearchParams";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

interface ListingsLookupProps {}

export function ListingsLookup({}: ListingsLookupProps) {

  const searchParams = useSearchParams();
    const [type, setType] = useState("");
    const [keyword, setKeyword] = useState(searchParams?.get("q")??"");
    const { debouncedValue, isDebouncing } = useDebouncedValue(keyword, 2000);
    useUpdateSearchParams({ queries: { type,q:debouncedValue } });


  return (
    <div className="w-full  flex flex-col items-center justify-center gap-2 ">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 ">
        <div className="w-full  flex items-center  gap-3 ">
          <Search height="16" width="16" className="" />
          <div className="w-full flex relative items-center">
            <Input
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full drop-shadow-md"
            />
            {isDebouncing && <Loader className="animate-spin absolute right-[5%]" />}
            {!isDebouncing && keyword?.length > 0 && (
              <X className="absolute right-[2%]" onClick={() => setKeyword("")} />
            )}
          </div>
        </div>
        <div className="  flex items-center  gap-2 min-w-24">
          <Select onValueChange={setType} value={type}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="listings type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Listings Type</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="house">House</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Link
        href={"/listings?" + searchParams}
        className="hover:text-secondary btn btn-wide font-bold text-lg">
        Search
      </Link>
    </div>
  );
}
