"use client";

/**
 * Lenis removed — confirmed it causes janky/stuttery scrolling.
 * Native browser scroll is smoother. Wrapper kept for layout compatibility.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

