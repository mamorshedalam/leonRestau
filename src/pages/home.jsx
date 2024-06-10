import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero1Img from "../assets/banner/Marble-banner-bg-1.jpg";
import hero2Img from "../assets/banner/Marble-banner-bg-2.jpg";
import hero3Img from "../assets/banner/Marble-banner-bg-3.jpg";
import hero4Img from "../assets/banner/Marble-banner-bg-4.jpg";
import section1Img from "../assets/Marble_DiscoverOurStory_2018.jpg";
import section2Img from "../assets/Mile-8-Book_01.jpg";
import section3Img from "../assets/Dining_Experience.jpg";
import section4Img from "../assets/Marble_Shopify-Gift-Card_Wine.jpg";
import slide1Img from "../assets/slider/Marble_SlideBanner_2018_01.jpg";
import slide2Img from "../assets/slider/Marble_SlideBanner_2018_02.jpg";
import slide3Img from "../assets/slider/Marble_SlideBanner_2018_03.jpg";
import slide4Img from "../assets/slider/Marble_SlideBanner_2018_04.jpg";
import banner1Img from "../assets/marble-awards-bg.jpg";
import ImgSection from '../components/ImgSection/ImgSection';

export default function Home() {

     return (
          <main>
               <Swiper
                    loop={true}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    navigation={{
                         nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    <SwiperSlide><div className="h-dvh bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero1Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="h-dvh bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero2Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="h-dvh bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero3Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="h-dvh bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${hero4Img})` }}></div></SwiperSlide>
                    <button className="swiper-button-prev absolute md:!w-12 !w-9 md:!h-12 !h-9 text-sm border border-white rounded-full !text-white opacity-70 hover:opacity-80 after:hidden">
                         <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="swiper-button-next absolute md:!w-12 !w-9 md:!h-12 !h-9 text-sm border border-white rounded-full !text-white opacity-70 hover:opacity-80 after:hidden">
                         <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 text-white text-center">
                         <h1 className="md:text-8xl xs:text-6xl text-4xl font-bold tracking-widest uppercase md:mb-4 xs:mb-2">Epicure</h1>
                         <p className='md:text-xl xs:text-base text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
               </Swiper>

               <section className="py-12">
                    <div className="sl-container">
                         <header className="text-center uppercase">
                              <h2 className="text-2xl font-light">I’ve long been fascinated by what makes South African fare unique.</h2>
                              <span className="block text-[11px] tracking-[2px] text-fuchsia-500 mt-2.5 mb-3.5 font-bold">Partner & Chef David Higgs</span>
                         </header>
                         <ImgSection img={section1Img}
                              link="/"
                              classes="md:mt-20 mb-9"
                              high="Discover" title="OurStory"
                              sub="Ultimate dining experience like no other"
                              paras={["Marble is a celebration of quintessential South African fare and cooking on fire Marble embodies South Africans’ love of cooking with fire, a quality that makes our food culture different from the rest of the world” David Higgs.",
                                   "Situated in Keyes Art Mile, the growing art and food hub of Rosebank, Marble Restaurant will boast a grand wood-fired grill imported from Grill Works situated in Michigan as the focal point of the restaurant. The concept combines the open-fire trend seen internationally with an added dose of good South African flair."]} />
                         <ImgSection img={section2Img}
                              link="/"
                              classes="lg:mt-20 sm:mt-12 mb-9"
                              high="Mile8" title="by David Higgs"
                              sub="A book about cooking"
                              paras={["With over 90 dishes and 150 recipes influenced by the journey of Higgs’ career, Mile 8 is a culinary adventure bringing together the unique and interesting flavours of Southern Africa.",
                                   "Add a copy to your collection or order as the perfect gift for a taste adventure enthusiast."]} />
                    </div>
               </section>

               <Swiper
                    loop={true}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    navigation={{
                         nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    <SwiperSlide><div className="md:h-[600px] h-[300px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${slide1Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="md:h-[600px] h-[300px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${slide2Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="md:h-[600px] h-[300px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${slide3Img})` }}></div></SwiperSlide>
                    <SwiperSlide><div className="md:h-[600px] h-[300px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${slide4Img})` }}></div></SwiperSlide>
                    <button className="swiper-button-prev absolute md:!w-12 !w-9 md:!h-12 !h-9 text-sm border border-white rounded-full !text-white opacity-70 hover:opacity-80 after:hidden">
                         <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="swiper-button-next absolute md:!w-12 !w-9 md:!h-12 !h-9 text-sm border border-white rounded-full !text-white opacity-70 hover:opacity-80 after:hidden">
                         <FontAwesomeIcon icon={faChevronRight} />
                    </button>
               </Swiper>

               <section className="py-12">
                    <div className="sl-container">
                         <ImgSection img={section3Img}
                              link="/"
                              classes="lg:mt-20 sm:mt-12 mb-9"
                              high="Dining" title="Experience"
                              sub="Ultimate Dining Experience like no other"
                              paras={["Marble offers Joburg diners something different – not just a plate of food, but a theatre of experience. Marble celebrates the quintessential South African tradition of cooking on fire – and not just meat, but all types of ingredients cooked on coals – including fish, poultry, vegetables and breads. The wine list has been painstakingly put together – it features 100 of the best local and some international wines. Diners can expect a great night out, with delicious food and top-notch service – and one of the best views of the city."]} />
                         <ImgSection img={section4Img}
                              link="/"
                              classes="lg:mt-20 sm:mt-12 mb-9"
                              high="Marble" title="Gift Cards"
                              sub="A book about cooking"
                              paras={["Easily purchase one of our set value gift cards and spoil a friend, a client or a loved one to an ultimate dining experience like no other. An experience that combines the concepts of an open-fire trend seen internationally with an added dose of good South African flair."]} />
                    </div>
               </section>

               <section className="relative h-96 bg-fixed bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/20 before:z-0" style={{ backgroundImage: `url(${banner1Img})` }}>

               </section>

               <section>
                    <div className="sl-container flex flex-wrap">
                         <header className="w-full text-center uppercase">
                              <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl md:font-light text-neutral-800 lg:leading-[1em] py-12">
                                   <span className="block lowercase text-fuchsia-700 font-courgette lg:text-6xl md:text-4xl text-3xl leading-[48px]">Epicure</span>
                                   Award Winning Cuisine
                              </h3>
                         </header>
                         <div className="sm:w-1/2 w-full sm:py-8 space-y-3 leading-relaxed">
                              <p>
                                   2016: Eat Out – Style Award<br />
                                   2016: Best of Joburg – Best Spoil
                              </p>
                              <p>
                                   2017: Conde Nast Gourmet – Style Award<br />
                                   2017: Gourmet Guide – One Plate<br />
                                   2017: Eat Out – Top 20 Nomination<br />
                                   2017: Loerie Grand Prix – Marble’s “Meat Made Luxury” with GRID<br />
                                   2017: House  Garden – Décor  Design Award<br />
                                   2017: Conde Naste Traveller – Hot List
                              </p>
                              <p>
                                   2018: Eat Out – Top 20 Nomination<br />
                                   2018: Best of Joburg – Best Spoil<br />
                                   2018: Eat Out – Top 30<br />
                                   2018: Jenny Handley Gourmet Guide – One Plate
                              </p>
                              <p>
                                   2019: American Express Dining Awards – Top 12<br />
                                   2019: American Express Dining Awards – Pioneer Chef awarded to Chef David Higgs<br />
                                   2019: Haute Grandeur – Africa’s Best Restaurant View<br />
                                   2019: Haute Grandeur – Best Grill<br />
                                   2019: Haute Grandeur – Best African Cuisine<br />
                                   2019: Gourmet Guide – One Plate<br />
                                   2019: Best of Joburg Readers’ Choice Awards – Best Fine Dining Spoil Yourself Restaurant<br />
                                   2019: Santam Awards – Most Loved Local Business
                              </p>
                         </div>
                         <div className="sm:w-1/2 w-full sm:py-8 space-y-3 leading-relaxed">
                              <p>
                                   2020: American Express Dining Awards – Excellence Award<br />
                                   2020: American Express Dining Awards – Pure SA Choice<br />
                                   2020: American Express Dining Awards – Pioneer Chef awarded to David Higgs
                              </p>
                              <p>
                                   2021: Hosco Annual Luxe Restaurant Awards – Service Excellence Award<br />
                                   2021: Best of Joburg Readers’ Choice Awards – Best Restaurant for a Little Romance<br />
                                   2021: Best of Joburg Readers’ Choice Awards – Best Fine Dining Spoil Yourself Restaurant
                              </p>
                              <p>
                                   2022: Best of Joburg Readers’ Choice Awards – Best Restaurant for a Little Romance<br />
                                   2022: Best of Joburg Readers’ Choice Awards – Best Fine Dining Spoil Yourself Restaurant<br />
                                   2022: Eat Out Woolworths Restaurant Awards – One Star
                              </p>
                         </div>
                    </div>
               </section>


               <section className="py-12">
                    <div className="sl-container flex flex-wrap">
                         <header className="w-full text-center uppercase">
                              <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl md:font-light text-neutral-800 lg:leading-[1em] pb-4">
                                   <span className="block lowercase text-fuchsia-700 font-courgette lg:text-6xl md:text-4xl text-3xl leading-[48px]">Epicure</span>
                                   Feature 2020
                              </h3>
                         </header>
                         <iframe className="w-full lg:h-[600px] md:h-[400px] xs:h-[300] h-[240px]" src="https://www.youtube.com/embed/UmWH4zePd4k?si=Xexhoj6kIvwHPx9A&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
               </section>
          </main>
     )
}