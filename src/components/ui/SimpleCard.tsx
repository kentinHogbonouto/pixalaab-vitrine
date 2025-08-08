"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SimpleCardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: SimpleCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}>
      {children}
    </div>
  );
}
