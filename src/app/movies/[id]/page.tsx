"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ArrowLeft, Play, Calendar, Clock, Tag, User } from "lucide-react"

import { FEATURED_MOVIES } from "@/data/movies"
import { Button } from "@/components/ui/button"

export default function MovieDetailPage() {
	const params = useParams()
	const movie = FEATURED_MOVIES.find((m) => m.id === params.id)

	if (!movie) {
		return (
			<div className="flex min-h-screen flex-col items-center justify-center bg-background text-white p-4">
				<h1 className="text-4xl font-black uppercase italic mb-4">Không tìm thấy phim</h1>
				<Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
					<Link href="/">Quay lại trang chủ</Link>
				</Button>
			</div>
		)
	}

	return (
		<main className="min-h-screen bg-background text-white">
			{/* Hero Section with Backdrop */}
			<section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
				<Image
					src={movie.bannerImage}
					alt={movie.title}
					fill
					className="object-cover opacity-40 blur-sm scale-110"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

				<div className="container relative mx-auto h-full flex flex-col justify-end pb-12 px-4">
					<Link
						href="/"
						className="absolute top-8 left-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors group"
					>
						<ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
						Quay lại
					</Link>

					<div className="flex flex-col md:flex-row gap-8 items-end">
						{/* Poster */}
						<div className="relative aspect-[2/3] w-48 md:w-64 shrink-0 overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl animate-in zoom-in-95 duration-700">
							<Image
								src={movie.bannerImage}
								alt={movie.title}
								fill
								className="object-cover"
							/>
							<div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-sm font-black rounded uppercase shadow-lg">
								{movie.rating}
							</div>
						</div>

						{/* Info */}
						<div className="flex-1 space-y-6 pb-4">
							{movie.originalTitle && (
								<p className="text-sm font-bold tracking-[0.3em] text-primary uppercase italic">
									{movie.originalTitle}
								</p>
							)}
							<h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
								{movie.title}
							</h1>

							<div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest text-white/70 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
								<div className="flex items-center gap-2">
									<Calendar className="size-4 text-primary" />
									{movie.releaseDate}
								</div>
								<div className="flex items-center gap-2">
									<Clock className="size-4 text-primary" />
									{movie.duration}
								</div>
								<div className="flex items-center gap-2">
									<Tag className="size-4 text-primary" />
									{movie.genre.join(", ")}
								</div>
							</div>

							<div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
								<Button className="rounded-full h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black uppercase italic tracking-widest shadow-xl shadow-primary/20 group">
									<Play className="mr-2 size-5 fill-current group-hover:scale-110 transition-transform" />
									Xem Trailer
								</Button>
								<Button variant="outline" className="rounded-full h-14 px-10 border-white text-white hover:bg-white hover:text-black font-black uppercase italic tracking-widest transition-all">
									Đặt vé ngay
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="container mx-auto py-20 px-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
					<div className="lg:col-span-2 space-y-12">
						<div className="space-y-4">
							<h2 className="text-2xl font-black uppercase italic border-l-4 border-primary pl-6 tracking-tighter">Nội dung phim</h2>
							<p className="text-white/70 leading-relaxed text-lg">
								{movie.description}
							</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl font-black uppercase italic border-l-4 border-primary pl-6 tracking-tighter">Diễn viên</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{movie.cast.map((actor, idx) => (
									<div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
										<User className="size-6 text-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
										<p className="font-bold text-sm uppercase tracking-tight">{actor}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="space-y-12">
						<div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
							<h3 className="text-xl font-black uppercase italic tracking-tight">Chi tiết</h3>
							<div className="space-y-4 text-sm">
								<div className="flex justify-between border-b border-white/5 pb-2">
									<span className="text-white/40 uppercase font-bold tracking-widest text-[10px]">Đạo diễn</span>
									<span className="font-bold text-primary italic underline underline-offset-4">{movie.director}</span>
								</div>
								<div className="flex justify-between border-b border-white/5 pb-2">
									<span className="text-white/40 uppercase font-bold tracking-widest text-[10px]">Phân loại</span>
									<span className="font-bold px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">{movie.rating}</span>
								</div>
								<div className="flex justify-between border-b border-white/5 pb-2">
									<span className="text-white/40 uppercase font-bold tracking-widest text-[10px]">Ngôn ngữ</span>
									<span className="font-bold">Tiếng Việt, Phụ đề Tiếng Anh</span>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-black uppercase italic tracking-tight">Chia sẻ</h3>
							<div className="flex gap-2">
								{["FB", "TW", "IG"].map((s) => (
									<Button key={s} variant="ghost" size="icon" className="rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary transition-all">
										{s}
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
