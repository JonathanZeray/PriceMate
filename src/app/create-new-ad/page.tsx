import { Form } from '@/components/form';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default function CreateNewAd() {
  return (
    <>
      <SignedOut>
        <h1>Please sign in to create a new ad!</h1>
      </SignedOut>
      <SignedIn>
        <Form userId={auth().userId!} />
      </SignedIn>
    </>
  );
}
