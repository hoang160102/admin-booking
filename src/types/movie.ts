export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  bannerImage: string;
  posterImage: string;
  releaseDate: string;
  duration?: string;
  genre: string[];
  director: string;
  cast: string[];
  rating: string;
  ageRating: "P" | "T13" | "T16" | "T18" | "K";
  format: ("2D" | "3D")[];
  language: string;
  trailerUrl?: string;
}
