import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyText = ({ children, className }: ShinyTextProps) => {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      style={{
        background:
          "linear-gradient(90deg, currentColor 0%, currentColor 40%, rgba(255,255,255,0.9) 50%, currentColor 60%, currentColor 100%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        backgroundPosition: ["200% 0%", "-200% 0%"],
      }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
};
