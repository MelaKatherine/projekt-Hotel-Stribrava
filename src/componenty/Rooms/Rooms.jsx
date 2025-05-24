import { useEffect, useState } from 'react';
import { RoomList } from '../RoomList/RoomList';
import './Rooms.css';
export const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      setRooms(responseData.data);
    };

    fetchName();
    //console.log('jsem tady');
  }, []);
  return (
    <section className="dark">
      <div className="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
        <div className="cards-row">
          {console.log(rooms)}
          {rooms.map((room) => (
            <RoomList name={room.name} descr={room.info} image={room.image} />
          ))}
        </div>
      </div>
    </section>
  );
};
