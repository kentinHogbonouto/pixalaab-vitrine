"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import { cn } from "@/lib/utils";

export interface SelectOption<T = string> {
  value: T;
  label: string;
}

interface ISelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: FieldError;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "default";
}

export const Select = <T extends FieldValues>(props: ISelectProps<T>) => {
  const {
    name,
    control,
    label,
    options,
    placeholder = "Sélectionnez...",
    error,
    className = "",
    disabled = false,
    required = false,
    size = "default",
  } = props;

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-foreground">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SelectPrimitive.Root
            value={field.value}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectPrimitive.Trigger
              id={name}
              data-slot="select-trigger"
              data-size={size}
              className={cn(
                "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                "data-[size=default]:h-9 data-[size=sm]:h-8",
                error &&
                  "border-destructive ring-destructive/20 dark:ring-destructive/40"
              )}
            >
              <SelectPrimitive.Value placeholder={placeholder} />
              <SelectPrimitive.Icon asChild>
                <ChevronDownIcon className="size-4 opacity-50" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Content
              data-slot="select-content"
              className="bg-popover text-popover-foreground relative z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border shadow-md"
              position="popper"
              sideOffset={4}
              align="start"
              side="bottom"
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    data-slot="select-item"
                    className="focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  >
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <CheckIcon className="size-4" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Root>
        )}
      />

      {error && (
        <p className="text-sm font-medium text-destructive">{error.message}</p>
      )}
    </div>
  );
};
