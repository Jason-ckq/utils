import React, { useEffect, useRef, useState } from "react";
import classes from "./style.module.less";
// import { t } from "i18n";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import { useSelector } from "react-redux";
// import warning from '../assets/warning.mp3';
import warning from "../List/canon.mp3";
// 告警
const Audio = props => {
  const mp3 = useRef();
  const [isFirst, setIsFirst] = useState(true);
  const [isPlay, setIsPlay] = useState(true);
  // 暂停
  const pauseAudio = () => {
    mp3?.current?.pause();
    setIsPlay(false);
    setIsFirst(false);
  };
  // 播放
  const playAudio = () => {
    mp3?.current?.play();
    setIsPlay(true);
    setIsFirst(false);
  };
  const { data } = useSelector(state => state.Alarm);

  // 监听告警
  const [isWarning, setWarning] = useState(false);
  useEffect(() => {
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
  }, [data]);

  return isWarning ? (
    <div className={classes.wrap}>
      {isFirst && (
        <iframe style={{ display: "none" }} allow='autoplay' src={warning} />
      )}
      <audio ref={mp3} src={warning} loop='loop' />
      {data.length && (
        <>
          {isPlay ? (
            <img
              onClick={pauseAudio}
              src={pause}
              alt={t("暂停")}
              title={t("暂停")}
            />
          ) : (
            <img
              onClick={playAudio}
              src={play}
              alt={t("播放")}
              title={t("播放")}
            />
          )}
        </>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Audio;
