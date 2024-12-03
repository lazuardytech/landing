"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  width: 600 * 2,
  height: 600 * 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    // jakarta
    { location: [-6.2, 106.8166], size: 0.05 },
    // singapore
    { location: [1.3521, 103.8198], size: 0.05 },
    // kuala lumpur
    { location: [3.139, 101.6869], size: 0.05 },
    // sydney
    { location: [-33.8688, 151.2093], size: 0.05 },
    // bangkok
    { location: [13.7563, 100.5018], size: 0.05 },
    // tokyo
    { location: [35.6895, 139.6917], size: 0.05 },
    // seoul
    { location: [37.5665, 126.978], size: 0.05 },
    // moscow
    { location: [55.7558, 37.6176], size: 0.05 },
    // new york
    { location: [40.7128, -74.006], size: 0.05 },
    // san francisco
    { location: [37.7749, -122.4194], size: 0.05 },
    // london
    { location: [51.5074, -0.1278], size: 0.05 },
    // hamburg
    { location: [53.5511, 9.9937], size: 0.05 },
  ],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = useRef(0);
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  // const updatePointerInteraction = (value) => {
  //   pointerInteracting.current = value;
  //   if (canvasRef.current) {
  //     canvasRef.current.style.cursor = value ? "grabbing" : "grab";
  //   }
  // };

  // const updateMovement = (clientX) => {
  //   if (pointerInteracting.current !== null) {
  //     const delta = clientX - pointerInteracting.current;
  //     pointerInteractionMovement.current = delta;
  //     setR(delta / 200);
  //   }
  // };

  const onRender = useCallback(
    (state) => {
      // if (!pointerInteracting.current) phi.current += 0.005;
      state.phi = phi.current + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r, width],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  });

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        // onPointerDown={(e) =>
        //   updatePointerInteraction(
        //     e.clientX - pointerInteractionMovement.current,
        //   )
        // }
        // onPointerUp={() => updatePointerInteraction(null)}
        // onPointerOut={() => updatePointerInteraction(null)}
        // onMouseMove={(e) => updateMovement(e.clientX)}
        // onTouchMove={(e) =>
        //   e.touches[0] && updateMovement(e.touches[0].clientX)
        // }
      />
    </div>
  );
}
