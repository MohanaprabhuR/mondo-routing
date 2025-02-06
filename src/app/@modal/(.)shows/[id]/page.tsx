import ShowModal from "@/components/modal/showmodal";

export default async function InterceptedShowPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `${process.env.API_URL}/api/shows/${params.id}?populate=*`
  );
  const show = await data.json();

  return <ShowModal show={show.data} />;
}
