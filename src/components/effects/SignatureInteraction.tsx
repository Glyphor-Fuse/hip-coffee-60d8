import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type InteractionType = 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';

interface SignatureInteractionProps {
  children: React.ReactNode;
  type: InteractionType;
  className?: string;
  speed?: number;
}

export const SignatureInteraction = ({ children, type, className = '', speed = 20 }: SignatureInteractionProps) => {
  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
        <motion.div
          className="flex min-w-full"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          <div className="flex shrink-0">{children}</div>
          <div className="flex shrink-0">{children}</div>
        </motion.div>
      </div>
    );
  }

  // Default pass-through for other types if not specifically implemented for this demo
  return <div className={className}>{children}</div>;
};
