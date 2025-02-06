import Showdetails from "@/components/showdetails";

export default async function InterceptedShowPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `${process.env.API_URL}/api/shows/${params.id}?populate=*`
  );
  const show = await data.json();

  return <Showdetails show={show.data} />;
}
