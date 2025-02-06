import Image from "next/image";

export default function ShowDetails({ show }) {
  if (!show) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={show.poster?.src}
          alt={show.name}
          width={300}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="flex-1 space-y-4">
          <p>{show.description}</p>
        </div>
      </div>
    </div>
  );
}
