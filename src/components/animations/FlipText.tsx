import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const FlipText = ({ children, className, delay = 0 }: FlipTextProps) => {
  const letters = children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
    },
  };

  return (
    <motion.span
      className={cn("inline-flex", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
