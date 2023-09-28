import './Header.css'
import me from './assets/me.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { grey } from '@mui/material/colors';

const Header = () => {
    return(
        <>
            <div className="bg-gradient-to-b  from-reddish-pink from-99% to-pink-300 flex md:h-[100vh] h-[40vh] flex-col">

                <div className='flex px-3 py-3 h-full w-full'>
                    <div className='grid grid-rows-8 gap-1 w-full'>

                        <div className='row-start-1 row-end-2'>
                            <div className='grid grid-cols-2 gap-2 h-full overflow-auto'>
                                <div className='my-auto text-center'>
                                    <h1 className='font-semibold text-4xl text-gray-200 my-auto px-14'>Siddharth Gupta</h1>    
                                </div>
                                <div className='my-auto text-center pr-20'>
                                    <>
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            loop={true}
                                            autoplay={{
                                            delay: 3000,
                                                disableOnInteraction: false,
                                            }}
                                            navigation={false}
                                            modules={[Autoplay, Navigation, Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide><p className='text-4xl text-gray-200 font-semibold'>Web Development</p></SwiperSlide>
                                            <SwiperSlide><p className='text-4xl text-gray-200 font-semibold'>Python</p></SwiperSlide>
                                            <SwiperSlide><p className='text-4xl text-gray-200 font-semibold'>Photography</p></SwiperSlide>
                                            <SwiperSlide><p className='text-4xl text-gray-200 font-semibold'>Fiction</p></SwiperSlide>
                                            {/* <SwiperSlide><p className='text-6xl text-gray-200 font-semibold'>Gaming</p></SwiperSlide> */}
                                        </Swiper>
                                    </>
                                </div>                       
                            </div>
                            
                        </div>

                        <div className='row-start-2 row-end-auto'>
                            <div className='background-inner flex md:h-[50vh] md:w-[50vh] mx-auto my-auto h-[25vh] w-[25vh] rounded-md'>
                                    <div className='py-5 px-5 overflow-hidden'>
                                        <img src={me} className='overflow-hidden rounded-md' alt="It's a me, Mario!"/>
                                    </div>
                            </div>

                            <div className='mt-12 bg-dark-reddish-pink flex h-14 w-[50vh] mx-auto rounded-md justify-evenly pt-1'>
                                <a href='https://twitter.com/Siddharth_lol' target='_blank' rel="noreferrer"><TwitterIcon sx={{ color: grey[50], fontSize: 50 }}/></a>
                                <a href='https://github.com/Siddharth-afk' target='_blank' rel="noreferrer"><GitHubIcon sx={{ color: grey[50], fontSize: 50 }}/></a>
                                <a href='https://www.linkedin.com/in/siddharthgupta2001/' target='_blank' rel="noreferrer"><LinkedInIcon sx={{ color: grey[50], fontSize: 50 }}/></a>
                                <a href='mailto:gupta.siddharth20@gmail.com' target='_blank' rel="noreferrer"><EmailIcon sx={{ color: grey[50], fontSize: 50 }}/></a>
                            </div>  
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Header