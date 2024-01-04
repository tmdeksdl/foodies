import { useRouter } from 'next/router';

export default function StoreDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Store Detail List: {id}</div>;
}
