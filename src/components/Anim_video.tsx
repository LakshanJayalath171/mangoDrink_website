import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animatedText } from '../../constant';

gsap.registerPlugin(ScrollTrigger);

const Anim_video = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!videoRef.current || !containerRef.current) return;

    // Create master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        onUpdate: (self) => {
          // Sync video playback with scroll progress
          if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = self.progress * videoRef.current.duration;
          }
        },
      },
    });

    scrollTimelineRef.current = tl;

    // Add text animations to timeline
    textRefs.current.forEach((element, index) => {
      if (!element) return;

      const isLeftPosition = index % 2 === 0;

      tl.fromTo(
        element,
        {
          opacity: 0,
          x: isLeftPosition ? -100 : 100,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        index * 0.3 // Stagger animations
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Video container with sticky positioning */}
      <div
        ref={videoWrapperRef}
        className="sticky top-0 w-screen h-screen overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/Videos/Hero.mp4"
          muted
          className="w-full h-full object-cover"
        />

        {/* Text overlays */}
        {animatedText.map((text, index) => (
          <div
            ref={(el) => {
              textRefs.current[index] = el;
            }}
            className={text.position}
            key={text.id}
          >
            <div className="px-10 py-6">
              <h1 className="text-4xl font-bold py-4 mango-heading-white">
                {text.title}
              </h1>
              <p className="text-blue-50 font-semibold w-48">
                {text.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable content area to enable scroll */}
      <div className="w-screen h-[200vh] bg-transparent" />
    </div>
  );
};

export default Anim_video;