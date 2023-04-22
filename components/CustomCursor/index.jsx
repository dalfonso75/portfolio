import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

const CustomCursor = ({ speed = 0.1 }) => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      if (positionRef.current && mainCursor.current) {
        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = clientY;
        positionRef.current.mouseX =
          mouseX - mainCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - mainCursor.current.clientHeight / 2;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Cursor Enable/Disable
  useEffect(() => {
    const handleMouseEnable = () => {
      if (secondaryCursor?.current)
        secondaryCursor.current.classList.add(styles.is_active);
    };
    const handleMouseDisable = () => {
      if (secondaryCursor?.current)
        secondaryCursor.current.classList.remove(styles.is_active);
    };

    const body = document.querySelector("body");
    if (body) {
      body.addEventListener("mouseenter", handleMouseEnable);
      body.addEventListener("mouseleave", handleMouseDisable);
    }
    return () => {
      if (body) {
        body.removeEventListener("mouseenter", handleMouseEnable);
        body.addEventListener("mouseleave", handleMouseDisable);
      }
    };
  }, []);

  // Cursor hover in Link
  useEffect(() => {
    const handleMouseHoverLink = () => {
      if (secondaryCursor?.current)
        secondaryCursor.current.classList.add(styles.is_link);
    };
    const handleMouseNotHoverLink = () => {
      if (secondaryCursor?.current)
        secondaryCursor.current.classList.remove(styles.is_link);
    };

    const links = document.querySelectorAll("a");

    if (links && links.length > 0) {
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleMouseHoverLink);
        link.addEventListener("mouseleave", handleMouseNotHoverLink);
      });
    }

    return () => {
      if (links && links.length > 0) {
        links.forEach((link) => {
          link.removeEventListener("mouseenter", handleMouseHoverLink);
          link.addEventListener("mouseleave", handleMouseNotHoverLink);
        });
      }
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = lerp(0, mouseX, 0.2);
        positionRef.current.destinationY = lerp(0, mouseY, 0.2);
      } else {
        positionRef.current.distanceX = lerp(destinationX, mouseX, 0.2);
        positionRef.current.distanceY = lerp(destinationY, mouseY, 0.2);
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX = distanceX;
          positionRef.current.destinationY = distanceY;
        }
      }
      if (mainCursor?.current)
        mainCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, [speed]);

  return (
    <div className={styles.wrapper_cursor} ref={mainCursor}>
      <div className={styles.secondary_cursor} ref={secondaryCursor} />
    </div>
  );
};

export default CustomCursor;
