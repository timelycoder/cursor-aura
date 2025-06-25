import { useEffect, useRef } from "react";

const MouseAura = () => {
  const trailRef = useRef(null); //  ট্রেইলের রেফারেন্স

  useEffect(() => {
    const trail = trailRef.current;

    //  মাউস মুভমেন্ট হ্যান্ডলার
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const color1 = `hsl(${Math.random() * 360}, 70%, 70%)`;
      const color2 = `hsl(${Math.random() * 360}, 70%, 40%)`;
      trail.style.background = `radial-gradient(circle, ${color1}, ${color2})`;

      const animate = () => {
        trail.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900 overflow-hidden relative">
      <div
        ref={trailRef}
        className="trail follow"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "9999px",
          position: "fixed",
          pointerEvents: "none",
          opacity: 0.5,
          filter: "blur(10px)",
          zIndex: 50,
          transition: "transform 0.3s ease",
        }}
      ></div>
    </div>
  );
};

export default MouseAura;
