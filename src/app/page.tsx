"use client"

import { Film, Calendar, Star, Ticket, Info, Play, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MovieCard } from "@/components/movies/movie-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { SidebarBanners } from "@/components/layout/sidebar-banners"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FEATURED_MOVIES } from "@/data/movies"
import { Movie } from "@/types/movie"

const MOCK_MOVIES: Movie[] = [
  {
    id: "1",
    title: "PHIM SUPER MARIO BROS.",
    description: "Một thợ sửa ống nước tên Mario du hành qua một mê cung dưới lòng đất cùng với anh trai mình, Luigi.",
    bannerImage: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/mario-banner.jpg",
    posterImage: "https://chieuphimquocgia.com.vn/Content/Images/Phim/poster-mario-1.jpg",
    releaseDate: "01/04/2026",
    genre: ["Hài", "Hoạt hình"],
    director: "Aaron Horvath",
    cast: ["Chris Pratt", "Anya Taylor-Joy"],
    rating: "8.5",
    ageRating: "P",
    format: ["2D"],
    language: "LỒNG TIẾNG",
  },
  {
    id: "2",
    title: "VÂY HÃM: NO WAY OUT",
    description: "Don Lee trở lại với tư cách là thám tử Ma Seok-do.",
    bannerImage: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/the-roundup-banner.jpg",
    posterImage: "https://chieuphimquocgia.com.vn/Content/Images/Phim/poster-roundup-1.jpg",
    releaseDate: "02/04/2026",
    genre: ["Hành động", "Tội phạm"],
    director: "Lee Sang-yong",
    cast: ["Ma Dong-seok", "Lee Joon-hyuk"],
    rating: "8.2",
    ageRating: "T16",
    format: ["2D"],
    language: "PHỤ ĐỀ",
  },
  {
    id: "3",
    title: "SIÊU NHÂN CUỘC CHIẾN CUỐI CÙNG",
    description: "Cuộc chiến cuối cùng của các siêu nhân anh hùng.",
    bannerImage: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/superman-banner.jpg",
    posterImage: "https://chieuphimquocgia.com.vn/Content/Images/Phim/poster-superman-1.jpg",
    releaseDate: "03/04/2026",
    genre: ["Hành động", "Viễn tưởng"],
    director: "James Gunn",
    cast: ["David Corenswet"],
    rating: "9.0",
    ageRating: "T13",
    format: ["2D", "3D"],
    language: "PHỤ ĐỀ",
  },
  {
    id: "4",
    title: "CHÚ MÈO ĐI HÀI",
    description: "Puss in Boots phát hiện ra rằng niềm đam mê phiêu lưu của mình đã gây ra hậu quả.",
    bannerImage: "https://chieuphimquocgia.com.vn/Content/Images/SuKien/puss-banner.jpg",
    posterImage: "https://chieuphimquocgia.com.vn/Content/Images/Phim/poster-puss-1.jpg",
    releaseDate: "04/04/2026",
    genre: ["Hoạt hình", "Phiêu lưu"],
    director: "Joel Crawford",
    cast: ["Antonio Banderas"],
    rating: "8.8",
    ageRating: "P",
    format: ["2D"],
    language: "LỒNG TIẾNG",
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden mb-12">
        <Carousel className="w-full">
          <CarouselContent>
            {FEATURED_MOVIES.map((movie) => (
              <CarouselItem key={movie.id}>
                <div className="relative aspect-[21/9] w-full min-h-[400px]">
                  <img
                    src={movie.bannerImage}
                    alt={movie.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col gap-4 z-10">
                    <Badge className="w-fit text-xs px-3 font-bold">{movie.genre[0]} • Phim Hot</Badge>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-2xl max-w-4xl leading-tight">
                      {movie.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-white/90">
                       <span className="flex items-center gap-1.5 font-bold"><Calendar className="size-4 text-primary" /> {movie.releaseDate}</span>
                       <span className="flex items-center gap-1.5 font-bold"><Star className="size-4 text-yellow-500 fill-current" /> {movie.rating}</span>
                       <span className="px-2 py-0.5 rounded bg-primary text-xs font-black">-{movie.ageRating}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <Button size="lg" className="rounded-full cursor-pointer px-8 font-bold shadow-xl shadow-primary/30">
                        <Play className="mr-2 h-4 w-4 fill-current" /> XEM TRAILER
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-white text-white hover:bg-white hover:text-black">
                        <Ticket className="mr-2 h-4 w-4 cursor-pointer" /> ĐẶT VÉ NGAY
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8" />
          <CarouselNext className="right-8" />
        </Carousel>
      </section>

      {/* Main Layout Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 xl:grid-cols-4 gap-12 mb-20">
        
        {/* Left Column (75%) */}
        <main className="xl:col-span-3 flex flex-col gap-16">
          
          {/* Now Playing Section */}
          <section>
            <SectionHeading title="Phim đang chiếu" href="/lich-chieu" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_MOVIES.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
              {/* Repeating for mockup feel */}
              {MOCK_MOVIES.map((movie) => (
                <MovieCard key={`repeat-${movie.id}`} movie={movie} />
              ))}
            </div>
          </section>

          {/* Festival Section */}
          <section>
            <SectionHeading title="Liên hoan phim, Tuần phim" href="/phim-lien-hoan" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="col-span-full h-48 bg-muted rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-primary/20 text-muted-foreground group hover:border-primary transition-all">
                  <Info className="size-10 mb-2 opacity-30 group-hover:text-primary group-hover:opacity-100 transition-all" />
                  <p className="font-bold uppercase tracking-widest text-xs">Hiện tại chưa có sự kiện liên hoan phim</p>
                  <Button variant="link" className="text-primary mt-2">Xem lịch dự kiến</Button>
               </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section>
             <SectionHeading title="Phim sắp chiếu" href="/sap-chieu" />
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {/* Swapping some data for coming soon feel */}
               {MOCK_MOVIES.slice(0, 4).reverse().map((movie) => (
                 <MovieCard key={`soon-${movie.id}`} movie={{...movie, releaseDate: "Sắp ra mắt"}} />
               ))}
             </div>
          </section>

        </main>

        {/* Right Column (25%) */}
        <SidebarBanners />

      </div>
    </div>
  )
}
