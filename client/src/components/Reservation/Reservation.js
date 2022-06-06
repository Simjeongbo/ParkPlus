import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
import styles from './Reservation.module.css';
import { Link } from "react-router-dom";
import { IoIosBackspace } from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";

const { kakao } = window;

function Reservation() {
  //지도
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  //사용자 정보
  var match = document.cookie.match(new RegExp("(^| )" + "id" + "=([^;]+)"));
  const username = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )" + "email" + "=([^;]+)"));
  const email = decodeURIComponent(match[2]);

  var match = document.cookie.match(
    new RegExp("(^| )" + "carnum" + "=([^;]+)")
  );
  const carnum = decodeURIComponent(match[2]);

  var match = document.cookie.match(new RegExp("(^| )" + "tel" + "=([^;]+)"));
  const tel = decodeURIComponent(match[2]);

  


  return (
    <>
      <div className={styles.background1}>
          <div id="map" className={styles.image}>     
            <div className={styles.menu}>
              <Link to="/" className={styles.exit}><IoIosBackspace className={styles.exitI} /></Link>
              <div className={styles.title}>
                  <h1>팍플</h1><h2>+</h2>
              </div>
              <div className={styles.main}>
                <div className={styles.box1}>
                  <div>주문상품</div>
                  <ul>
                    <li><h4>주차장 이름</h4></li>
                    <li><h4>주소</h4></li>
                    <li><h4>가격</h4></li>
                    <li><h4>시간</h4></li>
                    <li className={styles.endB}><h4>총계</h4></li>
                  </ul>
                </div>
                <br/>
                <div className={styles.box2}>
                  <div>주문자 정보</div>
                  <ul>
                    <li>이름 <h2>{username}</h2></li>
                    <li>이메일 <h2>{email}</h2></li>
                    <li>연락처 <h2>{tel}</h2></li>  
                    <li>차량번호 <h2>{carnum}</h2></li>
                  </ul>
                </div>
                <br/>
                <div className={styles.box3}>
                  <div>결제 정보</div>
                  <ul>
                    <li>총 주문금액</li>
                    <li>(예시)20,000</li>
                    <li>원</li>
                  </ul>
                </div> 
                <br/>
                <div className={styles.box4}>
                  <div>결제 수단</div>
                  <ul>
                    <li><h2><BsIcons.BsPiggyBank/></h2>가상계좌 무통장입금</li>
                    <li><h2><AiIcons.AiOutlineCreditCard/></h2>신용카드</li>
                    <li><h2><BsIcons.BsClockHistory/></h2>실시간계좌이체</li>
                    <li><h2><GiIcons.GiSmartphone/></h2>휴대폰 소액결제</li>
                  </ul>
                </div>
                <button className={styles.sell}>장소결제</button>
              </div>
            </div>
          </div>
      </div>
    
    </>
  );
}

export default Reservation;