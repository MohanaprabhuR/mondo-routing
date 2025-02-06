import React from "react";
import Image from "next/image";
import Link from "next/link";

const ShowCard = ({ allshows }) => {
  return (
    <div className="transition-transform duration-200 hover:scale-105">
      <Link href={`/shows/${allshows.id}`}>
        <Image
          src={allshows.poster?.src || "/fallback-image.jpg"}
          alt={allshows.name}
          width={250}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </Link>
    </div>
  );
};

export default ShowCard;
