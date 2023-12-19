"use client"

import Image from "next/image";
import React, { useEffect } from "react";
interface CarousselProps {
  images: string[];
}

export function HerosectionCaroussel({images}: CarousselProps) {
  const [curr_image, setCurrImage] = React.useState(0);
  useEffect(() => {
const interval = setInterval(() => {
  setCurrImage((prev)=>{
    if(prev === images.length-1){
      return 0
    }
    return prev + 1
  });
}, 20000);
return () => {
  clearInterval(interval);
}
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center 
    ">
      <Image
        width={1000}
        height={1000}
        src={images[curr_image]}
        alt="Mashamba hero Image"
        className="w-full h-full "
      />
    </div>
  );
}
