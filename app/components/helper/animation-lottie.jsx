"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const NoSSRWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Skip rendering on server
  return <>{children}</>;
};

const AnimationLottie = ({ animationPath, width = "100%" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width,
    },
  };

  return (
    <NoSSRWrapper>
      <Lottie {...defaultOptions} />
    </NoSSRWrapper>
  );
};

export default AnimationLottie;
