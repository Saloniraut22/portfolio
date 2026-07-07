import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Don't run on touch devices
    if ("ontouchstart" in window) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      dot.style.opacity = "1";
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ring.style.opacity = "1";
      raf = requestAnimationFrame(loop);
    };

    const onEnterInteractive = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.background = "rgba(251,169,166,0.12)";
      ring.style.borderColor = "#FBA9A6";
    };

    const onLeaveInteractive = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.background = "transparent";
      ring.style.borderColor = "rgba(251,169,166,0.6)";
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(251,169,166,0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s, height 0.25s, background 0.25s, border-color 0.25s",
          opacity: 0,
          mixBlendMode: "normal",
        }}
      />
      {/* Instant dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#FBA9A6",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />
    </>
  );
}
