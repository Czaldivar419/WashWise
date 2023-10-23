import Dash from "@/components/dashboard"
import Navbar from "@/components/nav";
import { useSession } from 'next-auth/react';


export default function Dashboard() {
    const { data: session } = useSession();

    if (session) {
        console.log('user name:', session.user.name)
    }
    return (
        <div className="bg-blue-300 h-full w-full">
            <Dash />
            <Navbar />
        </div>
    )
}