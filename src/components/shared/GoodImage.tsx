import { useEffect, useState } from "react";
import LandScape from "../../../assets/landscapp.svg";

interface GoodImageProps {
  height?: number | `${number}`;
  width?: number | `${number}`;
  placeholderSrc?: string;
  props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

export const GoodImage = ({
  height,
  width,
  placeholderSrc,
  ...props
}: GoodImageProps) => {
  const [imgSrc, setImgSrc] = useState(
    placeholderSrc || props.props.src || LandScape
  );
  // const [loading,setLoading] = useState(true)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const img = new Image();
    img.src = props.props.src as string;

    img.onload = () => {
      if (isMounted) {
        timeoutId = setTimeout(() => {
          setImgSrc(props.props.src as string);
          setLoading(false);
        }, 500);
      }
    };

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [props.props.src]);

  return (
    // <div className='h-[200px] overflow-hidden'>
    <img
      style={{ filter: isLoading ? "blur(20px)" : "none" }}
      {...{
        src: imgSrc,
        alt: props.props.alt,
        height,
        width,
        loading: "lazy",
        className:
          props.props.className ??
          "h-full w-full  aspect-video animate-in fade-in duration-500",
        ...props,
      }}
    />
    // </div>
  );
};
