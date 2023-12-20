import Link from "next/link";
import  MiniSettingsModal  from "./mini-settings/NoSSRMiniSettings";
import { Castle, Menu } from "lucide-react";
import { siteConfig } from "@/utils/site";


interface ToolbarProps {}

export function Toolbar({}: ToolbarProps) {
  const links = siteConfig.navItems
  return (
    <header
      className="w-full h-12 z-50 flex flex-col  justify-between items-center  
      sticky top-0 gap-1 ">
      <div className="hidden w-full h-full md:flex justify-between items-center bg-base-100  px-4">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:text-secondary min-w-fit ">
          <Castle className="text-accent fill-secondary " /> Better Blocks
        </Link>

        <div className="flex gap-1 divide-x h-full w-full justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-secondary hover:bg-secondary/40 px-3  text-md font-semibold ">
              {link.label}
            </Link>
          ))}
        </div>
        {/* 
        <MiniSettingsModal /> */}
      </div>
      
      <div className="w-full h-full flex justify-between items-center md:hidden bg-base-100  px-4">
        
        <Menu className="w-12 h-12"/>
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:text-secondary min-w-fit ">
          <Castle className="text-accent fill-secondary " /> Better Blocks
        </Link>

        <div className="flex gap-3 divide-x h-full w-full justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-secondary hover:bg-base-200 text-md font-semibold">
              {link.label}
            </Link>
          ))}
        </div>
        {/* 
        <MiniSettingsModal /> */}
      </div>
    </header>
  );
}
