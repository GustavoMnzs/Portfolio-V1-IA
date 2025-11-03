import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const AnimatedMailIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Mail 
        className="h-24 w-24 text-primary/70 animate-bounce-slow" 
        style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
      />
    </div>
  );
};

export default AnimatedMailIcon;