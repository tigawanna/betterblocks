import Link from "next/link";
import  MiniSettingsModal  from "./mini-settings/NoSSRMiniSettings";
import { Castle } from "lucide-react";


interface ToolbarProps {}

export function Toolbar({}: ToolbarProps) {
  const links = [
    {name: "home", url: "/"},
    {name: "listings", url: "/listings"},
    {name: "about", url: "/about"},
    {name: "showcase", url: "/showcase"},
  ]
  return (
    <header
      className="w-full h-12 z-50 flex flex-col  justify-between items-center  
      sticky top-0 gap-1 ">
      <div className="w-full h-full flex justify-between items-center bg-primary  px-4">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:text-secondary ">
          <Castle className="text-accent fill-secondary " /> Better Blocks
        </Link>

        <div className="flex gap-3 divider-vertical ">
          {links.map((link) => (
            <Link key={link.name} href={link.url} className="hover:text-secondary">
              {link.name}
            </Link>
          ))}
        </div>

        <MiniSettingsModal />
      </div>
    </header>
  );
}
