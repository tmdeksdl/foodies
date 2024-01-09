/* global kakao */
import Script from 'next/script';
import { Dispatch, SetStateAction } from 'react';
import * as stores from '@/data/store_data.json';
declare global {
  interface Window {
    kakao: any;
  }
}

// 강남역
const DEFAULT_LAT = 37.498;
const DEFAULT_LON = 127.0278;

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

export default function Map({ setMap }: MapProps) {
  const loadKakaoMap = () => {
    // kakao 지도 로드
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LON),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 식당 데이터 마커 띄우기
      setMap(map);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      ></Script>
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
