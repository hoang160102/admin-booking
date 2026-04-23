"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
  className?: string
}

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link 
      href={`/phim/${movie.id}`}
      className={cn("group flex flex-col gap-3 transition-all", className)}
    >
      {/* Genre & Date Header */}
      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">
        <span className="truncate max-w-[120px]">{movie.genre.join(", ")}</span>
        <span>{movie.releaseDate}</span>
      </div>

      {/* Poster */}
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-muted group-hover:ring-2 ring-primary transition-all shadow-lg group-hover:shadow-primary/20">
        <Image
          src={movie.posterImage}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-yellow-500 border border-yellow-500/20">
          <Star className="size-2.5 fill-current" />
          {movie.rating}
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-sm font-black uppercase leading-tight tracking-tighter group-hover:text-primary transition-colors line-clamp-2 min-h-8">
          {movie.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-1.5 mt-1">
          {/* Age Rating */}
          <span className={cn(
            "text-[10px] font-black px-1.5 py-0.5 rounded border leading-none tracking-tighter",
            movie.ageRating === "P" && "border-green-500 text-green-500",
            movie.ageRating === "T13" && "border-yellow-500 text-yellow-500",
            movie.ageRating === "T16" && "border-orange-500 text-orange-500",
            movie.ageRating === "T18" && "border-primary text-primary"
          )}>
            -{movie.ageRating}
          </span>
          
          {/* Format & Language */}
          <span className="text-[10px] font-bold text-muted-foreground uppercase leading-none opacity-80">
            ({movie.format.join("/")})
          </span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase leading-none opacity-80">
            ({movie.language})
          </span>
        </div>
      </div>
    </Link>
  )
}
