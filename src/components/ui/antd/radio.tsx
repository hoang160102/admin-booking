"use client"

import React from "react"
import { Radio as AntdRadio } from "antd"
import type { RadioProps, RadioGroupProps } from "antd"
import { cn } from "@/lib/utils"

export interface CustomRadioProps extends RadioProps {
  label?: string
}

const Radio = React.forwardRef<any, CustomRadioProps>(({ className, children, label, ...props }, ref) => {
  return (
    <AntdRadio
      ref={ref}
      className={cn("text-sm font-medium text-foreground hover:text-primary", className)}
      {...props}
    >
      {label || children}
    </AntdRadio>
  )
})

Radio.displayName = "Radio"

const RadioGroup = AntdRadio.Group

export { Radio, RadioGroup }
