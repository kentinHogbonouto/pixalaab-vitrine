"use client";

import Image from "next/image";
import { FiEdit, FiTrash, FiEye, FiList, FiGrid } from "react-icons/fi";
import { formatCurrency } from "@/lib/formatting";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ICardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  badgeText?: string;
  metadata?: { label: string; value: string }[];

  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;

  variant?: "grid" | "list";
  orientation?: "horizontal" | "vertical";
  className?: string;

  footerContent?: ReactNode;
  headerContent?: ReactNode;

  isLoading?: boolean;
  children?: ReactNode;
}

export function Card(props: ICardProps) {
  const {
    title,
    description,
    imageUrl,
    price,
    badgeText,
    metadata = [],
    onView,
    onEdit,
    onDelete,
    variant = "grid",
    orientation = "vertical",
    className,
    footerContent,
    headerContent,
    isLoading = false,
    children,
  } = props;

  if (isLoading) {
    return (
      <div
        className={cn(
          "bg-white rounded-xl shadow-md overflow-hidden animate-pulse",
          orientation === "horizontal" && "flex",
          className
        )}
      >
        <div className="bg-gray-200 h-48 w-full" />
        <div className="p-4 flex-1 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300",
        orientation === "horizontal" && "flex",
        variant === "list" && "w-full",
        className
      )}
    >
      {imageUrl && (
        <div
          className={cn(
            "relative flex-shrink-0",
            orientation === "vertical" ? "h-48 w-full" : "h-auto w-48"
          )}
        >
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          {headerContent && (
            <div className="absolute top-2 left-2">{headerContent}</div>
          )}
        </div>
      )}

      <div
        className={cn(
          "p-5 flex flex-col",
          orientation === "horizontal" && "flex-1"
        )}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
          {price !== undefined && (
            <Badge variant="success">{formatCurrency(price)}</Badge>
          )}
          {badgeText && !price && <Badge variant="outline">{badgeText}</Badge>}
        </div>

        {description && (
          <p
            className="text-sm text-gray-600 mb-4 line-clamp-2"
            dangerouslySetInnerHTML={{
              __html:
                description.substring(0, 50) +
                (description.length > 50 ? "..." : ""),
            }}
          ></p>
        )}

        {metadata.length > 0 && (
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            {metadata.map((item, index) => (
              <div key={index}>
                <span className="text-gray-500">{item.label}: </span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {children}

        <div className="mt-auto">
          {footerContent || (
            <div className="flex justify-between items-center">
              {onView && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onView}
                  className="flex items-center"
                >
                  <FiEye className="mr-1" /> Voir
                </Button>
              )}

              {(onEdit || onDelete) && (
                <div className="flex space-x-2">
                  {onEdit && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onEdit}
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      <FiEdit className="mr-1" /> Modifier
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onDelete}
                      className="text-red-600 border-red-600 hover:bg-red-50"
                    >
                      <FiTrash className="mr-1" /> Supprimer
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ViewToggle({
  view,
  onChange,
}: {
  view: "grid" | "list";
  onChange: (view: "grid" | "list") => void;
}) {
  return (
    <div className="flex border rounded-lg overflow-hidden">
      <button
        onClick={() => onChange("grid")}
        className={cn(
          "p-2 border-r",
          view === "grid" ? "bg-gray-100" : "bg-white"
        )}
      >
        <FiGrid
          className={view === "grid" ? "text-primary" : "text-gray-400"}
        />
      </button>
      <button
        onClick={() => onChange("list")}
        className={cn("p-2", view === "list" ? "bg-gray-100" : "bg-white")}
      >
        <FiList
          className={view === "list" ? "text-primary" : "text-gray-400"}
        />
      </button>
    </div>
  );
}
