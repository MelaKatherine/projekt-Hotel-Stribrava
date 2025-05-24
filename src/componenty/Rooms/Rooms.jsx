import { RoomList } from '../RoomList/RoomList';
import './Rooms.css';
export const Rooms = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
        <RoomList />
      </div>
    </section>
  );
};
