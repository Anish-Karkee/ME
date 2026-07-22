
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "purple" | "cyan" | "outline" | "glow";
  children: React.ReactNode;
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-zinc-200 border-white/10",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    outline: "bg-transparent text-zinc-400 border-zinc-800",
    glow: "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border-purple-500/40 shadow-sm shadow-purple-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
