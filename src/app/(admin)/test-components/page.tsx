"use client"

import * as React from "react"
import {
  Film,
  Ticket,
  Info,
  AlertCircle,
  ChevronRight,
  Star,
  Clock,
  User,
  Layout,
  MousePointer2,
  Bell,
  Search,
  CheckCircle2,
  CircleDot,
  Type
} from "lucide-react"

import { Input as AntdInput } from "@/components/ui/antd/input"
import { Checkbox as AntdCheckbox } from "@/components/ui/antd/checkbox"
import { Radio as AntdRadio, RadioGroup as AntdRadioGroup } from "@/components/ui/antd/radio"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TestComponentsPage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground pb-20">
        <main className="container mx-auto px-4 py-10 flex flex-col gap-16">
          {/* Carousel Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Layout className="size-6 text-primary" /> Hero Carousel
            </h2>
            <div className="px-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3].map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="border-none overflow-hidden bg-muted">
                          <CardContent className="flex aspect-[21/9] items-center justify-center p-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                            <Skeleton className="absolute inset-0 z-0" />
                            <div className="z-20 text-center p-6 mt-auto">
                              <Badge className="mb-4">Hành Động • Viễn Tưởng</Badge>
                              <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Movie Title Sample {index + 1}</h3>
                              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                                Một mô tả ngắn về bộ phim để kiểm tra khả năng hiển thị văn bản trên nền banner của Carousel.
                              </p>
                              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                <Ticket className="mr-2 h-4 w-4" /> Đặt Vé Ngay
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          <Separator />

          {/* Cards & Tabs Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MousePointer2 className="size-6 text-primary" /> Tabs & Movie Cards
            </h2>
            <Tabs defaultValue="now" className="w-full">
              <TabsList className="mb-8 grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="now">Đang Chiếu</TabsTrigger>
                <TabsTrigger value="soon">Sắp Chiếu</TabsTrigger>
              </TabsList>
              <TabsContent value="now" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="group overflow-hidden transition-all hover:border-primary/50">
                    <div className="aspect-[2/3] relative bg-muted overflow-hidden">
                      <Skeleton className="absolute inset-0" />
                      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                        <Badge variant="destructive" className="font-bold">T18</Badge>
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur">2D</Badge>
                      </div>
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-primary text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <Ticket className="size-6" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg line-clamp-1">Siêu Phẩm Điện Ảnh {i}</CardTitle>
                        <div className="flex items-center text-yellow-500 text-xs font-bold shrink-0">
                          <Star className="size-3 mr-1 fill-current" /> 8.5
                        </div>
                      </div>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Clock className="size-3" /> 120 phút • Hành động
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" variant="outline">
                        Chi Tiết
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="soon">
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground bg-muted/30 rounded-lg border border-dashed">
                  <Info className="size-10 mb-4 opacity-20" />
                  <p>Đang cập nhật danh sách phim sắp chiếu...</p>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <Separator />

          {/* Buttons & Interactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Bell className="size-6 text-primary" /> Buttons & Feedback
              </h2>
              <div className="flex flex-wrap gap-4 items-center">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled>Disabled</Button>
                <Button size="icon"><ChevronRight className="size-4" /></Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge>Default Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Badge variant="outline">Outline Badge</Badge>
                <Badge variant="destructive">Ruby Red Badge</Badge>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline">Hover for Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Đây là thông tin bổ sung hữu ích!</p>
                  </TooltipContent>
                </Tooltip>

                <Dialog>
                  <DialogTrigger>
                    <Button variant="secondary">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Xác nhận đặt vé</DialogTitle>
                      <DialogDescription>
                        Bạn đang thực hiện đặt vé cho phim "Siêu Phẩm Điện Ảnh". Vui lòng kiểm tra lại thông tin.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 flex flex-col gap-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rạp:</span>
                        <span className="font-medium">NCC - Phòng 1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Suất chiếu:</span>
                        <span className="font-medium">19:30 - Hôm nay</span>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Tiếp tục</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="destructive">Open Alert</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Hành động này sẽ hủy toàn bộ giao dịch hiện tại của bạn. Bạn không thể hoàn tác.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground">Đồng ý</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
                <User className="size-6" /> Scroll Area & Drawer
              </h2>
              <div className="border rounded-md p-4 bg-muted/20">
                <ScrollArea className="h-[200px] w-full pr-4">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-sm mb-2 text-primary">Nội quy phòng chiếu</h4>
                    {[...Array(10)].map((_, i) => (
                      <p key={i} className="text-sm leading-6">
                        {i + 1}. Vui lòng không mang thức ăn từ bên ngoài vào rạp chiếu phim để đảm bảo vệ sinh chung.
                      </p>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="flex gap-4">
                <Drawer>
                  <DrawerTrigger>
                    <Button variant="outline" className="w-full">Open Bottom Drawer (Mobile Style)</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Thành viên NCC</DrawerTitle>
                        <DrawerDescription>Quản lý tài khoản và điểm tích lũy của bạn.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0 flex flex-col gap-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                          <Skeleton className="size-12 rounded-full" />
                          <div>
                            <div className="font-bold uppercase tracking-tighter">Gold Member</div>
                            <div className="text-xs text-muted-foreground tracking-widest mt-1">1,250 POINTS</div>
                          </div>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button>Cập nhật thông tin</Button>
                        <DrawerClose>
                          <Button variant="outline">Đóng</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </section>
          </div>

          <Separator />

          {/* Ant Design Section */}
          <section className="flex flex-col gap-8 pb-20">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Type className="size-6 text-primary" /> Ant Design Components (Wrapped)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <Card className="border-none bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="size-4" /> Input
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AntdInput label="Họ và tên" placeholder="Nhập họ và tên..." />
                  <AntdInput label="Email" placeholder="email@example.com" prefix={<Search className="size-4 opacity-50" />} />
                  <AntdInput label="Số điện thoại" placeholder="0123 456 789" error="Số điện thoại không hợp lệ" />
                </CardContent>
              </Card>

              {/* Checkbox Section */}
              <Card className="border-none bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" /> Checkbox
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <AntdCheckbox label="Ghi nhớ đăng nhập" />
                  <AntdCheckbox label="Chấp nhận điều khoản" defaultChecked />
                  <AntdCheckbox disabled label="Tùy chọn bị vô hiệu hóa" />
                </CardContent>
              </Card>

              {/* Radio Section */}
              <Card className="border-none bg-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDot className="size-4" /> Radio Group
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AntdRadioGroup defaultValue={1} className="flex flex-col gap-3">
                    <AntdRadio value={1} label="Nam" />
                    <AntdRadio value={2} label="Nữ" />
                    <AntdRadio value={3} label="Khác" />
                  </AntdRadioGroup>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </TooltipProvider>
  )
}
