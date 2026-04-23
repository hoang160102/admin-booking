"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

const BANNERS = [
  {
    id: "1",
    image: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/banner-sk-1.jpg",
    title: "Sự kiện 1",
    href: "/su-kien/1"
  },
  {
    id: "2",
    image: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/banner-sk-2.jpg",
    title: "Khuyến mãi 2",
    href: "/khuyen-mai/2"
  },
  {
    id: "3",
    image: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/banner-sk-3.jpg",
    title: "Sự kiện 3",
    href: "/su-kien/3"
  }
]

export function SidebarBanners() {
  return (
    <aside className="flex flex-col gap-4 sticky top-24 h-fit">
      <div className="flex items-center gap-2 mb-2 p-2 bg-primary/10 rounded-lg">
        <div className="size-2 rounded-full bg-primary" />
        <span className="text-xs font-black uppercase tracking-widest text-primary">Sự kiện & Khuyến mãi</span>
      </div>
      
      {BANNERS.map((banner) => (
        <Link 
          key={banner.id}
          href={banner.href}
          className="relative aspect-[3/4] w-full rounded-xl overflow-hidden group shadow-lg"
        >
          <Image
            src={banner.image || "/placeholder-banner.jpg"}
            alt={banner.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
             <span className="text-sm font-bold text-white uppercase tracking-tighter">{banner.title}</span>
          </div>
        </Link>
      ))}
    </aside>
  )
}
