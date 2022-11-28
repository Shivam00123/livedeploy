import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import playbutton from "@/public/Images/playbutton.png";
import pausebutton from "@/public/Images/pause.png";

interface Props {
  videoUrl: string;
  mob: boolean;
}

const About: React.FC<Props> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<string>("not_playing");
  const [videoControlsVisibility, setVideoControlsVisibility] =
    useState<boolean>(true);
  const controlsTimerRef = useRef<any>();

  useMemo(() => {
    clearTimeout(controlsTimerRef?.current);
    setVideoControlsVisibility(true);
    setVideoState("not_playing");
    return;
  }, [videoUrl]);

  const playVideo = () => {
    videoRef.current?.play();
    setVideoState("playing");
  };

  const pauseVideo = () => {
    clearTimeout(controlsTimerRef.current);
    videoRef.current?.pause();
    setVideoState("not_playing");
  };

  const showControls = (): void => {
    if (videoState === "playing") {
      setVideoControlsVisibility(true);
      clearTimeout(controlsTimerRef.current);
      controlsTimerRef.current = setTimeout(() => {
        setVideoControlsVisibility(false);
      }, 2000);
    } else {
      return;
    }
  };

  return (
    <video
      loop
      ref={videoRef}
      controls={true}
      controlsList="nodownload"
      src={videoUrl}
      className="absolute right-0 bottom-0 min-w-full min-h-full w-auto h-auto object-contain"
    />
  );
};

export default memo(About);
