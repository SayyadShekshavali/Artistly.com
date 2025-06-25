import Image from "next/image";
import Link from "next/link";
import Logo from "./artistly.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 flex flex-wrap items-center justify-between p-4 rounded-2xl shadow-2xl mx-2 lg:h-17 border-l-3  border-black  border-r-3  border-black mt-3  ">
      <div className="flex items-center space-x-4">
        <Image className="h-12 w-12 rounded-xl" src={Logo} alt="Logo" />
      </div>
      <Link
        className="lg:text-xl font-semibold hover:border-b-3 hover:border-black rounded-md transition-all duration-200 lg:ml-170  pb-1"
        href="/"
      >
        Home
      </Link>
      <Link
        className="lg:text-xl font-semibold hover:border-b-3 hover:border-black rounded-md transition-all duration-200  pb-1"
        href="/Artist"
      >
        Artists
      </Link>
      <Link
        className="lg:text-xl font-semibold hover:border-b-3 hover:border-blackrounded rounded-md  transition-all duration-200 pb-1"
        href="/Addarts"
      >
        Add Artist
      </Link>
      <Link
        className="lg:text-xl font-semibold hover:border-b-3 hover:border-black rounded-md transition-all duration-200 pb-1"
        href="/Admin"
      >
        Admin
      </Link>
    </nav>
  );
}
