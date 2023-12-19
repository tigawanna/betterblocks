"use client";
import BreadCrumbs from "@/components/navigation/BreadCrumbs";
import { usePathname } from "next/navigation";

interface PathnameProps {}

export function Pathname({}: PathnameProps) {
  const pathname = usePathname();
    console.log({ pathname });
  return (
    <div className="w-full h-full flex items-center justify-center">
        <BreadCrumbs/>
        pathname == {pathname}</div>
  );
}
