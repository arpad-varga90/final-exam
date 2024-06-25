import { HiArrowNarrowRight } from "react-icons/hi";

export default function Room({ room, onGetId }) {
  return (
    <div className="flex flex-row items-center justify-between w-3/4">
      <div>{room.name}</div>
      <div className="cursor-pointer" onClick={() => onGetId(room.id)}>
        <HiArrowNarrowRight />
      </div>
    </div>
  );
}
