"use client";


import { Loader, Search, X } from "lucide-react";
import { useSearchWithQuery } from "@/utils/hooks/search";
import { TextField } from "@radix-ui/themes";
interface ListingsSearchbarProps {}

export function ListingsSearchbar({}: ListingsSearchbarProps) {
  const { isDebouncing, keyword, setKeyword } = useSearchWithQuery();
  return (
    <div className="w-full  flex items-center justify-center">
      <div className="w-[70%] ">
        <TextField.Root>
          <TextField.Slot>
            <Search height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Search the docs…"
            size="3"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <TextField.Slot pr="3">
            {isDebouncing && <Loader className="animate-spin" />}
            <X onClick={() => setKeyword("")} />
          </TextField.Slot>
        </TextField.Root>
      </div>
    </div>
  );
}
