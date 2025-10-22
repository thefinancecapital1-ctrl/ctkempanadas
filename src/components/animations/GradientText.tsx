import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#eeb75a] via-[#c2410c] to-[#fef3c7] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};
