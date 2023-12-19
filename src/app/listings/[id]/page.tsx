
import { GoodImageCarousel } from "@/components/shared/GoodCaroussel";
import { getFileURL } from "@/lib/pb/client";
import { tryCatchWrapper } from "@/utils/helpers/async";
import { isString } from "@/utils/helpers/string";
import { Mail, Phone } from "lucide-react";
import {  expand } from "typed-pocketbase";
import ReactLeafletMapCard from "@/components/location/ReactLeafletMapCard"
import { FaWhatsapp } from "react-icons/fa";
import { server_component_pb } from "@/lib/pb/utils/server_component_pb";

export interface PageProps {
  params: { id: string };
  searchParams: {
    q?: string;
    p?: number;
  };
}
export default async function OneListingPage({ params: { id } }: PageProps) {
  const { pb } = await server_component_pb();
  const res = await tryCatchWrapper(
    pb.collection("mashamba_listings").getOne(id, {
      expand: expand({ owner: true }),
    })
  );
  const listing = res.data;

  const image_urls = listing?.images.map((image) => {
    return getFileURL({
      collection_id_or_name: "mashamba_listings",
      file_name: image as string,
      record_id: listing.id,
    });
  });

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl">{id}</h2>
      <div className="w-full h-full flex flex-col items-center  gap-2">
        <div
          className="w-full  flex flex-col lg:flex-row  items-center lg:items-start justify-between
         rounded-2xl pl-10 px-5 pt-3">
          <div className="lg:w-[50%]  ">
            <GoodImageCarousel
              imgs={image_urls as string[]}
              height={400}
              width={600}
              props={{
                className: "h-[500px]",
                src: image_urls?.[0] as string,
                alt: listing?.location,
              }}
            />
          </div>
          <div className="font-serif p-5 w-[90%] lg:w-[40%] flex flex-col gap-2">
            <div className="flex  gap-2 items-center justify-between w-full">
              <p className="text-3xl font-bold">{listing?.location}</p>
              <p className="text-sm rounded-lg border-t">{listing?.amenities?.size}</p>
              <p className=" text-2xl">{listing?.price.toLocaleString("en-US")} Ksh</p>
            </div>

            {/* <p className={hideDetails ? "text-sm line-clamp-5 mt-4" : "text-sm mt-4"}>
              {listing?.description}
            </p>
            <button onClick={() => setHideDetails(!hideDetails)} className=" p-1">
              <TheIcon
                Icon={hideDetails ? GrDown : GrUp}
                iconAction={() => {
                  setHideDetails(!hideDetails);
                }}
              />
            </button> */}

            <div className="border-t pt-3">
              <span className="text-sm font-semibold">Owner: {listing?.expand.owner.name}</span>
              <div className="flex gap-1 mt-1">
                <Mail className="w-4 h-4" /> {listing?.expand.owner.email}{" "}
              </div>
              {isString(listing?.expand.owner.phone) && (
                <div className="flex gap-1 mt-1">
                  <Phone className="w-4 h-4" /> {listing?.expand.owner.phone}{" "}
                </div>
              )}
              {isString(listing?.expand.owner.whatsapp) && (
                <div className="flex gap-1 mt-1">
                  <FaWhatsapp className="w-4 h-4" />
                  {listing?.expand.owner.whatsapp}{" "}
                </div>
              )}

              <p className="">{listing?.description}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row  items-center justify-center">
          <ReactLeafletMapCard
            display_only={true}
            coords={{ lat: listing?.longitude, lng: listing?.longitude }}
          />
          {/* <div className="w-[90%] md:w-[70%] p-5 ">
            <ClientSuspense fallback="loading">
              <ReactLeafletMapCard
                display_only={true}
                coords={{ lat: listing.longitude, lng: listing.longitude }}
              />
            </ClientSuspense>
          </div> */}
        </div>
      </div>
    </div>
  );
}