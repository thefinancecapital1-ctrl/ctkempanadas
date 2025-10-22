import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareHover = ({ children, className }: GlareHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0.6 }}
          animate={{ x: "200%", opacity: 0.6 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          }}
        />
      )}
    </motion.div>
  );
};
