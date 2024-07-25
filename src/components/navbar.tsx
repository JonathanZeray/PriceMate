import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="w-full text-2xl font-extrabold my-6 flex justify-between items-center px-4 md:px-16">
      <h1 className="p-4">
        <Link href="/" className="border-b-[3px] border-green-800">
          PriceMate
        </Link>
      </h1>
      <SignedOut>
        <SignInButton>
          <span className="border-2 border-black px-4 rounded-lg text-base cursor-pointer font-normal">
            Sign in
          </span>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
