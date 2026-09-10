import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
function Container({ children, className = "" }: ContainerProps) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

export default Container;
