import './style.css';
import { Header } from '../../componenty/Header/Header';
import { Contact } from '../../componenty/Contact/Contact';
import { Rooms } from '../../componenty/Rooms/Rooms';
export const HomePage = () => {
  return (
    <>
      <Header />
      <Rooms />
      <Contact />
    </>
  );
};
