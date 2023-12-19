import { Card } from "../shadcn/ui/card";


interface ListingsCardLoaderProps {
  no: number;
}

export function ListingsCardLoader({ no }: ListingsCardLoaderProps) {
  return (
    <div className="w-full flex items-center justify-center ">
      <div
        className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-3 lg:gap-4 
    justify-center ">
        {[...Array(no)].map((_, i) => {
          return (
            <Card className="w-full h-[400px] space-y-5 p-4">
              <div className="h-[250px] rounded-lg bg-gray-300 animate-pulse"></div>

              <div className="space-y-3">
                <div className="h-3 w-3/5 rounded-lg bg-gray-200 animate-pulse"></div>

                <div className="h-3 w-4/5 rounded-lg bg-gray-200 animate-pulse"></div>

                <div className="h-3 w-2/5 rounded-lg bg-gray-300 animate-pulse"></div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
