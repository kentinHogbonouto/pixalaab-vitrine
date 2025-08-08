// Fichier: src/components/ui/Collapsible.tsx
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CollapsibleContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const Collapsible = ({
  children,
  className,
  open: propOpen,
  defaultOpen = false,
  onOpenChange,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = propOpen !== undefined;
  const open = isControlled ? propOpen : internalOpen;

  const setOpen = (value: React.SetStateAction<boolean>) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    if (onOpenChange) {
      onOpenChange(typeof value === "function" ? value(open) : value);
    }
  };

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div
        className={cn("w-full space-y-2", className)}
        {...props}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error("CollapsibleTrigger must be used within a Collapsible");
  }

  const { open, setOpen } = context;

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex items-center justify-between w-full transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-200",
          open && "rotate-180"
        )}
      />
    </button>
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error("CollapsibleContent must be used within a Collapsible");
  }

  const { open } = context;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        open ? "animate-collapsible-down" : "animate-collapsible-up",
        className
      )}
      {...props}
    >
      {open && children}
    </div>
  );
});
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleContent, CollapsibleTrigger };