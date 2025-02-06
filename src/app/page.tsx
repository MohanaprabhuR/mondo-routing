import React from "react";
import ShowCard from "@/components/showCard";

export default async function Home() {
  const data = await fetch(`${process.env.API_URL}/api/shows?populate=*`);
  const shows = await data.json();

  console.log("shows", shows);

  return (
    <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full max-sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-24">
        {shows.data.map((show) => (
          <ShowCard key={show.id} allshows={show} />
        ))}
      </div>
    </div>
  );
}
