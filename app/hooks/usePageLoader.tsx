// import { useState, useEffect, useCallback, useRef } from "react";

// /**
//  * Custom hook to manage page loading state with hybrid approach
//  * Waits for: window.load + all images + manual component ready signal
//  *
//  * @param {Object} options - Configuration options
//  * @param {number} options.minLoadTime - Minimum time to show loader (ms), default: 0
//  * @param {number} options.fadeOutDuration - Duration of loader fade out animation (ms), default: 300
//  * @param {number} options.maxLoadTime - Maximum time to wait before forcing completion (ms), default: 10000
//  * @param {number} options.imageCheckInterval - How often to check for new images (ms), default: 100
//  * @returns {Object} - { isLoading, isContentReady, loadingProgress, signalReady }
//  */
// export const usePageLoader = ({
//   minLoadTime = 0,
//   fadeOutDuration = 300,
//   maxLoadTime = 10000,
//   imageCheckInterval = 100,
// } = {}) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isContentReady, setIsContentReady] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [startTime] = useState(Date.now());

//   const windowLoaded = useRef(false);
//   const imagesLoaded = useRef(false);
//   const componentsReady = useRef(false);
//   const trackedImages = useRef(new Set());
//   const checkIntervalId = useRef<number | null>(null);

//   const completeLoading = useCallback(() => {
//     const elapsedTime = Date.now() - startTime;
//     const remainingMinTime = Math.max(0, minLoadTime - elapsedTime);

//     setTimeout(() => {
//       setIsLoading(false);

//       setTimeout(() => {
//         setIsContentReady(true);
//       }, fadeOutDuration);
//     }, remainingMinTime);
//   }, [startTime, minLoadTime, fadeOutDuration]);

//   const checkIfAllLoaded = useCallback(() => {
//     if (
//       windowLoaded.current &&
//       imagesLoaded.current &&
//       componentsReady.current
//     ) {
//       completeLoading();
//       if (checkIntervalId.current !== null) {
//         clearInterval(checkIntervalId.current);
//       }
//     }
//   }, [completeLoading]);

//   // Manual signal function that components can call when ready
//   const signalReady = useCallback(() => {
//     componentsReady.current = true;
//     checkIfAllLoaded();
//   }, [checkIfAllLoaded]);

//   const checkAllImagesLoaded = useCallback(() => {
//     // Get all images in the document
//     const allImages = Array.from(document.querySelectorAll("img"));

//     if (allImages.length === 0) {
//       // No images on the page
//       imagesLoaded.current = true;
//       setLoadingProgress(100);
//       checkIfAllLoaded();
//       return;
//     }

//     let loadedCount = 0;
//     const totalImages = allImages.length;

//     allImages.forEach((img) => {
//       // Skip if already tracking this image
//       if (trackedImages.current.has(img)) {
//         return;
//       }

//       trackedImages.current.add(img);

//       // Check if image already loaded (cached or complete)
//       if (img.complete && img.naturalHeight !== 0) {
//         loadedCount++;
//       } else {
//         // Wait for image to load
//         img.addEventListener("load", () => {
//           loadedCount++;
//           const progress = Math.round((loadedCount / totalImages) * 100);
//           setLoadingProgress(progress);

//           if (loadedCount === totalImages) {
//             imagesLoaded.current = true;
//             checkIfAllLoaded();
//           }
//         });

//         // Handle image load errors
//         img.addEventListener("error", () => {
//           console.warn("Image failed to load:", img.src);
//           loadedCount++;
//           const progress = Math.round((loadedCount / totalImages) * 100);
//           setLoadingProgress(progress);

//           if (loadedCount === totalImages) {
//             imagesLoaded.current = true;
//             checkIfAllLoaded();
//           }
//         });
//       }
//     });

//     // Update progress for already-loaded images
//     const progress = Math.round((loadedCount / totalImages) * 100);
//     setLoadingProgress(progress);

