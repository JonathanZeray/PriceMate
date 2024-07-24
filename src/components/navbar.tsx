import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='w-full text-2xl font-extrabold   flex justify-around items-center'>
      <h1 className='p-4'>
        <Link href='/'>PriceMate</Link>
      </h1>
      <h1 className='p-4 border-2 p-2 rounded-lg bg-green-800 text-white'>
        <Link href='/create-new-ad'>Create new ad</Link>
      </h1>
    </nav>
  );
};
