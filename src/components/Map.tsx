/* global kakao */
import Script from 'next/script';
import * as stores from '@/data/store_data.json';
declare global {
  interface Window {
    kakao: any;
  }
}

// 강남역
const DEFAULT_LAT = 37.498;
const DEFAULT_LON = 127.0278;

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
    stores?.['DATA']?.map((store) => {
      var imageSrc = store?.bizcnd_code_nm
          ? `/images/markers/${store?.bizcnd_code_nm}.png`
          : `/images/markers/default.png`,
        imageSize = new window.kakao.maps.Size(35, 35),
        imageOption = { offset: new window.kakao.maps.Point(27, 69) }; //

      var markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      // 마커가 표시될 위치
      var markerPosition = new window.kakao.maps.LatLng(
        store?.y_dnts,
        store?.x_cnts
      );

      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    });
  });
};

export default function Map() {
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
