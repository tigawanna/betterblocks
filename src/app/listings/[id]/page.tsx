import { GoodImageCarousel } from "@/components/shared/GoodCaroussel";
import { getFileURL } from "@/lib/pb/client";
import { tryCatchWrapper } from "@/utils/helpers/async";
import { isValidNumber, isValidString } from "@/utils/helpers/string";
import { Mail, Phone } from "lucide-react";
import { expand } from "typed-pocketbase";
import ReactLeafletMapCard from "@/components/location/ReactLeafletMapCard";
import { FaWhatsapp } from "react-icons/fa";
import { server_component_pb } from "@/lib/pb/utils/server_component_pb";
import { Metadata } from "next";
import { Listings } from "@/components/listings/Listings";

export interface PageProps {
  params: { id: string };
  searchParams: {
    q?: string;
    p?: number;
  };
}

export async function generateMetadata({
  searchParams,
  params: { id },
}: PageProps): Promise<Metadata> {
  const { pb } = await server_component_pb();
  const res = await tryCatchWrapper(
    pb.collection("mashamba_listings").getOne(id, {
      expand: expand({ owner: true }),
    })
  );
  const listing = res.data;
  return {
    title: `${listing?.location}`,
    description: `${listing?.description}`,
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

  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className="w-full h-full flex flex-col items-center  gap-5">
        <div
          className="w-full  flex flex-col lg:flex-row   justify-center gap-2
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
          <div className="font-serif p-5 w-full lg:w-[40%] flex flex-col gap-2 bg-base-200 rounded-lg *:bg-base-300 *:p-2">
            <div className="flex  gap-2 items-center justify-between w-full ">
              <p className="text-3xl font-bold">{listing?.location}</p>
              <p className="text-sm rounded-lg border-t">{listing?.amenities?.size}</p>
              <p className=" text-2xl">{listing?.price.toLocaleString("en-US")} Ksh</p>
            </div>

            <div className="w-full border-y pt-3 flex flex-wrap items-center ">
              <span className="text-sm font-semibold border-x-2 border-accent px-2">
                Owner: {listing?.expand.owner.name}
              </span>
              <div className="flex justify-center gap-0.5 items-center border-x-2 border-accent px-2">
                <Mail className="w-4 h-4" /> {listing?.expand.owner.email}{" "}
              </div>
              {isValidString(listing?.expand.owner.phone) && (
                <div className="flex justify-center gap-0.5 items-center border-x-2 border-accent px-2">
                  <Phone className="w-4 h-4" /> {listing?.expand.owner.phone}{" "}
                </div>
              )}
              {isValidString(listing?.expand.owner.whatsapp) && (
                <div className="flex gap-0.5 justify-center items-center border-x-2 border-accent px-2">
                  <FaWhatsapp className="w-4 h-4" />
                  {listing?.expand.owner.whatsapp}{" "}
                </div>
              )}
            </div>
            {listing?.type === "house" && (
              <div className="w-full border-y pt-3 *:min-w-fit flex flex-wrap items-center ">
                {isValidNumber(listing?.amenities?.bathrooms) && (
                  <div>Bathrooms: {listing?.amenities?.bathrooms}</div>
                )}
                {isValidNumber(listing?.amenities?.bedrooms) && (
                  <div>Bedrooms: {listing?.amenities?.bedrooms}</div>
                )}
                {isValidNumber(listing?.amenities?.fireplace) && (
                  <div>Fireplaces: {listing?.amenities?.fireplace}</div>
                )}
                {isValidNumber(listing?.amenities?.garages) && (
                  <div>Garages: {listing?.amenities?.garages}</div>
                )}
              </div>
            )}

            <div className="w-full border-y pt-3 *:min-w-fit flex flex-wrap items-center ">
              {listing?.amenities?.gated_community && (
                <div>Gated Community: {listing?.amenities?.gated_community}</div>
              )}
              {listing?.amenities?.street_lights && (
                <div>Street lights: {listing?.amenities?.street_lights}</div>
              )}
              {listing?.amenities?.gated_community && (
                <div>Gated Community: {listing?.amenities?.gated_community}</div>
              )}
            </div>
            <div className="w-full border-y pt-3 *:min-w-fit flex flex-wrap items-center ">
              {isValidString(listing?.amenities?.closest_hospital) && (
                <div>Closest hospital: {listing?.amenities?.closest_hospital}</div>
              )}
              {isValidString(listing?.amenities?.closest_school) && (
                <div>Closest school: {listing?.amenities?.closest_school}</div>
              )}
              {isValidString(listing?.amenities?.closest_police_station) && (
                <div>Closest police station: {listing?.amenities?.closest_police_station}</div>
              )}
              {isValidString(listing?.amenities?.closest_town) && (
                <div>Closest town: {listing?.amenities?.closest_town}</div>
              )}
            </div>
            <div className="pt-3 flex">
              <p className="">{listing?.description}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row  items-center justify-center">
          <ReactLeafletMapCard
            display_only={true}
            coords={{ lat: listing?.longitude, lng: listing?.longitude }}
          />
        </div>
      </div>
    </div>
  );
}
