import ShowModal from "@/components/modal/showmodal";
interface Show {
  id: string;
}

interface ShowResponse {
  data: Show;
}

interface InterceptedPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function InterceptedShowPage({
  params,
}: InterceptedPageProps) {
  const data = await fetch(
    `${process.env.API_URL}/api/shows/${params.id}?populate=*`
  );
  const show: ShowResponse = await data.json();

  return <ShowModal show={show.data} />;
}
