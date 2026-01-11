'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { employers } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

// Extract start year from timeLength string (e.g., "Jan 2024 - Present" -> "2024")
const extractYear = (timeLength: string): string => {
  const match = timeLength.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : '2024';
};

const WorkHistory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yearDisplayRef = useRef<HTMLDivElement>(null);

  // Use ref instead of state to avoid re-renders
  const currentYearRef = useRef('2021');

  // Create refs array for digits
  const digitRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Create refs arrays for each work section
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !yearDisplayRef.current) return;

    // Wait for refs to be populated after render
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Calculate the end point based on when the year collides with the last section
        const lastSection = sectionRefs.current[sectionRefs.current.length - 1];

        // Pin the year display until it would collide with the last section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => {
            if (!lastSection || !yearDisplayRef.current || !sectionRef.current)
              return 'bottom bottom';

            // Calculate the distance from work history start to last section
            const workHistoryTop = sectionRef.current.offsetTop;
            const lastSectionTop = lastSection.offsetTop;
            const yearHeight = yearDisplayRef.current.offsetHeight;

            // End the pin when the last section would collide with the year
            // Distance = (last section position - work history start) - year height
            const distance = lastSectionTop - workHistoryTop - yearHeight;

            return `+=${distance}`;
          },
          pin: yearDisplayRef.current,
          pinSpacing: false,
        });

        // Animate year digits with rolling effect
        const animateYearRoll = (from: string, to: string) => {
          // Don't animate if years are the same
          if (from === to) return;

          const fromStr = from.padStart(4, '0');
          const toStr = to.padStart(4, '0');

          digitRefs.current.forEach((el, i) => {
            if (!el) return;

            const oldDigit = fromStr[i];
            const newDigit = toStr[i];

            if (oldDigit !== newDigit) {
              const delay = (3 - i) * 0.05;

              gsap.to(el, {
                yPercent: -100,
                opacity: 0,
                duration: 0.2,
                delay,
                ease: 'power2.in',
                onComplete: () => {
                  el.textContent = newDigit;
                  gsap.set(el, { yPercent: 100, opacity: 0 });

                  gsap.to(el, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.05,
                    ease: 'power2.out',
                  });
                },
              });
            } else {
              // Ensure unchanged digits remain visible
              gsap.set(el, { opacity: 1, yPercent: 0 });
            }
          });
        };

        // Setup ScrollTriggers for each work section
        sectionRefs.current.forEach((section, index) => {
          if (!section) return;

          const yearData = section.dataset.year || '2024';
          const logoEl = logoRefs.current[index];
          const contentEl = contentRefs.current[index];
          const descEl = descriptionRefs.current[index];
          const descWords = descEl?.querySelectorAll('.desc-word');

          // Set initial states
          if (logoEl) {
            gsap.set(logoEl, {
              opacity: 0,
              scale: 0.8,
              rotate: gsap.utils.random(-5, 5),
            });
          }

          if (contentEl) {
            gsap.set(contentEl, { opacity: 0, y: 30 });
          }

          if (descWords && descWords.length > 0) {
            gsap.set(descWords, { opacity: 0.2 });
          }

          // Create timeline with ScrollTrigger
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'bottom center',
              onEnter: () => {
                animateYearRoll(currentYearRef.current, yearData);
                currentYearRef.current = yearData;
              },
              onEnterBack: () => {
                animateYearRoll(currentYearRef.current, yearData);
                currentYearRef.current = yearData;
              },
              onLeave: () => {
                const nextSection = sectionRefs.current[index + 1];
                if (nextSection) {
                  const nextYear = nextSection.dataset.year || yearData;
                  animateYearRoll(currentYearRef.current, nextYear);
                  currentYearRef.current = nextYear;
                }
              },
              onLeaveBack: () => {
                const prevSection = sectionRefs.current[index - 1];
                if (prevSection) {
                  const prevYear = prevSection.dataset.year || yearData;
                  animateYearRoll(currentYearRef.current, prevYear);
                  currentYearRef.current = prevYear;
                }
              },
            },
          });

          // Animate logo
          if (logoEl) {
            tl.to(logoEl, {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.6,
              ease: 'back.out(1.7)',
            });
          }

          // Animate content
          if (contentEl) {
            tl.to(
              contentEl,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
              },
              '-=0.3'
            );
          }

          // Animate description words
          if (descWords && descWords.length > 0) {
            tl.to(
              descWords,
              {
                opacity: 1,
                stagger: 0.015,
                duration: 0.4,
                ease: 'power2.out',
              },
              '-=0.4'
            );
          }
        });

        // Refresh ScrollTrigger after setup to ensure all positions are correct
        ScrollTrigger.refresh();
      }, sectionRef);

      return () => {
        ctx.revert();
      };
    }, 100); // Small delay to ensure refs are populated

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-cream pt-20" id="work-history">
      {/* Year Display - pinned by GSAP */}
      <div
        ref={yearDisplayRef}
        className="z-20 flex justify-center items-center mt-8 mb-12 pointer-events-none"
      >
        <div className="text-[12vw] md:text-[8vw] font-bold font-mono leading-[0.9] tracking-tight text-black">
          <span
            ref={el => {
              digitRefs.current[0] = el;
            }}
            className="inline-block w-[1ch] relative"
          >
            2
          </span>
          <span
            ref={el => {
              digitRefs.current[1] = el;
            }}
            className="inline-block w-[1ch] relative"
          >
            0
          </span>
          <span
            ref={el => {
              digitRefs.current[2] = el;
            }}
            className="inline-block w-[1ch] relative"
          >
            2
          </span>
          <span
            ref={el => {
              digitRefs.current[3] = el;
            }}
            className="inline-block w-[1ch] relative"
          >
            1
          </span>
        </div>
      </div>

      {/* Work history sections */}
      <div className="max-w-6xl mx-auto px-4 space-y-32 pb-20">
        {employers.map((employer, index) => {
          const isLeft = index % 2 === 0;
          const startYear = extractYear(employer.timeLength);
          const descriptionWords = employer.description.split(' ');

          return (
            <section
              key={employer.name}
              ref={el => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex items-center"
              data-year={startYear}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center">
                {/* Logo Card */}
                <div className={isLeft ? 'md:order-2' : 'md:order-1'}>
                  <div
                    ref={el => {
                      logoRefs.current[index] = el;
                    }}
                    className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-full max-w-sm mx-auto aspect-square"
                  >
                    <Image
                      src={employer.img.src}
                      alt={employer.img.altText}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={isLeft ? 'md:order-1' : 'md:order-2'}>
                  <div
                    ref={el => {
                      contentRefs.current[index] = el;
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-secondary font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight mb-2">
                        {employer.position}
                      </h3>
                      <p className="text-primary font-semibold text-lg md:text-xl mb-1">
                        {employer.name}
                      </p>
                      <p className="text-primary/70 font-medium text-sm md:text-base">
                        {employer.timeLength}
                      </p>
                    </div>

                    <p
                      ref={el => {
                        descriptionRefs.current[index] = el;
                      }}
                      className="text-tertiary font-light text-base md:text-lg leading-relaxed max-w-[45ch]"
                    >
                      {descriptionWords.map((word, i) => (
                        <span key={i} className="desc-word">
                          {word}{' '}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHistory;
