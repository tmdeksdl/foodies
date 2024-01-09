import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';
import { useState } from 'react';

import * as stores from '@/data/store_data.json';
export default function Home() {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const storeData = stores['DATA'];

  return (
    <>
      <Map setMap={setMap}></Map>
      <Markers
        setCurrentStore={setCurrentStore}
        map={map}
        storeData={storeData}
      ></Markers>
      <StoreBox store={currentStore} setStore={setCurrentStore}></StoreBox>
    </>
  );
}
