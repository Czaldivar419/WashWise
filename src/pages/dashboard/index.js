import Navbar from "@/components/nav";
import PastOrders from "@/components/orders/pastOrders";
import ActiveOrders from "@/components/orders/activeOrders";
import { useSession } from 'next-auth/react';


export default function Dashboard() {
    const { data: session } = useSession();

    if (session) {
        console.log('user name:', session.user.name)
    }
    return (
        <div className="bg-blue-300 min-h-screen min-w-screen">
            <div className="text-center text-white text-5xl p-4">
                Your Orders
            </div>
            <ActiveOrders />
            <PastOrders />
            <Navbar />
        </div>
    )
}
