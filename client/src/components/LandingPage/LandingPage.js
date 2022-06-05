import React, { useEffect } from "react";
import Login from '../Login/Login';
import Info from '../Login/Info';

const { kakao } = window;

const authCheck =() => {
  if(getCookie("x_auth") === null) {
    return true;
  } else {
    return false;
  }
}

var getCookie = function (name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}



function LandingPage() {


  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    // 지도
    <div
      id="map"
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* 로그인 */}
      {/* <div
        id="contents"
        style={{
          width: "100%",
          height: "100%",

        }}
      >
        <Login/>
      </div> */}
      {authCheck() === true ? (
        <div
        id="contents"
        style={{
          width: "100%",
          height: "100%",
        }}
        >
          <Login/>
        </div>
      ) : null }

      {authCheck() === false ? (
        <div
        id="contents"
        style={{
          width: "100%",
          height: "100%",
        }}
        >
          <Info/>
        </div>
      ) : null }
    </div>
  );
}

export default LandingPage;
