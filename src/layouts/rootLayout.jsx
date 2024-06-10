import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faBars, faEnvelope, faLocationDot, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoImg from "../assets/logo-y.png";
import footer1Img from "../assets/footer/footer-img-1.jpg";
import footer2Img from "../assets/footer/footer-img-2.jpg";
import footer3Img from "../assets/footer/footer-img-3.jpg";
import footer4Img from "../assets/footer/footer-img-4.jpg";
import footer5Img from "../assets/footer/footer-img-5.jpg";
import footer6Img from "../assets/footer/footer-img-6.jpg";
import paymentImg from "../assets/PayGate-Card-Brand-Logos.png";

export default function RootLayout() {
     const [aside, setAside] = useState(false);
     const [offset, setOffset] = useState(0);

     useEffect(() => {
          window.onscroll = () => {
               setOffset(window.pageYOffset);
          };
     }, []);

     return (
          <>
               <aside className={`fixed inset-0 z-[9999] sl-animation duration-500 ${aside ? "visible opacity-100" : "invisible opacity-0"}`}>
                    <div onClick={() => setAside(!aside)} className={`absolute bg-black/50 backdrop-blur-[1px] inset-0 cursor-pointer z-0 sl-animation-fade ${aside ? "visible opacity-100" : "invisible opacity-0"}`}></div>
                    <nav className={`fixed overflow-hidden right-0 top-0 w-72 py-8 px-10 bg-neutral-950 h-full z-10 sl-animation duration-500 ${aside ? "translate-x-0" : "translate-x-[400px]"}`}>
                         <button onClick={() => setAside(!aside)} className="absolute top-6 right-8 opacity-30 text-neutral-400 text-xl hover:opacity-100"><FontAwesomeIcon icon={faXmark} /></button>
                         <ul className="mt-12 text-neutral-500 space-y-3">
                              <li><NavLink to={`/`} className={({ isActive }) => isActive ? "text-fuchsia-700" : "hover:text-fuchsia-700"}>Home</NavLink></li>
                              <li> <NavLink to={`/menu`} className={({ isActive }) => isActive ? "text-fuchsia-700" : "hover:text-fuchsia-700"}>Menu</NavLink></li>
                              <li><NavLink to={`/about`} className={({ isActive }) => isActive ? "text-fuchsia-700" : "hover:text-fuchsia-700"}>Our Story</NavLink></li>
                              <li><NavLink to={`/contact`} className={({ isActive }) => isActive ? "text-fuchsia-700" : "hover:text-fuchsia-700"}>Contact Us</NavLink></li>
                         </ul>
                    </nav>
               </aside>

               <header className="fixed top-0 left-0 w-full text-white z-[99]">
                    <div className={`md:block hidden bg-fuchsia-500/85 overflow-hidden sl-animation ${offset > 500 ? "h-0" : "h-8"}`}>
                         <div className="sl-container flex flex-wrap items-center justify-between leading-8 font-semibold">
                              <div className="flex gap-x-2.5">
                                   <div className="space-x-2.5">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span className="text-xs">Trumpet on Keyes, Corner Keyes and Jellicoe Avenue, Rosebank</span>
                                   </div>
                                   <a href="tel:+27 10 594 5550" className="space-x-2.5">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span className="text-xs">+27 10 594 5550</span>
                                   </a>
                              </div>
                              <ul className="flex justify-end items-center gap-x-4 text-base">
                                   <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                   <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                   <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                              </ul>
                         </div>
                    </div>
                    <div className={`h-20 bg-white/95 ${offset > 500 ? "md:h-16 text-neutral-800 shadow-md" : "md:h-24 md:bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.4)] to-black/0 md:bg-transparent"}`}>
                         <div className="sl-container flex flex-wrap justify-between items-center h-full">
                              <a href="" className={`text-xl uppercase tracking-[7px] font-extrabold ${offset > 500 ? "text-fuchsia-700" : "text-white"}`}>Epicure</a>
                              <nav className="md:flex items-center hidden text-xs font-semibold tracking-[1px] uppercase">
                                   <NavLink to={`/`} className={({ isActive }) => isActive ? "p-2.5 text-fuchsia-700" : "p-2.5 hover:text-fuchsia-700"}>Home</NavLink>
                                   <NavLink to={`/menu`} className={({ isActive }) => isActive ? "p-2.5 text-fuchsia-700" : "p-2.5 hover:text-fuchsia-700"}>Menu</NavLink>
                                   <NavLink to={`/about`} className={({ isActive }) => isActive ? "p-2.5 text-fuchsia-700" : "p-2.5 hover:text-fuchsia-700"}>Our Story</NavLink>
                                   <NavLink to={`/contact`} className={({ isActive }) => isActive ? "p-2.5 text-fuchsia-700" : "p-2.5 hover:text-fuchsia-700"}>Contact Us</NavLink>
                              </nav>
                              <button onClick={() => setAside(!aside)} className="md:hidden block text-neutral-700 text-2xl"><FontAwesomeIcon icon={faBars} /></button>
                         </div>
                    </div>
               </header >

               <Outlet />

               <footer className="relative bg-gray-900 text-white">
                    <button onClick={() => window.scrollTo({ top: 0 })} className="absolute bottom-5 right-5 flex items-center justify-center bg-zinc-100 text-neutral-800 w-10 h-10 opacity-50 hover:opacity-75"><FontAwesomeIcon icon={faAngleUp} /></button>
                    <div className="py-12">
                         <div className="sl-container flex flex-wrap lg:gap-x-[5%]">
                              <div className="lg:w-1/5 md:w-1/2 w-full pr-[3%] mb-9 space-y-5">
                                   <a href="" className="text-xl uppercase tracking-[7px] font-extrabold text-fuchsia-700">Epicure</a>
                                   <p>"Marble is a celebration of quintessential South African fare. It embodies South Africans’ love of cooking with fire, a quality that makes our food culture different from the rest of the world" - David Higgs.</p>
                              </div>
                              <div className="lg:w-1/5 md:w-1/2 w-full mb-9">
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-fuchsia-700 mb-4">Gallery</h3>
                                   <ul className="flex flex-wrap">
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer1Img} alt="" /></li>
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer2Img} alt="" /></li>
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer3Img} alt="" /></li>
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer4Img} alt="" /></li>
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer5Img} alt="" /></li>
                                        <li className="md:w-1/3 w-1/6 px-1.5 pb-2"><img src={footer6Img} alt="" /></li>
                                   </ul>
                              </div>
                              <div className="lg:w-1/5 md:w-1/2 w-full pr-[3%] mb-9 md:space-y-5 space-y-3">
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-fuchsia-700 mb-4">Contact Info</h3>
                                   <a href="https://goo.gl/maps/YYL6HJzjZo72" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span className="hover:text-fuchsia-700">Trumpet on Keyes, Corner Keyes & Jellicoe Avenue, Rosebank, Johannesburg, South Africa</span>
                                   </a>
                                   <a href="tel:+27105945550" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span className="hover:text-fuchsia-700">+27 10 594 5550</span>
                                   </a>
                                   <a href="mailto:info@marble.restaurant" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span className="hover:text-fuchsia-700">info@marble.restaurant</span>
                                   </a>
                              </div>
                              <div className="lg:w-1/5 md:w-1/2 w-full mb-9">
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-fuchsia-700 mb-4">Social Media</h3>
                                   <ul className="flex flex-wrap gap-6 text-xl">
                                        <li><a href="" className="hover:text-fuchsia-700"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="" className="hover:text-fuchsia-700"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="" className="hover:text-fuchsia-700"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="bg-black/25 text-xs py-8">
                         <div className="sl-container flex flex-wrap items-center">
                              <p className="md:w-1/2 w-full md:mb-0 mb-8">
                                   © Copyright Marble Restaurant
                                   <a href="https://marble.restaurant/terms-conditions/" className="block mt-2 hover:text-fuchsia-700">Terms Conditions</a>
                              </p>
                              <div className="md:w-1/2 w-full"><img src={paymentImg} alt="" className="w-fit md:ml-auto" /></div>
                         </div>
                    </div>
               </footer>
          </>
     )
}