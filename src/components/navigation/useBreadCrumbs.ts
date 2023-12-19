import { usePathname} from "next/navigation"

export function useNextBreadCrumbs() {
const pathname = usePathname();
  const route_history = pathname
    .split("/")
    .filter((x) => x && x.length > 0);
  // console.log("route history ==== ",route_history)
  const breadcrumb_routes = route_history.reduce(
    (acc: { name: string; path: string }[], route) => {
      const prev_path = acc[acc.length - 1]?.path ?? "";
      acc.push({ name: route, path: prev_path + "/" + route });
      return acc;
    },
    [],
  );
  // console.log("breadcrumbs routes  === ",breadcrumb_routes);
  return { breadcrumb_routes };
}
