'use client'

import { SignIn, UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

 function Home() {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    router.push('/signin')
    return null;
  }

  return (<div><UserButton  /></div>)
}

export default Home;