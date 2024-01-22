import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';
import { useState } from 'react';

import { StoreType } from '@/interface';
import axios from 'axios';

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
  const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

  return {
    props: { stores: stores.data },
    revalidate: 60 * 60,
  };
}
