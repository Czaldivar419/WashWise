import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter(); // Initialize the router

  if (!session) {
    return (
      <div className="bg-blue-300 h-screen w-screen">
        <div className="text-center">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="lg rounded bg-white px-3"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // If the user is authenticated, automatically redirect to /dashboard
  if (session) {
    router.push("/dashboard");
  }

  return (
    <div className="bg-blue-300 min-h-screen min-w-screen">
    <div className="text-6xl text-white">Welcome to Washwise</div>
    </div>
  );
}