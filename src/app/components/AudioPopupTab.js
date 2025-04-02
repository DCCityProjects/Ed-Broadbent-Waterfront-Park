"use client";

import { useEffect, useRef, useState } from "react";
import PopupTab from "/public/images/svgs/popup-tab_v1.0.0.svg";
import Play from "/public/images/svgs/icons/play.svg";
import Pause from "/public/images/svgs/icons/pause.svg";
import Restart from "/public/images/svgs/icons/restart.svg";
import "/src/app/css/audiopopup.css";
import "/src/app/css/popup.css";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

export default function AudioPopupTab({ audioSrc, audioGuidanceEnabled, autoPlay }) {
  const [isClient, setIsClient] = useState(false);
  const [popupHeight, setPopupHeight] = useState(0);
  const [isUp, setIsUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabRef = useRef(null);
  const popupRef = useRef(null);
  const audioRef = useRef(null);
  const thumbRef = useRef(null);
  const fillRef = useRef(null);
  const trackRef = useRef(null);


  // useEffect(() => {
  //   setAudioGuidanceEnabled(sessionStorage.getItem("audioGuidanceEnabled") === "true" ?? true);
  //   console.log(`getting the audio guidance and it is ${sessionStorage.getItem("audioGuidanceEnabled") === "true" ?? true}`)
  // }, [])

  useEffect(()=>{
    if(audioGuidanceEnabled === "false"){
      console.log("it is true!")
      gsap.to(popupRef.current, { y: 0 });
      setIsUp(true);
    }
  },[audioGuidanceEnabled])

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (popupRef.current) {
      setPopupHeight(popupRef.current.clientHeight);
    }
  }, []);

  useEffect(()=>{
    if (audioGuidanceEnabled === "false"){
      // console.log("it is false!")
      gsap.to(popupRef.current, { y: popupHeight });
      setIsUp(false);
    } else if (audioGuidanceEnabled === "true"){ 
      // console.log(`it is true! ${audioGuidanceEnabled}`)
    }
  }, [audioGuidanceEnabled, popupHeight])

  useEffect(() => {
    if (!isClient) return;

    gsap.registerPlugin(Draggable);

    let containerDraggable = null;

    if (popupRef.current && tabRef.current) {
      containerDraggable = Draggable.create(popupRef.current, {
        type: "y",
        inertia: true,
        bounds: { minY: 0, maxY: popupHeight },
        edgeResistance: 0.5,
        dragClickables: true,
        onRelease: function () {
          const y = this.y;

          if (y <= popupHeight / 2) {
            gsap.to(popupRef.current, { y: 0 });
            setIsUp(true);
          } else {
            gsap.to(popupRef.current, { y: popupHeight });
            setIsUp(false);
          }
        }
      })[0];
    }

    const track = trackRef.current;
    const fill = fillRef.current;
    const thumb = thumbRef.current;

    if (track && fill && thumb) {
      const createThumbDraggable = () => {
        const trackWidth = track.clientWidth;

        Draggable.create(thumb, {
          type: "x",
          bounds: { minX: 0, maxX: trackWidth },

          onPress: function () {
            if (containerDraggable) {
              containerDraggable.disable();
            }
          },

          onDrag: function () {
            const trackWidth = track.clientWidth;
            const percentage = this.x / trackWidth;

            fill.style.width = `${percentage * 100}%`;

            const audio = audioRef.current;
            if (audio && audio.duration) {
              audio.currentTime = percentage * audio.duration;
            }
          },

          onRelease: function () {
            if (containerDraggable) {
              containerDraggable.enable();
            }

            const trackWidth = track.clientWidth;
            const percentage = this.x / trackWidth;

            const audio = audioRef.current;
            if (audio && audio.duration) {
              audio.currentTime = percentage * audio.duration;
            }
          }
        });
      };

      createThumbDraggable();

      const handleResize = () => {
        Draggable.get(thumb)?.kill();
        createThumbDraggable();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient, popupHeight]);

  useEffect(() => {
    const audio = audioRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    const thumb = thumbRef.current;

    if (!audio || !track || !fill || !thumb) return;

    const updateProgress = () => {
      const trackWidth = track.clientWidth;

      if (audio.duration) {
        const percentage = audio.currentTime / audio.duration;

        fill.style.width = `${percentage * 100}%`;

        gsap.set(thumb, {
          x: percentage * trackWidth
        });
      }

      if (isPlaying) {
        requestAnimationFrame(updateProgress);
      }
    };

    if (isPlaying) {
      requestAnimationFrame(updateProgress);
    }

    return () => cancelAnimationFrame(updateProgress);
  }, [isPlaying]);

  const handlePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleRestart = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = 0;

    if (!audio.paused) {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(()=>{
    if(autoPlay){
      console.log("playing audio cuz autoplay")
      handlePlay();
    }
  }, [autoPlay])

  return (
    <div className="audio-popup" ref={popupRef}>
      <PopupTab
        className="popup-tab"
        preserveAspectRatio="xMidYMin"
        ref={tabRef}
      />

      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="audio-popup__wrapper">
        {isPlaying ? (
          <Pause
            className="audio-popup__icon"
            onClick={handlePlay}
          />
        ) : (
          <Play
            className="audio-popup__icon"
            onClick={handlePlay}
          />
        )}

        <div className="audio-popup__progress-bar">
          <div className="progress-track" ref={trackRef}>
            <div className="progress-fill" ref={fillRef}></div>
            <div className="progress-thumb" ref={thumbRef}></div>
          </div>
        </div>

        <Restart
          className="audio-popup__icon"
          onClick={handleRestart}
        />
      </div>
    </div>
  );
}
