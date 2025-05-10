import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef<null | HTMLDivElement>(null);
  const [, setIsHovering] = useState(false);

  const mousePosition = useRef({ x: -10, y: -10 });

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    const updateCursorPosition = () => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.left = `${
        mousePosition.current.x - cursor.offsetWidth / 2
      }px`;
      cursor.style.top = `${
        mousePosition.current.y - cursor.offsetHeight / 2
      }px`;

      requestAnimationFrame(updateCursorPosition);
    };

    requestAnimationFrame(updateCursorPosition);
  }, []);

  useEffect(() => {
    const hoverEnterHandler = () => {
      setIsHovering(true);
    };

    const hoverLeaveHandler = () => {
      setIsHovering(false);
    };

    const hoverableElements = document.querySelectorAll(".hover-element");
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", hoverEnterHandler);
      el.addEventListener("mouseleave", hoverLeaveHandler);
    });

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverEnterHandler);
        el.removeEventListener("mouseleave", hoverLeaveHandler);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "";
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-[20px] h-[20px] rounded-full bg-white/50 pointer-events-none z-[9999] hidden md:block"
      ref={cursorRef}
    />
  );
};

export default Cursor;
