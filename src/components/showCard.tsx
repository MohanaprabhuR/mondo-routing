import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Show {
  id: string | number;
  name: string;
  poster?: {
    src: string;
    altText: string;
  };
}

const ShowCard: React.FC<{ allshows: Show }> = ({ allshows }) => {
  return (
    <div className="transition-transform duration-200 hover:scale-105">
      <Link href={`/shows/${allshows.id}`} className="block">
        <Image
          src={allshows.poster?.src || "/video-poster-placeholder-image.jpg"}
          alt={allshows.poster?.altText || "Show image"}
          width={250}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </Link>
    </div>
  );
};

export default ShowCard;
