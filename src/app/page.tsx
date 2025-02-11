"use client";
import React from "react";
import ShowCard from "@/components/showCard";
import { useQuery } from "@tanstack/react-query";

interface Show {
  name: string;
  id: number;
  src: string;
  poster: {
    name: string;
    src: string;
  };
}

export default function Home() {
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/shows`
    );
    const data = await response.json();
    return data;
  };

  // Queries
  const query = useQuery({ queryKey: ["shows"], queryFn: fetchData });

  const { data } = query;

  if (query.isLoading) {
    return (
      <div className="flex justify-center items-center pt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
      </div>
    );
  }

  if (query.isError) {
    return (
      <h3 className="pt-40 text-center w-full text-white">
        Error: {(query.error as Error).message}
      </h3>
    );
  }
  if (!query.data) {
    return (
      <h3 className="pt-40 text-center w-full text-white">No shows found</h3>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1142px] px-4 max-xl:max-w-[960px] max-lg:max-w-[720px] max-md:max-w-[540px] max-sm:max-w-full max-sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-24">
        {data?.data?.map((show: Show) => (
          <ShowCard
            key={show.id}
            allshows={{
              id: show.id,
              name: show?.name,
              poster: {
                src: show?.poster?.src || "/video-poster-placeholder-image.jpg",
                altText: show?.name,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
