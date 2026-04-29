"use client"

import React from "react"
import { Input as AntdInput } from "antd"
import type { InputProps, InputRef } from "antd"
import { cn } from "@/lib/utils"

export interface CustomInputProps extends InputProps {
  label?: string
  error?: string
  containerClassName?: string
}

const Input = React.forwardRef<InputRef, CustomInputProps>(
  ({ className, label, error, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
        {label && (
          <label className="text-sm font-semibold text-foreground/80 ml-0.5">
            {label}
          </label>
        )}
        <AntdInput
          ref={ref}
          className={cn(
            "h-11 rounded-xl border-input hover:border-primary focus:border-primary transition-all duration-200",
            error && "border-destructive hover:border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-destructive mt-1 ml-0.5 animate-in fade-in slide-in-from-top-1">{error}</span>}
      </div>
    )
  }
)

Input.displayName = "Input"

// Password variant
const Password = React.forwardRef<InputRef, CustomInputProps>(
  ({ className, label, error, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
        {label && (
          <label className="text-sm font-semibold text-foreground/80 ml-0.5">
            {label}
          </label>
        )}
        <AntdInput.Password
          ref={ref}
          className={cn(
            "h-11 rounded-xl border-input hover:border-primary focus:border-primary transition-all duration-200",
            error && "border-destructive hover:border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-destructive mt-1 ml-0.5 animate-in fade-in slide-in-from-top-1">{error}</span>}
      </div>
    )
  }
)

Password.displayName = "Input.Password"

export { Input, Password }
