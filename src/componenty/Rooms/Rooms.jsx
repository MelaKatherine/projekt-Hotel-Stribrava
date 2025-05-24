import { useEffect, useState } from 'react';
import { RoomItem } from '../RoomItem/RoomItem';
import { Detail } from '../Detail/Detail';
import { Order } from '../Order/Order';
import './Rooms.css';
export const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectRoom, setSelectRoom] = useState({});

  const handleRoomSelect = (id) => {
    const room = rooms.find((room) => room.id === id);

    setSelectRoom(room);
    // console.log(room);
  };

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const responseData = await response.json();
      setRooms(responseData.data);
      setSelectRoom(responseData.data[0]);
    };

    fetchName();
    //console.log('jsem tady');
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Nase pokoje</h2>

        <div className="cards-row">
          {rooms.map((room) => (
            <RoomItem
              key={room.id}
              id={room.id}
              name={room.name}
              price={room.price}
              image={room.image}
              onRoomSelect={handleRoomSelect}
            />
          ))}
        </div>
        <section className="light">
          <div className="container">
            <h2>
              Pokoj {selectRoom.name}, {selectRoom.price} kč na osobu na noc
            </h2>
            <div class="columns-2">
              <Detail room={selectRoom} />
              <Order />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
