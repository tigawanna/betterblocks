import Link from "next/link";
import { ListingsLookup } from "../listings/ListingsLookup";
import { ListingsSearchbar } from "../listings/controls/ListingsSearchbar";
import { GoodImageCarousel } from "../shared/GoodCaroussel";

interface HeroSectionProps {}

export function HeroSection({}: HeroSectionProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      {/* <Image
      className="w-full h-full  "
      src="/assets/land-big.webp"
      alt="Mashamba Splash screen"
      width={500}
      height={500}
    /> */}
      {/* <Image

        width={1000}

        height={1000}
        src={"/assets/land-big.webp"}
        alt="Mashamba hero Image"
        className="w-screen h-screen"
      /> */}
      <GoodImageCarousel
        imgs={["/assets/classic.jpg", "/assets/house.jpg", "/assets/cabin.jpg"]}
        height={500}
        width={500}
        priority
        props={{}}
        autoScroll
        autoSrollLoop
      />
      {/* <HerosectionCaroussel
        images={["/assets/land-big.webp", "/assets/modern-1.jpg", "/assets/cabin.jpg"]}
      /> */}
      <div
        className=" z-3 absolute top-0 bottom-0  lg:left-[15%] lg:right-[15%] rounded-md
    flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-5">
        <div className="flex flex-col  gap-4 bg-opacity-50 bg-base-100 p-5 justify-center items-center">
          <div className="p-2 text-5xl lg:text-6xl font-bold text-wrap w-full text-base-content">
            Lets find your dream property
            </div>
            <div className="w-full">
            <ListingsLookup/>


            </div>
        </div>
      </div>
    </div>
  );
}
