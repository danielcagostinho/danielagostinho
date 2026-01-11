'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { employers } from '@/lib/data';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const WorkHistory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.fromTo(
        '.timeline-line',
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        }
      );

      // Animate each work history item
      gsap.utils.toArray<HTMLElement>('.work-item').forEach((item, index) => {
        const isLeft = index % 2 === 0;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isLeft ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );

        // Animate the dot
        const dot = item.querySelector('.timeline-dot');
        gsap.fromTo(
          dot,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-white" id="work-history">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={timelineRef} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2">
            <div className="timeline-line absolute top-0 left-0 right-0 bottom-0 bg-primary origin-top" />
          </div>

          {/* Work history items */}
          <div className="space-y-20">
            {employers.map((employer, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={employer.name}
                  className={cn(
                    'work-item relative flex items-center',
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  )}
                >
                  {/* Content */}
                  <div className={cn('w-5/12', isLeft ? 'pr-12 text-right' : 'pl-12 text-left')}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div
                        className={cn(
                          'flex items-center gap-4 mb-4',
                          isLeft ? 'flex-row-reverse' : 'flex-row'
                        )}
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={employer.img.src}
                            alt={employer.img.altText}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-secondary font-bold text-lg md:text-xl lg:text-2xl tracking-tight">
                            {employer.position}
                          </h4>
                          <p className="text-xs text-primary font-semibold">{employer.name}</p>
                        </div>
                      </div>
                      <p className="text-xs text-primary mb-3 font-medium">{employer.timeLength}</p>
                      <p className="text-tertiary font-light text-base md:text-lg leading-[140%]">
                        {employer.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg timeline-dot z-10" />

                  {/* Empty space for the other side */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
