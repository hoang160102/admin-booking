"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { NAV_ITEMS } from "@/core/constants"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 border-b"
          : "bg-background py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image src="/icons/logo.svg" className="!h-10" alt="Logo" width={110} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 ml-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all h-9 px-6 font-bold"
            >
              <Link href="/dang-ky">Đăng ký</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all px-8 h-9 font-bold text-white shadow-lg shadow-primary/20"
            >
              <Link href="/dang-nhap">Đăng nhập</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="size-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-background border-primary/20">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader className="border-b border-primary/10">
                    <DrawerTitle className="text-white font-black uppercase italic tracking-tighter">
                      Menu NCC
                    </DrawerTitle>
                    <DrawerDescription className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      Điều hướng nhanh trung tâm chiếu phim quốc gia
                    </DrawerDescription>
                  </DrawerHeader>
                  <nav className="flex flex-col p-6 gap-4">
                    {NAV_ITEMS.map((item) => (
                      <DrawerClose key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-bold transition-all p-3 rounded-lg border border-transparent",
                            pathname === item.href
                              ? "bg-primary text-white"
                              : "text-white hover:border-primary/50 hover:bg-primary/5"
                          )}
                        >
                          {item.name}
                        </Link>
                      </DrawerClose>
                    ))}
                    <div className="mt-8 flex flex-col gap-4">
                      <Button asChild variant="outline" className="w-full rounded-full h-11" >
                        <Link href="/dang-ky">Đăng ký</Link>
                      </Button>
                      <Button asChild className="w-full rounded-full h-11 shadow-lg shadow-primary/20">
                        <Link href="/dang-nhap">Đăng nhập</Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  )
}
