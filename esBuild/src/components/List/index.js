import React, { useEffect, useRef, useState } from "react";
import Shopping from "../../assets/shopping.svg";
import classes from "./style.module.less";
import draw2 from "../../assets/draw2.png";
import { Button } from "antd";
import { authLogin } from "@/api/Interface/auth";
import warning from "./canon.mp3";
const data = [1];

const List = props => {
  const mp3 = useRef();

  const doLogin = async () => {
    const params = {
      userName: "lz",
      password: "admin",
    };
    try {
      const resp = await authLogin(params);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  // 播放
  const playAudio = () => {
    mp3?.current?.play();
    setIsPlay(true);
    setIsFirst(false);
  };
  // 暂停
  const pauseAudio = () => {
    mp3?.current?.pause();
    setIsPlay(false);
    setIsFirst(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (data.length) {
        setWarning(true);
        setTimeout(() => {
          playAudio();
        }, 400);
      } else {
        setWarning(false);
        setTimeout(() => {
          pauseAudio();
        }, 400);
      }
    }, 5000);
  }, [data]);

  const [isFirst, setIsFirst] = useState(true);
  const [isPlay, setIsPlay] = useState(true);
  // 监听告警
  const [isWarning, setWarning] = useState(false);
  return (
    <div className={classes.wrap}>
      <div className={classes.item}>halo</div>
      <img src={draw2} />
      <img src={Shopping} />
      <Button type='primary' onClick={doLogin}>
        登录
      </Button>
      <span style={{ fontFamily: "DS-Digital" }}>123</span>
      {isWarning && (
        <>
          <div>halo</div>
          {isFirst && (
            <iframe
              style={{ display: "none" }}
              allow='autoplay'
              src={warning}
            />
          )}
          <audio ref={mp3} src={warning} loop='loop' />
          {isPlay ? (
            <Button size='small' onClick={() => pauseAudio()}>
              暂停
            </Button>
          ) : (
            <Button size='small' onClick={() => playAudio()}>
              播放
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default List;
