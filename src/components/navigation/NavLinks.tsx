import Link from "next/link";

interface NavLinksProps {

}

export function NavLinks({}:NavLinksProps){
return (
 <nav className='w-full h-full flex items-center justify-center'>
    <Link href='/' className="text-3xl">Blocks</Link>
    <div className="w-full flex ">
    <Link href='/'>Home</Link>
    <Link href='/'>Listings</Link>

    </div>
    
 </nav>
);
}
