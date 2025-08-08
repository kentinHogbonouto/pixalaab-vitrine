"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useController, Control } from "react-hook-form";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelPosition?: "left" | "right";
  containerClass?: string;
  labelClass?: string;
  control?: Control<{ [key: string]: unknown }>;
  name?: string;
};

const FormControlledCheckbox = React.forwardRef<
  HTMLInputElement,
  Required<Pick<CheckboxProps, "control" | "name">> &
    Omit<CheckboxProps, "control" | "name">
>(({ control, name, onChange: propsOnChange, ...rest }, ref) => {
  const { field } = useController({
    name,
    control,
    defaultValue: rest.defaultValue || false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.checked);
    propsOnChange?.(e);
  };

  return (
    <BaseCheckbox
      {...rest}
      ref={(e) => {
        field.ref(e);
        if (typeof ref === "function") ref(e);
        else if (ref) ref.current = e;
      }}
      checked={field.value as boolean}
      onChange={handleChange}
      onBlur={field.onBlur}
    />
  );
});

FormControlledCheckbox.displayName = "FormControlledCheckbox";

const BaseCheckbox = React.forwardRef<
  HTMLInputElement,
  Omit<CheckboxProps, "control" | "name">
>(
  (
    {
      className,
      label,
      labelPosition = "right",
      containerClass,
      labelClass,
      ...props
    },
    ref
  ) => {
    const checkboxElement = (
      <input
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary transition",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    if (!label) {
      return checkboxElement;
    }

    return (
      <div className={cn("flex items-center", containerClass)}>
        {labelPosition === "left" && (
          <label
            htmlFor={props.id}
            className={cn("mr-2 text-sm font-medium text-gray-700", labelClass)}
          >
            {label}
          </label>
        )}
        {checkboxElement}
        {labelPosition === "right" && (
          <label
            htmlFor={props.id}
            className={cn("ml-2 text-sm font-medium text-gray-700", labelClass)}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

BaseCheckbox.displayName = "BaseCheckbox";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { control, name, ...rest } = props;

    if (control && name) {
      return (
        <FormControlledCheckbox
          ref={ref}
          control={control}
          name={name}
          {...rest}
        />
      );
    }

    return <BaseCheckbox ref={ref} {...rest} />;
  }
);

Checkbox.displayName = "Checkbox";

export const ListCheckboxItem = ({
  label,
  checked,
  onChange,
  className,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center p-3 hover:bg-gray-50", className)}>
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mr-3"
      />
      <span className="flex-1 text-sm">{label}</span>
    </div>
  );
};
