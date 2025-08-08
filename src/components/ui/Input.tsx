import React, { useState, Ref } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FieldError,
  Path,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { MIN_LENGTH } from "@/shared/ressources/password.ressource";
import { cn } from "@/lib/utils";

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "checkbox"
  | "textarea"
  | "time";

interface BaseInputProps<TFieldValues extends FieldValues> {
  id?: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
  label?: React.ReactNode;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  validation?: Record<string, unknown>;
  type: InputType;
  icon?: React.ReactNode;
  step?: string;
  min?: string;
}

interface EmailInputProps {
  type: "email";
  emailPattern?: RegExp;
}

interface PasswordInputProps {
  type: "password";
  minLength?: number;
  showToggle?: boolean;
}

export type InputProps<TFieldValues extends FieldValues> =
  BaseInputProps<TFieldValues> &
    (
      | EmailInputProps
      | PasswordInputProps
      | { type: Exclude<InputType, "email" | "password"> }
    );

function Input<TFieldValues extends FieldValues = FieldValues>(
  props: InputProps<TFieldValues> & { ref?: Ref<HTMLInputElement> }
) {
  const {
    name,
    register,
    error,
    label,
    placeholder,
    className = "",
    required = false,
    disabled = false,
    type = "text",
    icon,
    step,
    min,
    validation = {},
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const getValidationRules = () => {
    const baseRules = {
      required: required ? "Ce champ est requis" : false,
    };

    if (type === "email") {
      const emailProps = props as BaseInputProps<TFieldValues> &
        EmailInputProps;
      return {
        ...baseRules,
        pattern: {
          value:
            emailProps.emailPattern ||
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Adresse email invalide",
        },
        ...validation,
      };
    }

    if (type === "password") {
      const passwordProps = props as BaseInputProps<TFieldValues> &
        PasswordInputProps;
      return {
        ...baseRules,
        minLength: {
          value: passwordProps.minLength || MIN_LENGTH,
          message: `Le mot de passe doit contenir au moins ${
            passwordProps.minLength || MIN_LENGTH
          } caractères`,
        },
        ...validation,
      };
    }

    return { ...baseRules, ...validation };
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  const renderInput = () => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={getInputType()}
          placeholder={placeholder}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            error
              ? "border-destructive ring-destructive/20 dark:ring-destructive/40"
              : "",
            icon ? "pl-9" : "",
            className
          )}
          step={type === "number" ? step : undefined}
          disabled={disabled}
          min={type === "number" ? min : undefined}
          {...register(name, getValidationRules())}
          {...restProps}
        />

        {type === "password" &&
          (props as BaseInputProps<TFieldValues> & PasswordInputProps)
            .showToggle !== false && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="h-4 w-4 text-muted-foreground" />
              ) : (
                <FaEye className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          )}
      </div>
    );
  };

  return (
    <div className="mb-4 space-y-1">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label} {required && <span className="text-destructive">*</span>}
        </label>
      )}
      {renderInput()}
      {error && (
        <p className="text-sm font-medium text-destructive">{error.message}</p>
      )}
    </div>
  );
}

export default Input;
