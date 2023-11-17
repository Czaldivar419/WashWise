import { useSession, signOut } from "next-auth/react";

export default function SignOutButton() {
  const { data: session } = useSession();

  if (!session) {
    // If there's no active session, no need to show the sign-out button
    return null;
  }

  return (
    <button
      onClick={() => signOut()}
      className="lg rounded bg-white px-3"
    >
      Sign out
    </button>
  );
}
