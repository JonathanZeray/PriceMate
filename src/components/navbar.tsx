import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="w-full my-6 flex justify-between items-center px-4 sm:px-16">
      <h1 className="p-4">
        <Link
          href="/"
          className="border-b-[3px] border-green-800 sm:text-2xl font-extrabold"
        >
          PriceMate
        </Link>
        {/*         <Link href="/" className="">
          PM
        </Link> */}
      </h1>
      <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 items-center">
        <Link href="/create-new-ad" className="">
          <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-green-800 text-white font-normal sm:font-semibold text-sm">
            <Image
              src="/icons/plus-circle.svg"
              width={20}
              height={20}
              alt="circle icon"
            />
            Create new ad
          </div>
        </Link>
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
      </div>
    </nav>
  );
};
