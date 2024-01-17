import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';
import { useState } from 'react';

import * as stores from '@/data/store_data.json';
import { StoreType } from '@/interface';
export default function Home({ stores }: { stores: StoreType[] }) {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);

  return (
    <>
      <Map setMap={setMap}></Map>
      <Markers
        setCurrentStore={setCurrentStore}
        map={map}
        stores={stores}
      ></Markers>
      <StoreBox store={currentStore} setStore={setCurrentStore}></StoreBox>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
  const stores = await res.json();
  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
