import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Confirm() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        router.push("/dashboard");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="min-h-screen min-w-screen bg-blue-300">
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-white text-center">
            Shop created successfully!
        </h1>
      </div>
    </div>
  );
}