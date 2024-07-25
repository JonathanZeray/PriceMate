import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="w-full text-2xl font-extrabold my-6 flex justify-between items-center px-16">
      <h1 className="p-4">
        <Link href="/">PriceMate</Link>
      </h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
