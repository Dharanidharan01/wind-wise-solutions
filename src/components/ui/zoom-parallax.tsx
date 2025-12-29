'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: Image[];
}

const imagePositions = [
  { top: '0', left: '0', height: '25vh', width: '25vw' }, // Center - main image
  { top: '-30vh', left: '5vw', height: '30vh', width: '35vw' }, // Top right
  { top: '-10vh', left: '-25vw', height: '45vh', width: '20vw' }, // Top left
  { top: '0', left: '27.5vw', height: '25vh', width: '25vw' }, // Right
  { top: '27.5vh', left: '5vw', height: '25vh', width: '20vw' }, // Bottom right
  { top: '27.5vh', left: '-22.5vw', height: '25vh', width: '30vw' }, // Bottom left
  { top: '22.5vh', left: '25vw', height: '15vh', width: '15vw' }, // Far right
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-muted/30">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const position = imagePositions[index % imagePositions.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div
                className="relative overflow-hidden rounded-lg shadow-xl"
                style={{
                  height: position.height,
                  width: position.width,
                  marginTop: position.top,
                  marginLeft: position.left,
                }}
              >
                <img
                  src={src}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
