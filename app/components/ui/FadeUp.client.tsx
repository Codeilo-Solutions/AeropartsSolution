import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  targetRef?: RefObject<HTMLElement>;
}

const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 60,
  className = "",
  targetRef,
}) => {
  // Check if we are on the server
  if (typeof window === "undefined") {
    // On the server, just render the children directly
    return <>{children}</>;
  }

  // If on the client, proceed with the animation logic
  const el = useRef<HTMLDivElement>(null);
  const animationTarget = targetRef || el;

  const [delayState, setDelayState] = useState(delay);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setDelayState(0);
    }
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setDelayState(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  useGSAP(() => {
    if (!animationTarget.current) return;

    gsap.fromTo(
      animationTarget.current,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delayState,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animationTarget.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delayState, duration, y, animationTarget.current]);

  return targetRef ? (
    <>{children}</>
  ) : (
    <div ref={el} className={className}>
      {children}
    </div>
  );
};

export default FadeUp;