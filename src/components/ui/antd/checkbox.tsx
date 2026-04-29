"use client"

import React from "react"
import { Checkbox as AntdCheckbox } from "antd"
import type { CheckboxProps } from "antd"
import { cn } from "@/lib/utils"

export interface CustomCheckboxProps extends CheckboxProps {
  label?: string
}

const Checkbox = React.forwardRef<any, CustomCheckboxProps>(({ className, children, label, ...props }, ref) => {
  return (
    <AntdCheckbox
      ref={ref}
      className={cn("text-sm font-medium text-foreground hover:text-primary", className)}
      {...props}
    >
      {label || children}
    </AntdCheckbox>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }
