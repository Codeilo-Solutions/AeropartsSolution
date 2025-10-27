import {
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  className?: string;
  targetRef?: RefObject<HTMLElement>;
}

const FadeRight: React.FC<FadeRightProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  x = 60,
  className = "",
  targetRef,
}) => {
  // Check if we are on the server
  if (typeof window === "undefined") {
    // On the server, just render the children directly
    return <>{children}</>;
  }

  const el = useRef<HTMLDivElement>(null);
  const animationTarget = targetRef || el;

  useGSAP(() => {
    if (!animationTarget.current) return;

    gsap.fromTo(
      animationTarget.current,
      {
        opacity: 0,
        x: -x,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animationTarget.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, duration, x, animationTarget.current]);

  return targetRef ? (
    <>{children}</>
  ) : (
    <div ref={el} className={className}>
      {children}
    </div>
  );
};

export default FadeRight;