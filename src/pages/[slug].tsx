import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  console.log('asdfa', router);
  console.log('asdfaasfd', router.query);
  return (
    <div>
      <h1>Router: {router.query.slug}</h1>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: '/[slug]', query: { slug: 'push' } });
          }}
        >
          PUSH
        </button>
        <button
          type="button"
          onClick={() => {
            router.replace({ pathname: '/[slug]', query: { slug: 'push' } });
          }}
        >
          REPLACE
        </button>
      </div>
    </div>
  );
}
