import { useState, useEffect } from "react";

export const CardSkeleton = ({ index }) => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    switch (index) {
      case 1:
        setScreenSize("medium-screen");
        break;
      case 2:
        setScreenSize("large-screen");
        break;
      case 3:
        setScreenSize("xl-screen");
        break;
    }
  }, []);

  return <div className={`card-skeleton-popular ${screenSize}`}></div>;
};
