import { getFileURL } from "@/lib/pb/client";
import { MashambaListingsResponse, MashambaOwnerResponse } from "@/lib/pb/db-types";
import Link from "next/link";
import { TypedRecord, expand, like, or } from "typed-pocketbase";
import { tryCatchWrapper } from "@/utils/helpers/async";
import { ListingsPagination } from "./controls/ListingsPagination";
import { ListingsSearchbar } from "./controls/ListingsSearchbar";
import { server_component_pb } from "@/lib/pb/utils/server_component_pb";
import NextImage from "next/image";
import { Card } from "../shadcn/ui/card";

interface ListingsProps {
  show_controls?: boolean;
  searchParams: {
    q?: string;
    p?: number;
  };
}

export async function Listings({
  show_controls = true,
  searchParams: { p = 1, q = "" },
}: ListingsProps) {
  const { pb } = await server_component_pb();
  const res = await tryCatchWrapper(
    pb.collection("mashamba_listings").getList(p, 12, {
      filter: or(like("location", q), like("description", q), like("owner.name", q)),
      expand: expand({ owner: true }),
    })
  );
  const listings = show_controls ? res.data?.items : res.data?.items.slice(0, 3);
  const page_details = res.data;
  return (
    <div className="w-full h-full flex flex-col items-center ">
      {show_controls && <ListingsSearchbar />}
      <div className="w-[90%] p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3 lg:gap-4">
        {listings &&
          listings.map((land) => {
            return <ListingsCard key={land.id} listing={land} />;
          })}
      </div>
      {page_details && show_controls && <ListingsPagination page_details={page_details} />}
      {!show_controls && (
        <Link href="/listings" className="py-5 text-lg hover:underline hover:text-sky-500">
          See more listings
        </Link>
      )}
    </div>
  );
}

interface ListingsCardProps {
  listing: TypedRecord<
    MashambaListingsResponse,
    {
      owner: TypedRecord<MashambaOwnerResponse>;
    }
  >;
}

export function ListingsCard({ listing }: ListingsCardProps) {
  //   const alt_img_url = getFileURL({
  //     collection_id_or_name: "mashamba_listings",
  //     file_name: (land.images[0] as string) + "?thumb=100x100",
  //     record_id: land.id,
  //   });
  const img_url = getFileURL({
    collection_id_or_name: "mashamba_listings",
    file_name: listing.images[0] as string,
    record_id: listing.id,
  });
  return (
    <Link
      href={`/listings/${listing.id}`}
      className=" w-full flex flex-col items-start rounded-2xl hover:brightness-75">
      <Card className="w-full h-[400px] flex flex-col justify-between ">
      <div className="h-[250px] w-full flex items-center justify-center relative">
          {listing.status === "sold" ? (
            <div
              className="w-full h-full absolute font-bold font-serif
        flex items-center justify-center  text-6xl  text-slate-50 bg-slate-500 bg-opacity-30">
              SOLD
            </div>
          ) : null}
          <div>
            <NextImage
              alt={listing?.location}
              className="h-[250px]"
              src={img_url}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="p-2 border-t-1 bg-base-200 h-full">
          <div className="flex flex-col gap-2 items-center w-full h-full">
            <div className="flex  gap-2 items-center justify-between w-full">
              <p className="text-3xl font-bold">{listing.location}</p>
              <p className="text-sm rounded-lg border-t">{listing.amenities?.size}</p>
              <p className=" text-lg">{listing.price.toLocaleString("en-US")} Ksh</p>
            </div>
            <div className="flex flex-col  items-start justify-between w-full gap-2">
              <span className="text-sm flex font-semibold">Owner: {listing.expand.owner.name}</span>
              <p className="text-sm line-clamp-1 font-serif pb-5 ">{listing.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
