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
  const isInView = useInView(videoRef);

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

  const getCorrectPath = () => {
    return windowDimension.winWidth >= windowDimension.winHeight
      ? videoUrlHorizontal
      : videoUrlVertical;
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    if (videoRef.current) {
      videoRef.current.load();
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="w-screen h-screen flex items-center justify-center snap-center">
      <video
        autoPlay
        muted
        playsInline
        width={1000}
        ref={videoRef}
        className="w-full h-full"
      >
        <source src={getCorrectPath()} type="video/mp4" />
      </video>
    </section>
  );
}
