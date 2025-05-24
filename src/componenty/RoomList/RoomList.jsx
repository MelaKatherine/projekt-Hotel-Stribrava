import './RoomList.css';
export const RoomList = ({ name, descr, image }) => {
  return (
    <div className="cards-row">
      <div className="card">
        <img className="card__image" src={image} />
        <div className="card__title">{name}</div>
        <div className="card__body">{descr}</div>
      </div>
    </div>
  );
};
