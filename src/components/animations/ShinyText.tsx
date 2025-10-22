import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyText = ({ children, className }: ShinyTextProps) => {
  return (
    <motion.div
      className={cn("relative inline-block", className)}
      initial={{ backgroundPosition: "200% center" }}
      animate={{
        backgroundPosition: ["200% center", "-200% center"],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      <span
        className={className}
        style={{
          backgroundImage: "inherit",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </span>
    </motion.div>
  );
};
