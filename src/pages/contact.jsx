import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../assets/ContactUs.jpg";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {

     return (
          <main>
               <section className="flex justify-center items-end md:pb-10 xs:pb-5 pb-3 md:max-h-[720px] xs:max-h-[360px] max-h-[280px] h-[70dvh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
                    <h2 className="text-white tracking-widest font-medium lg:text-6xl md:text-5xl text-3xl uppercase">Contact Us</h2>
               </section>

               <div className="sl-container flex flex-wrap py-9">
                    <section className="xl:w-3/4 md:w-[70%] w-full xl:pr-5 md:pr-3 md:mb-0 mb-8">
                         <p className="py-2">Please feel free to contact us if you have any questions about Marble Restaurant, our wine list or our menu. Please note that it is essential to make a telephonic reservation or contact us on WhatsApp <a href="tel:0644392030">+27 64 439 2030</a> to make a reservation.</p>
                         <p className="py-2"><strong>Fields marked (*) are required.</strong></p>
                         <form className="my-4">
                              <div className="mt-4">
                                   <label htmlFor="name" className="relative font-bold uppercase after:absolute after:top-0 after:-right-2 after:content-['*'] after:text-red-700">Name & Surname:</label>
                                   <input id="name" type="text" className="mt-3 p-1 w-full bg-white text-neutral-700 border border-neutral-200 focus:border-neutral-700" />
                              </div>
                              <div className="mt-4">
                                   <label htmlFor="email" className="relative font-bold uppercase after:absolute after:top-0 after:-right-2 after:content-['*'] after:text-red-700">Email:</label>
                                   <input id="email" type="email" className="mt-3 p-1 w-full bg-white text-neutral-700 border border-neutral-200 focus:border-neutral-700" />
                              </div>
                              <div className="mt-4">
                                   <label htmlFor="message" className="relative font-bold uppercase after:absolute after:top-0 after:-right-2 after:content-['*'] after:text-red-700">Message:</label>
                                   <textarea id="message" rows={10} className="mt-3 p-1 w-full bg-white text-neutral-700 border border-neutral-200 focus:border-neutral-700" ></textarea>
                              </div>
                              <div className="mt-4">
                                   <button className="text-base text-white bg-neutral-800 uppercase font-bold tracking-widest py-2.5 px-5">submit</button>
                              </div>
                         </form>
                    </section>
                    <section className="xl:w-1/4 md:w-[30%] w-full xl:pl-5 md:pl-3">
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Find Us On</h3>
                              <ul className="flex flex-wrap gap-6 text-xl">
                                   <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                   <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                   <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faInstagram} /></a></li>
                              </ul>
                         </div>
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Address</h3>
                              <a href="https://goo.gl/maps/YYL6HJzjZo72" className="block space-x-1.5 leading-relaxed">
                                   <span className="hover:text-yellow-700">Trumpet on Keyes, Corner Keyes & Jellicoe Avenue, Rosebank, Johannesburg, South Africa</span>
                              </a>
                         </div>
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Telephone</h3>
                              <a href="tel:+27105945550" className="block space-x-1.5 leading-relaxed">
                                   <span className="hover:text-yellow-700">+27 10 594 5550</span>
                              </a>
                         </div>
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Email</h3>
                              <a href="mailto:info@marble.restaurant" className="block space-x-1.5 leading-relaxed">
                                   <span className="hover:text-yellow-700">info@marble.restaurant</span>
                              </a>
                         </div>
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Open Hours</h3>
                              <span className="block space-x-1.5 leading-relaxed">Tuesday – Saturday: 12:00 – 22:00</span>
                         </div>
                         <div className="mb-9">
                              <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-2">Online Reservation</h3>
                              <a href="" className="rounded-lg px-6 py-3 bg-yellow-700 text-white font-bold hover:bg-yellow-800">Make an Online Reservation</a>
                              <p className="leading-relaxed mt-5">Online Reservations can only accommodate a party of 10 people or less, reservations for larger groups should be made via one of our other direct channels.</p>
                              <p className="leading-relaxed mt-5">Please note that Online Reservations for Same Day Dinner must be made before 05:30pm.</p>
                         </div>
                    </section>
               </div>

               <section className="">
                    <iframe className="w-full lg:h-[600px] md:h-[400px] h-[280px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13524448.816839933!2d16.64402748517194!3d-34.14973474044363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9564f837f5ce1f%3A0x601d76ed1b9155f2!2sMARBLELIFE%C2%AE%20of%20South%20Africa!5e0!3m2!1sen!2sae!4v1716551047024!5m2!1sen!2sae" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               </section>
          </main>
     )
}