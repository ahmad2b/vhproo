import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-800">
      <div>
        <Link href="#" className="flex items-center" prefetch={false}>
          <LogInIcon className="w-6 h-6 text-black dark:text-white" />
          <span className="ml-2 text-lg font-semibold text-black dark:text-white">Company</span>
        </Link>
      </div>
      <nav className="lg:flex hidden space-x-4">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Product
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
          Contact
        </Link>
      </nav>
      <div className="lg:flex hidden items-center space-x-4">
        <Button variant="outline" className="text-sm">
          Login
        </Button>
        <Button className="text-sm">Register</Button>
      </div>
      <div className="lg:hidden flex items-center">
        <button className="text-black dark:text-white">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

function LogInIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}