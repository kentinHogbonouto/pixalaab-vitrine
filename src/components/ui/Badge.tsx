"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { BadgeVariant } from "@/shared/types/badge.types";

interface IBadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800",
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
  outline: "border border-gray-300 bg-transparent text-gray-700",
  ghost: "bg-transparent text-gray-700",
};

export function Badge(props: IBadgeProps) {
  const {
    variant = "default",
    className,
    children,
    icon,
    iconPosition = "left",
  } = props;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-1.5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-1.5">{icon}</span>
      )}
    </span>
  );
}

export function PrimaryBadge(props: Omit<IBadgeProps, "variant">) {
  return <Badge variant="primary" {...props} />;
}

export function SuccessBadge(props: Omit<IBadgeProps, "variant">) {
  return <Badge variant="success" {...props} />;
}

export function WarningBadge(props: Omit<IBadgeProps, "variant">) {
  return <Badge variant="warning" {...props} />;
}

export function DangerBadge(props: Omit<IBadgeProps, "variant">) {
  return <Badge variant="danger" {...props} />;
}
