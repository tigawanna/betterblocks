
import Link from "next/link";
import { useNextBreadCrumbs } from "./useBreadCrumbs";

interface BreadCrumbsProps {}

export default function BreadCrumbs({}: BreadCrumbsProps) {
  const { breadcrumb_routes } = useNextBreadCrumbs();
  return (
    <div className="flex z-50 px-2 py- ">
      {breadcrumb_routes.map(({ name, path }, idx) => {
        return (
          <Link
            key={name}
            href={path}
            className="text-sm text-white hover:text-[#fac091]"
          >
            {name} {idx < breadcrumb_routes.length - 1 && ">"}
          </Link>
        );
      })}
    </div>
  );
}
