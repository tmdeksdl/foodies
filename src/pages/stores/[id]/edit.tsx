import { useRouter } from 'next/router';

export default function StoreEditPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Store Edit List: {id}</div>;
}
