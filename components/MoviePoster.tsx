"use client";

import { Movie, SimilarMovie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MoviePoster({
  index,
  similarityRating,
  movie,
}: {
  index?: number;
  similarityRating?: number;
  movie: Movie | SimilarMovie;
}) {
  const [imgSrc, setImgSrc] = useState(movie.Poster);

  return (
    <Link key={movie._id} href={`/movie/${movie._id}`}>
      <div className="relative">
        <Image
          className="min-w-64 max-w-64 h-96 object-cover rounded-lg shadow-lg"
          width={300}
          height={450}
          src={imgSrc}
          alt={movie.Title}
          onError={() => {
            setImgSrc(
              "https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg"
            );
          }}
        />
        {similarityRating && (
          <div className="absolute w-14 h-14 flex items-center justify-center bottom-0 right-0 bg-orange-300 bg-opacity-90 p-2 rounded-full m-5 font-bold">
            {similarityRating}%
          </div>
        )}
        {index && (
          <div className="absolute text-gray-100 top-32 -left-10 text-9xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {index}
          </div>
        )}

        <div className="py-2">
          <p className="text-lg font-semibold line-clamp-1 w-64">
            {movie.Title}
          </p>
          <p className="text-gray-500 line-clamp-1">{movie.Genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default MoviePoster;
