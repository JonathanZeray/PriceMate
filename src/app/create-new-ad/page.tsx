import { Form } from '@/components/form';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function CreateNewAd() {
  return (
    <>
      <SignedOut>
        <h1>Please sign in to create a new ad!</h1>
      </SignedOut>
      <SignedIn>
        <Form />
      </SignedIn>
    </>
  );
}
