import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import Lottie from "react-lottie";
import animationBubble from "../animations/Illustration_Animation (Move lips to center).json";

const HomeAnimation = (props) => {
  const [height, setHeight] = useState(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBubble,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(()=>{
  //   if(screen.width > 1700) {
  //     setHeight(1185);
  //   } else {
  //     setHeight(1200);
  //   }
  // })

  return(
    <Lottie options={defaultOptions} height="100%" />
  )
};



export default HomeAnimation