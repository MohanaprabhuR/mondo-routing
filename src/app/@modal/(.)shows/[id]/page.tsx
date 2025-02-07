import ShowModal from "@/components/modal/showmodal";
interface ShowResponse {
  data: Show;
}
interface Show {
  id: string;
}
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function InterceptedShowPage({ params }: PageProps) {
  const resolvedParams = await params;

  const data = await fetch(
    `${process.env.API_URL}/api/shows/${resolvedParams.id}?populate=*`
  );
  const show: ShowResponse = await data.json();

  return <ShowModal show={show.data} />;
}
