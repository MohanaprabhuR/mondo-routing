"use client";
import Image from "next/image";
import _ from "lodash";
import { useState, useMemo } from "react";

interface Video {
  id: string;
  name: string;
  description: string;
  season: string;
  poster: string;
  original_air_date: string;
}

interface Genre {
  id: string;
  name: string;
}

interface CastMember {
  name: string;
  role?: string;
}

interface Banner {
  src: string;
  alt?: string;
}

interface Poster {
  src: string;
  alt?: string;
}

interface Show {
  name: string;
  description: string;
  banner: Banner;
  poster: Poster;
  genres: Genre[];
  videos: Video[];
  cast_and_crew: CastMember[];
}

interface ShowDetailsProps {
  show: Show;
}

export default function ShowDetails({ show }: ShowDetailsProps) {
  console.log("showsDetails", show);
  const groupedVideos = useMemo(() => {
    return _.groupBy(show?.videos, "season");
  }, [show?.videos]);

  const seasons = useMemo(() => {
    return _.sortBy(Object.keys(groupedVideos));
  }, [groupedVideos]);

  const [selectedSeason, setSelectedSeason] = useState<string>(seasons[0]);

  return (
    <div className="mx-auto py-24 w-full items-center justify-between px-4 xl:max-w-[1280px]">
      <div className="relative rounded-t-2xl overflow-hidden">
        <Image
          src={show?.banner?.src || "/default-banner.jpg"}
          alt={show?.name}
          width={1920}
          height={500}
          priority
          className="w-full h-[500px] object-cover object-center"
        />

        <div
          className="w-full h-full absolute top-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 73.15%, rgba(0, 0, 0, 0.93) 99%)",
          }}
        ></div>
        <button className="px-4 absolute bottom-4 left-[56px] py-2 bg-blue-500 font-normal text-white rounded-md hover:bg-blue-600 transition-colors">
          Watch Now
        </button>
      </div>
      <div className="py-6 px-[56px] bg-black">
        <div className="flex gap-[0_24px]">
          <div>
            <h2 className="text-2xl pb-2 text-white font-semibold">
              {show?.name}
            </h2>
            <ul className="flex pb-4">
              {show?.genres?.map((genre: Genre, index: number) => (
                <li key={genre.id}>
                  {genre.name}
                  {index !== show.genres.length - 1 && " · "}
                </li>
              ))}
            </ul>
            <p className="text-gray-100 dark:text-gray-300 pb-6">
              {show?.description}
            </p>
            <div>
              <p className="text-gray-600 pb-3">Cast & Crew</p>
              <ul className="flex flex-wrap gap-2">
                {show?.cast_and_crew?.map((item: CastMember, index: number) => (
                  <li key={index} className="text-gray-100">
                    {item.name}
                    {index !== show.cast_and_crew.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={show?.poster?.src}
              alt={show?.name}
              width={300}
              height={400}
              className="rounded-lg shadow-lg h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="seasons mt-8">
          {seasons.length > 1 ? (
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="p-3 w-40 block text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {seasons.map((season) => (
                <option key={season} value={season}>
                  Season {season}
                </option>
              ))}
            </select>
          ) : (
            <h3 className="text-lg font-semibold text-white">
              Season {seasons[0]}
            </h3>
          )}

          <div className="mt-6">
            <ul className="">
              {groupedVideos[selectedSeason]?.map(
                (video: Video, index: number) => (
                  <li
                    key={video.id}
                    className="flex items-center gap-[0_24px] mb-6"
                  >
                    <Image
                      src={
                        video.poster || "/video-poster-placeholder-image.jpg"
                      }
                      alt={video.name}
                      width={184}
                      height={275}
                      className="object-cover rounded transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="">
                      <h2 className="text-gray-100 text-xl pb-1 flex items-center gap-1">
                        <span className="text-base text-gray-600">
                          {index + 1}
                        </span>
                        {video.name}
                      </h2>
                      <p className="text-gray-400 text-sm pb-1">
                        {video.description}
                      </p>
                      <p className="text-gray-400 text-sm pb-1">
                        {video.original_air_date}
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
