export default function Room({ room, onGetId }) {
  const id = room.id;

  return (
    <div>
      <div>{room.name}</div>
      <div onClick={() => onGetId(id)}>
      </div>
    </div>
  );
}
