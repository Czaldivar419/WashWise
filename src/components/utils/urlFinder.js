import { useRouter } from 'next/router';

export function useURL() {
  const router = useRouter();

  return {
    query: router.query.id,
  };
}