import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocomotiveScroll = ({ ref, ...otherProps }) => {
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          locomotiveScrollRef.current = new LocomotiveScroll({
            ...otherProps,
            el: ref.current,
          });
          
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }
    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [ref]);
  return [locomotiveScrollRef];
};
export default useLocomotiveScroll;
