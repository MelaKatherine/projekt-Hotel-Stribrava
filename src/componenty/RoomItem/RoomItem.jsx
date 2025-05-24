import './RoomItem.css';
export const RoomItem = ({ id, name, price, image, onRoomSelect }) => {
  return (
    <div className="card" onClick={() => onRoomSelect(id)}>
      <img className="card__image" src={image} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč na osobu</div>
    </div>
  );
};
