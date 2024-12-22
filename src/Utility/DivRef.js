import { useState, useEffect, useRef } from "react";

export const useElementWidth = (type = "width") => {
  const [dimension, setDimension] = useState(0);
  const elementRef = useRef(null);

  const updateDimension = () => {
    if (elementRef.current) {
      if (type === "height") {
        setDimension(elementRef.current.offsetHeight);
      } else {
        setDimension(elementRef.current.offsetWidth);
      }
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateDimension();
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }
    const handleWindowResize = () => {
      updateDimension();
    };
    window.addEventListener("resize", handleWindowResize);
    updateDimension();

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [type]);

  return [dimension, elementRef];
};
