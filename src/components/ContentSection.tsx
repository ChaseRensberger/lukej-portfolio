"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  videoUrlHorizontal: string;
  videoUrlVertical: string;
}

export default function ContentSection({
  videoUrlHorizontal,
  videoUrlVertical,
}: Props) {
  const videoRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const isInView = useInView(markerRef);
  const [videoPath, setVideoPath] = useState(videoUrlHorizontal);

  const [windowDimension, setWindowDimension] = useState({
    winWidth: 0,
    winHeight: 0,
  });

  const detectSize = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  const updateVideoPath = () => {
    detectSize();
    if (windowDimension.winWidth >= windowDimension.winHeight) {
      setVideoPath(videoUrlHorizontal);
    } else {
      setVideoPath(videoUrlVertical);
    }
  };

  useEffect(() => {
    updateVideoPath();
    window.addEventListener("resize", updateVideoPath);

    return () => {
      window.removeEventListener("resize", updateVideoPath);
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoPath]);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="w-screen h-screen flex items-center justify-center snap-center">
      <div ref={markerRef} className="absolute w-12 h-12" />
      <video
        muted
        playsInline
        ref={videoRef}
        className="w-full h-full"
        src={videoPath}
      />
      {/* <source src={getCorrectPath()} type="video/mp4" /> */}
    </section>
  );
}
