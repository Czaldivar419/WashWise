import { useRouter } from "next/router";
import { useSession } from 'next-auth/react';

export default function Header({ goBackPath, profilePath }) {
  const router = useRouter();

  const goBack = () => {
    router.push(goBackPath);
  };

  const goToProfile = () => {
    if (session) {
      router.push(profilePath);
    }
  };

  const { data: session } = useSession();
  return (
    <div id="toppers" className='flex justify-between p-2'>
      <button onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-gray-100 w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
      </button>
      <button onClick={goToProfile}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-11 text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  );
}

