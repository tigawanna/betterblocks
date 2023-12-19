import { Pathname } from "./Pathname";

interface pageProps {

}

export default function page({}:pageProps){
return (
  <div className="w-full h-screen flex items-center justify-center bg-base-200">
    <div className=" shadow-ng shadow-accent p-5">text</div>
    <Pathname/>
  </div>
);
}


