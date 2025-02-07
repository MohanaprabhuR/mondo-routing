import ShowModal from "@/components/modal/showmodal";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function InterceptedShowPage({ params }: PageProps) {
  const data = await fetch(
    `${process.env.API_URL}/api/shows/${params.id}?populate=*`
  );
  const show = await data.json();

  return <ShowModal show={show.data} />;
}
