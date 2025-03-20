import Nav from "../../Component/Nav";
import Footer from "../../Component/Footer";
import Eachevent from "./Eachevent";
import './event.css';

const Events = () => {
  return (
    <div>
      <Nav />
      <div className="p-10 pt-28">
        <div className="event px-8 pb-8 rounded-2xl">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <p className="text-[18px] text-white bg-[#73A44B] rounded-2xl py-2 px-4 inline-block mt-10">
              Upcoming Event
            </p>
            <div className="flex flex-col gap-4 mt-[10rem] ">
              <span className="text-white border-[1px] border-white rounded-[100px] text-[18px] py-2 px-6 inline-block">
                28th February, 2025
              </span>
              <p className="text-[30px] font-[700] text-white">
                Lorem Ipsum Dolor Ici Set
              </p>
              <p className="text-white text-[18px]">undisclosed</p>
            </div>
          </div>
        </div>
        <Eachevent />
      </div>
      <Footer />
    </div>
  );
};

export default Events;