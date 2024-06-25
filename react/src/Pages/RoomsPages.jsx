import { useQuery } from "@tanstack/react-query";
import Room from "../components/Room";

const fetchPoints = async () => {
  const response = await fetch("/api/rooms");
  const data = await response.json();
  return data;
};

export default function RoomsPages() {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: fetchPoints,
  });

  function handleId(id) {
    console.log(id);
  }

  return (
    <>
      {isLoading && <h1>RoomsLoading...</h1>}
      {data?.rooms.map((room) => {
        const { id } = room;
        return <Room key={id} onGetId={handleId} room={room} />;
      })}
    </>
  );
}
