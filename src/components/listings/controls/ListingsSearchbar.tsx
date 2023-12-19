"use client";


import { Loader, Search, X } from "lucide-react";
import { useSearchWithQuery } from "@/utils/hooks/search";
import { Input } from "@/components/shadcn/ui/input";

interface ListingsSearchbarProps { }

export function ListingsSearchbar({ }: ListingsSearchbarProps) {
  const { isDebouncing, keyword, setKeyword } = useSearchWithQuery();
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-[70%] flex relative">
        <Search height="16" width="16" className="absolute left-[2%]"/>
        <Input
          placeholder="Search the docs…"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {isDebouncing && <Loader className="animate-spin absolute right-[5%]" />}
        <X className="absolute right-[2%]" onClick={() => setKeyword("")} />

      </div>
    </div>
  );
}
