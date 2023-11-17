import Navbar from '@/components/utils/nav';
import Bubbles from '@/components/utils/bubbles';
import PastOrders from '@/components/orders/pastOrders';
import ActiveOrders from '@/components/orders/activeOrders';
import SignOutButton from '@/components/landing/signout';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();

  useEffect(() => {
    const { push } = require('next/router');
    if (!session) {
      push('/');
    }
  }, [session]);

  if (!session) {
    return null; // Prevent rendering the rest of the component
  }

  console.log('user name:', session.user.name);

  return (
    <div>
      <Bubbles />
      <div className="text-center text-white text-5xl p-4">Your Orders</div>
      <ActiveOrders />
      <PastOrders />
      <SignOutButton />
      <Navbar />
    </div>
  );
}
