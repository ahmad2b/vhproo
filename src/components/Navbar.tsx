import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 px-4 lg:px-24 bg-white dark:bg-gray-800">
      <div>
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <nav className="lg:flex hidden space-x-8">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Reviews
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="lg:flex hidden items-center space-x-4">
        <Button variant="link" className="text-sm">
          French
        </Button>
        <Button className="text-sm">Contact Us</Button>
      </div>
      <div className="lg:hidden flex items-center">
        <button className="text-black dark:text-white"></button>
      </div>
    </div>
  );
}
