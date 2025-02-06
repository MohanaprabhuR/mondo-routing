import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header fixed top-0 z-50 w-full transition-all ease-in-out bg-[rgba(0,0,0,0.9)] py-3">
      <nav className="mx-auto flex h-10 w-full items-center justify-between px-4 xl:max-w-[1280px]">
        <Link
          className="outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 relative flex shrink-0 items-center justify-center rounded ring-inset sm:h-12"
          href="/"
        >
          <Image
            alt="Universal FYC Home"
            width={182}
            height={18}
            src="https://mondo-dev.vercel.app/images/horizontal-logo.png"
          />
        </Link>
        <div className="w-6 h-6">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
