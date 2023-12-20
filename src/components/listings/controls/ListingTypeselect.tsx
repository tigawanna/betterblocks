"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useUpdateSearchParams } from "@/utils/hooks/useUpdateSearchParams";
import { useState } from "react";
interface ListingTypeselectProps {}

export function ListingTypeselect({}: ListingTypeselectProps) {
const [type,setType]=useState("")
const {} = useUpdateSearchParams({queries:{type}});
  return (
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
  );
}
