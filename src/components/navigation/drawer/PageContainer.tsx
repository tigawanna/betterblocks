import { siteConfig } from "@/utils/site";
import { Castle } from "lucide-react";
import Link from "next/link";

interface pageContainerProps {
children: React.ReactNode
}

export function PageContainer({children}:pageContainerProps){
      const links = siteConfig.navItems;
return (
  <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full navbar  min-h-10 h-12 bg-base-300  sticky top-0 z-50">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-2 hover:text-secondary min-w-fit ">
          <Castle className="text-accent fill-secondary " /> Better Blocks
        </Link>

        <div className="hidden menu lg:flex gap-1 divide-x h-full w-full justify-center items-center">
          <ul className="menu menu-horizontal">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-secondary hover:bg-secondary/40 px-3  text-base font-semibold ">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Page content here */}
      {children}
    </div>
    <div className="drawer-side z-50">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 z-50 divide-y mt-10 ">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-secondary bg-base-100 hover:bg-secondary/40 px-3  text-md font-semibold ">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}
