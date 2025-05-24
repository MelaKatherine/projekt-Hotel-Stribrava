export const Detail = ({ room }) => {
  return (
    <div className="column">
      <img src={room.image} />
      <p>{room.info}</p>
    </div>
  );
};
