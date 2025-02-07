import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ShowAttributes {
  name: string;
  poster?: { data: { attributes: { url: string; alternativeText: string } } };
  [key: string]: unknown;
}

interface Show {
  id: number;
  attributes: ShowAttributes;
}

interface ShowCardProps {
  allshows: Show;
}

const ShowCard = ({ allshows }: ShowCardProps) => {
  const posterURL = allshows.attributes.poster?.data?.attributes?.url;
  const posterAlt =
    allshows.attributes.poster?.data?.attributes?.alternativeText ||
    allshows.attributes.name;

  return (
    <div className="transition-transform duration-200 hover:scale-105">
      <Link href={`/shows/${allshows.id}`}>
        <Image
          src={
            posterURL
              ? `${process.env.NEXT_PUBLIC_API_URL}${posterURL}`
              : "/video-poster-placeholder-image.jpg"
          }
          alt={posterAlt}
          width={250}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </Link>
    </div>
  );
};

export default ShowCard;
