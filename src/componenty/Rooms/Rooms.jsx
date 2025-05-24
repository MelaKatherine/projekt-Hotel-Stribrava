import { useEffect, useState } from 'react';
import { RoomItem } from '../RoomItem/RoomItem';
import { Detail } from '../Detail/Detail';
import { Order } from '../Order/Order';
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
          {rooms.map((room) => (
            <RoomItem name={room.name} price={room.price} image={room.image} />
          ))}
        </div>
        <section class="light">
          <div class="container">
            <h2>Heading</h2>
            <div class="columns-2">
              <Detail />
              <Order />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
