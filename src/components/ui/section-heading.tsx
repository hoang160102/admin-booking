"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  href?: string
  className?: string
}

export function SectionHeading({ title, href, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 mb-6", className)}>
      <div className="flex items-center gap-3">
        {/* Red Dot Icon */}
        <div className="size-3 rounded-full bg-primary shadow-lg shadow-primary/40" />
        <h2 className="text-xl font-black uppercase tracking-tighter text-white">
          {title}
        </h2>
      </div>
      
      {href && (
        <Link 
          href={href}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
        >
          Xem tất cả 
          <div className="bg-primary/10 rounded-full p-1 group-hover:bg-primary transition-colors">
            <ChevronRight className="size-3 text-primary group-hover:text-white" />
          </div>
        </Link>
      )}
    </div>
  )
}
