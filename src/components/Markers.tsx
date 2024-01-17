import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { StoreType } from '@/interface';
interface MarkerProps {
  map: any;
  stores: any[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({ map, stores, setCurrentStore }: MarkerProps) {
  const loadKakaoMarkers = useCallback(() => {
    if (map) {
      stores?.map((store) => {
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

        //마커 표시
        marker.setMap(map);

        //마커 커서가 hover 되었을때 표시할 인포윈도우 생성
        var content = `<div class="infowindow">${store?.upso_nm}</div>`;
        var customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseover', function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          customOverlay.setMap(map);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseout', function () {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          customOverlay.setMap(null);
        });

        //선택한 가게 저장
        window.kakao.maps.event.addListener(marker, 'click', function () {
          setCurrentStore(store);
          // let newMarker = new window.kakao.maps.Marker({
          //   position: markerPosition,
          // });
        });
      });
    }
  }, [map]);
  useEffect(() => {
    loadKakaoMarkers();
  }, [loadKakaoMarkers, map]);

  return <></>;
}
