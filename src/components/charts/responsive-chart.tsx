import { ReactNode } from "react";

import { useResizeObserver } from "@/hooks/use-resize-observer";

interface ResponsiveChartProps {
  children: (size: { width: number; height: number }) => ReactNode;
  className?: string;
  minHeight?: number;
}

export function ResponsiveChart({
  children,
  className = "",
  minHeight = 300,
}: ResponsiveChartProps) {
  const { ref, size } = useResizeObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`w-full ${className}`}
      style={{ minHeight: `${minHeight}px` }}
    >
      {size.width > 0 && size.height > 0 && children(size)}
    </div>
  );
}
