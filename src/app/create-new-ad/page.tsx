import { Form } from "@/components/form";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function CreateNewAd() {
  return (
    <>
      <SignedOut>
        <div className="flex h-[40vh] md:h-[80vh] justify-center items-center">
          <h3 className="text-bold text-lg md:text-3xl">
            Please{" "}
            <span className="border-b-2 border-black font-bold">
              <SignInButton />
            </span>{" "}
            to create a new ad!
          </h3>
        </div>
      </SignedOut>
      <SignedIn>
        <Form userId={auth().userId!} />
      </SignedIn>
    </>
  );
}
