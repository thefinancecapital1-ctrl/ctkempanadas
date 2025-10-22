import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollFloat = ({ children, className, delay = 0 }: ScrollFloatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: -10 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
