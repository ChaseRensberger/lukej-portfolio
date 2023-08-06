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
  const [isMobile, setIsMobile] = useState(false);

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

  const updateIsMobile = () => {
    detectSize();
    if (windowDimension.winWidth >= windowDimension.winHeight) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  const getCorrectPath = () => {
    return isMobile ? videoUrlVertical : videoUrlHorizontal;
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isMobile]);

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
        src={getCorrectPath()}
      />
      {/* <source src={getCorrectPath()} type="video/mp4" /> */}
    </section>
  );
}
