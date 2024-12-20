import { useState, useEffect, useRef } from "react";

export const useElementWidth = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null); 

  const updateWidth = () => {
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // ResizeObserver to watch the element's size changes
    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current); // Start observing the element
    }

    // Update width when window is resized
    const handleWindowResize = () => {
      updateWidth();
    };

    // Add window resize listener
    window.addEventListener("resize", handleWindowResize);

    // Initial width calculation
    updateWidth();

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current); // Cleanup observer on unmount
      }
      window.removeEventListener("resize", handleWindowResize); // Cleanup window resize listener
    };
  }, []);

  return [width, elementRef]; // Return the width and the element ref
};