//     // Check if all images were already loaded
//     if (loadedCount === totalImages) {
//       imagesLoaded.current = true;
//       checkIfAllLoaded();
//     }
//   }, [checkIfAllLoaded]);

//   useEffect(() => {
//     // Step 1: Handle window load event
//     const handleWindowLoad = () => {
//       windowLoaded.current = true;
//       checkIfAllLoaded();
//     };

//     // Check if window already loaded (race condition)
//     if (document.readyState === "complete") {
//       windowLoaded.current = true;
//     } else {
//       window.addEventListener("load", handleWindowLoad);
//     }

//     // Step 2: Start checking for images periodically
//     // This catches images that React renders dynamically
//     checkAllImagesLoaded();
//     checkIntervalId.current = window.setInterval(
//       checkAllImagesLoaded,
//       imageCheckInterval
//     ) as unknown as number;

//     // Step 3: Safety timeout
//     const timeoutId = setTimeout(() => {
//       console.warn("Page load timeout reached, forcing loader completion");
//       windowLoaded.current = true;
//       imagesLoaded.current = true;
//       componentsReady.current = true;
//       completeLoading();
//       if (checkIntervalId.current !== null) {
//         clearInterval(checkIntervalId.current);
//       }
//     }, maxLoadTime);

//     // Cleanup
//     return () => {
//       window.removeEventListener("load", handleWindowLoad);
//       if (checkIntervalId.current !== null) {
//         clearInterval(checkIntervalId.current);
//       }
//       clearTimeout(timeoutId);
//     };
//   }, [
//     checkAllImagesLoaded,
//     checkIfAllLoaded,
//     completeLoading,
//     maxLoadTime,
//     imageCheckInterval,
//   ]);

//   return {
//     isLoading, // Use this to control spinner visibility
//     isContentReady, // Use this as dependency in useGSAP hooks
//     loadingProgress, // Optional: use for progress bar (0-100)
//     signalReady, // Call this when your components are ready
//   };
// };

// // Example usage in your main layout/page component:
// /*
// import { usePageLoader } from './hooks/usePageLoader';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { useEffect } from 'react';

// function App() {
//   const { isLoading, isContentReady, loadingProgress, signalReady } = usePageLoader({
//     minLoadTime: 500,
//     fadeOutDuration: 300,
//     maxLoadTime: 10000,
//     imageCheckInterval: 100
//   });

//   return (
//     <>
//       {isLoading && (
//         <div className="spinner-overlay">
//           <div className="spinner-content">
//             <div>Loading...</div>
//             <div className="progress">{loadingProgress}%</div>
//           </div>
//         </div>
//       )}

//       <MainContent signalReady={signalReady} isContentReady={isContentReady} />
//     </>
//   );
// }

// function MainContent({ signalReady, isContentReady }) {
//   // Signal that this component is ready after it mounts and renders
//   useEffect(() => {
//     // Use requestAnimationFrame to ensure render is complete
//     requestAnimationFrame(() => {
//       signalReady();
//     });
//   }, [signalReady]);

//   // GSAP animations run only after everything is ready
//   useGSAP(() => {
//     if (!isContentReady) return;

//     gsap.from('.hero', {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: 'power3.out'
//     });

//     gsap.from('.card', {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       stagger: 0.2,
//       ease: 'power2.out'
//     });
//   }, [isContentReady]);

//   return (
//     <>
//       <div className="hero">
//         <img src="/hero.jpg" alt="Hero" />
//       </div>

//       <div className="card">
//         <img src="/card1.jpg" alt="Card 1" />
//       </div>
//     </>
//   );
// }

// // CSS for spinner overlay
// /*
// .spinner-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: white;
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .spinner-overlay.fade-out {
//   animation: fadeOut 0.3s ease-out forwards;
// }

// @keyframes fadeOut {
//   to {
//     opacity: 0;
//     pointer-events: none;
//   }
// }
// */
