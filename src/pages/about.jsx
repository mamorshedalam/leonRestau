import heroImg from "../assets/Our_Story.jpg";
import bannerImg from "../assets/OurStory_Parellax.jpg";
import section1Img from "../assets/DamienGrivas.jpg";
import section2Img from "../assets/PeterMthombeni.jpg";
import section3Img from "../assets/Marble_Restaurant.jpg";
import section4Img from "../assets/KrisjanRossouw.jpg";
import section5Img from "../assets/MervynGers.jpg";

export default function About() {

     return (
          <main>
               <section className="flex justify-center items-end md:pb-10 xs:pb-5 pb-3 md:max-h-[720px] xs:max-h-[360px] max-h-[280px] h-[70dvh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
                    <h2 className="text-white tracking-widest font-medium lg:text-6xl md:text-5xl text-3xl uppercase">Our Story</h2>
               </section>

               <section className="py-12">
                    <div className="sl-container">
                         <div className="relative flex flex-wrap mt-14 mb-20">
                              <div className="lg:w-[65%] w-full ml-auto">
                                   <a href=""><img src={section3Img} alt="" /></a>
                              </div>
                              <div className="lg:absolute left-0 top-10 lg:w-1/2 w-full md:p-10 p-5 bg-white">
                                   <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                        <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Marble</span>
                                        Restaurant
                                   </h3>
                                   <p className='leading-relaxed mt-2'>“Marble is a celebration of quintessential South African fare. It embodies South Africans’ love of cooking with fire, a quality that makes our food culture different from the rest of the world” David Higgs.</p>
                                   <p className='leading-relaxed mt-2'>Situated in Keyes Art Mile, the growing art and food hub of Rosebank, Marble Restaurant boasts a grand wood-fired grill imported from Grill Works in Michigan as the focal point of the restaurant. The concept combines the open-fire trend, seen internationally, with an added pinch of true South African flair.</p>
                                   <p className='leading-relaxed mt-2'>We have long been fascinated by what makes South African cuisine unique, and we believe it’s down to being meat and flame enthusiasts. It is the timeworn ritual of cooking on wood fires and gathering with friends, the shared experience in the preparation. However, it is not just meat which we celebrate in this way, we boast an array of fresh ingredients all cooked on our perfectly prepared coals including fish, poultry, vegetables and breads.</p>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="relative h-96 bg-fixed bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-black/20 before:z-0" style={{ backgroundImage: `url(${bannerImg})` }}></section>


               <section className="py-12">
                    <div className="sl-container">
                         <header className="text-center">
                              <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                   <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Artisans</span>
                                   That Worked On Marble
                              </h2>
                              <p className="text-neutral-700 my-5">Marble Restaurant chose to collaborate with local artisans for all the interior design at Marble. Since we are located in the Keyes Art Mile, it made perfect sense to incorporate art in the interior installations. At Marble, art is expressed in every design element.</p>
                              <span className="block tracking-[2px] text-yellow-700 mb-3.5 font-bold">The four lead artists we worked with are:</span>
                         </header>
                         <div className="relative flex flex-wrap mt-14 mb-20">
                              <div className="lg:w-[65%] w-full">
                                   <a href=""><img src={section1Img} alt="" /></a>
                              </div>
                              <div className="lg:absolute right-0 top-10 lg:w-1/2 w-full md:p-10 p-5 bg-white">
                                   <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                        <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Damien</span>
                                        Grivas
                                   </h3>
                                   <p className='leading-relaxed mt-2'>Damien Grivas, from Johannesburg, who made up the custom wall panels behind our main bar. He also designed and manufactured the cement wall façade at the open kitchen and the hand woven macrame screen inside the main restaurant.</p>
                              </div>
                         </div>
                         <div className="relative flex flex-wrap mt-14 mb-20">
                              <div className="lg:w-[65%] w-full ml-auto">
                                   <a href=""><img src={section2Img} alt="" /></a>
                              </div>
                              <div className="lg:absolute left-0 top-10 lg:w-1/2 w-full md:p-10 p-5 bg-white">
                                   <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                        <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Peter</span>
                                        Mthombeni
                                   </h3>
                                   <p className='leading-relaxed mt-2'>Peter Mthombeni is a ceramic artist based in Johannesburg. He designed and maked up the Dolos figurines in ceramic and installed hundreds of these into a wall feature in the restaurant.</p>
                              </div>
                         </div>
                         <div className="relative flex flex-wrap mt-14 mb-20">
                              <div className="lg:w-[65%] w-full">
                                   <a href=""><img src={section4Img} alt="" /></a>
                              </div>
                              <div className="lg:absolute right-0 top-10 lg:w-1/2 w-full md:p-10 p-5 bg-white">
                                   <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                        <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Krisjan</span>
                                        Rossouw
                                   </h3>
                                   <p className='leading-relaxed mt-2'>Krisjan Rossouw is an art photographer from Cape Town, and we have collaborated with him to showcase 3 of his images, shot exclusively for Marble. These will share our mantra through the art of photography.</p>
                              </div>
                         </div>
                         <div className="relative flex flex-wrap mt-14 mb-20">
                              <div className="lg:w-[65%] w-full ml-auto">
                                   <a href=""><img src={section5Img} alt="" /></a>
                              </div>
                              <div className="lg:absolute left-0 top-10 lg:w-1/2 w-full md:p-10 p-5 bg-white">
                                   <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                                        <span className="block lowercase text-yellow-700 font-georgia italic lg:text-7xl md:text-5xl text-4xl leading-[50px]">Mervyn</span>
                                        Gers
                                   </h3>
                                   <p className='leading-relaxed mt-2'>Mervyn Gers is a ceramic artist based in Cape Town, and specialises in handmade ceramic tableware. He has manufactured our tableware for service and has also maked up our hand painted ceramic wall tiles that are installed in our open kitchen.</p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}