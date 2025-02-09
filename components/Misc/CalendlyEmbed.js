import React, { useEffect, useState } from "react";

const CalendlyEmbed = ({ url }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // Track component mount status
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    script.onload = () => {
      if (isMounted) {
        setIsScriptLoaded(true); // Update state only if component is mounted
      }
    };
    
    head.appendChild(script);

    // Cleanup function
    return () => {
      isMounted = false; // Prevent state updates after unmount
      if (head.contains(script)) {
        head.removeChild(script); // Remove script from DOM
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "900px", width: "100%" }}>
      {/* Loading overlay */}
      {!isScriptLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          Loading booking section...
        </div>
      )}

      {/* Calendly Booking Widget */}
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ height: "100%", width: "100%" }}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;