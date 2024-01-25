import Header from "./Header"
import Introduction from "./Introduction"

/* //required swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';*/
import Aboutme from "./Aboutme";
import { Hobbies } from "./Hobbies";


const App = (() => {

  return (
    <>
        <div className="md:grid md:grid-cols-2 flex flex-col">
          <div>
            <Header />
          </div>
          <div>
            <Introduction />
          </div>
        </div>
        <div className="flex">
          <Aboutme />
        </div>
        <div>
          <Hobbies />
        </div>
    </>
  )
})

export default App
