import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import * as AiIcons from 'react-icons/ai';

var deleteCookie = function (name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};


function Info() {

    const onClickHandler = () => {
        axios.get("/api/users/logout").then((response) => {
            if (response.data.success) {
                console.log(response.data.success);
                deleteCookie("x_auth");
                window.location.reload();
            } else {
            alert("로그아웃 하는데 실패 했습니다.");
            console.log(response.data.success);
            }
        });
    };

    

  return (
    <>
        <form >
            <div className={styles.loginBox2} >
                <div className={styles.design2}></div>
                <div className={styles.loginForm2}>
                    <div className={styles.loginTitle2}>
                        <h1>유저이름</h1>
                        <h2 ><AiIcons.AiFillCar /></h2>
                    </div>
                    <div> 
                        <li>사진</li>
                        <li>이메일</li>
                        <li>차량번호</li>
                        <li>전화번호</li>
                    </div>
                    <div className={styles.buttonS}>
                        <a className={styles.button1}>
                        정보수정
                        </a>
                        <a className={styles.button2} onClick={onClickHandler}>
                        로그아웃
                        </a>
                    </div>
                </div>

            </div>
        </form>
    </>
  );
}

export default Info;