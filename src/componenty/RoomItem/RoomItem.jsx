import './RoomItem.css';
export const RoomItem = ({ name, price, image }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč na osobu</div>
    </div>
  );
};
