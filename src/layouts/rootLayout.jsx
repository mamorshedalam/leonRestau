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
                              <li><NavLink to={`/`} className={({ isActive }) => isActive ? "text-yellow-700" : "hover:text-yellow-700"}>Home</NavLink></li>
                              <li> <NavLink to={`/menu`} className={({ isActive }) => isActive ? "text-yellow-700" : "hover:text-yellow-700"}>Menu</NavLink></li>
                              <li><NavLink to={`/about`} className={({ isActive }) => isActive ? "text-yellow-700" : "hover:text-yellow-700"}>Our Story</NavLink></li>
                              <li><NavLink to={`/contact`} className={({ isActive }) => isActive ? "text-yellow-700" : "hover:text-yellow-700"}>Contact Us</NavLink></li>
                         </ul>
                    </nav>
               </aside>

               <header className="fixed top-0 left-0 w-full text-white z-[99]">
                    <div className={`md:block hidden bg-cyan-700/85 overflow-hidden sl-animation ${offset > 500 ? "h-0" : "h-8"}`}>
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
                         <div className="sl-container flex flex-wrap justify-between h-full">
                              <a href="" className="flex items-center justify-center">
                                   <svg className={`block fill-yellow-700 w-28 h-8 ${offset > 500 ? "md:block" : "md:hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 164">
                                        <path d="M69.7 5.4L46.3 38.5 22.9 5.4H6.1v77.5H22V29.3l24.1 33.4 24.2-33.4v53.6h15.9V5.4H69.7zM170.4 24h.2L181 55.4h-20.9L170.4 24zm-9.2-18.6l-28 77.5h18l4.8-14.5h29.4l4.9 14.5h17.9l-28-77.5h-19zm110.6 13.4H289c8.7 0 13.1 4.6 13.1 11.4 0 6.5-4.3 11.5-13.2 11.5h-17.1V18.8zM255 5.4v77.5h16.8V54h17.7l12 28.9h18.1l-14.8-31.5C314.4 47.3 319 39.1 319 30c0-12.4-7.6-24.6-29.8-24.6H255zm132.1 44h17.2c7.4 0 12.3 3.3 12.3 9.9 0 6.8-4.8 10.2-12.3 10.2h-17.2V49.4zm0-30.6h14.6c7.9 0 11.8 3.9 11.8 9.3 0 5.8-4 9.6-11.8 9.6h-14.6V18.8zM370.5 5.4v77.5h34.1c17.5 0 28.7-7.9 28.7-22.1 0-9.5-6-15.3-14.5-18 7.2-3.1 11.6-8.4 11.6-16.5 0-12.1-8.6-20.8-27.3-20.8h-32.6v-.1zm113.5 0v77.5h55.3V68.4h-38.5v-63H484zm103 0v77.5h56.9V68.2h-40.2V50h35.4V37h-35.4V20h39.7V5.4H587zM498.1 133v.3c3.2 0 4.7.3 4.7 3.2v14.2c-1.7 1.9-4.1 4.1-7.4 4.1-3.2 0-4.7-2.1-4.7-5.7v-17.4l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v12.6c0 5.4 3.2 7.6 6.6 7.6 4.4 0 7.7-3.5 9.5-5.2v4.6h8.8v-.5c-3.2 0-4.7-.3-4.7-3.2v-20.7l-8.7 1.3zm38.8 0v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-20.7l-8.9 1.3zm-467.7-.8c5.1 0 5.8 6 6 9.8H62.3c.3-5.6 2.8-9.8 6.9-9.8M57.6 144c0 6.6 4.1 12.8 11.5 12.8 6.2 0 9.3-4.3 10.7-7.4l-.5-.2c-1.3 2.8-4.4 6.5-9.2 6.5-5.7 0-8.5-5.2-8.2-13.1h17.7c0-7.6-5.2-10.9-10.6-10.9-5.9 0-11.4 4.6-11.4 12.3m31.7 6.2c0-4.4 2.7-6 6.2-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.9 0-4.9-1.9-4.9-5.6M86 137.7c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8a2.79 2.79 0 0 0-2.1-2.7c.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.4-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.9-8-9.6-8-5.7.3-9.6 3.3-9.6 6.3m169.8 12.5c0-4.4 2.7-6 6.2-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.7 0-4.9-1.9-4.9-5.6m-3.2-12.5c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8 0-1.3-.9-2.4-2.2-2.7.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.3-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3.2 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.9-8-9.6-8-5.7.3-9.5 3.3-9.5 6.3m50.5-.8c-.6-3.6-3.3-5.2-6.3-5.2-4.1 0-7.4 3.2-9.3 5.1v-5.1l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-15.2c1.7-1.7 3.9-3.8 7.1-3.8s4.4 2.1 4.4 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5H308v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-.6 0-1.3-.2-1.7 1.7-1.7 3.9-3.9 7.3-3.9 3.2 0 4.6 2.1 4.6 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3-7.6-6.5-7.6-4.4.1-7.8 3.6-9.6 5.3m35.6-4.7c5.1 0 5.8 6 6 9.8h-13.1c.4-5.6 2.9-9.8 7.1-9.8M327 144c0 6.6 4.1 12.8 11.5 12.8 6.2 0 9.3-4.3 10.7-7.4l-.5-.2c-1.3 2.8-4.4 6.5-9.2 6.5-5.7 0-8.5-5.2-8-13.1h17.7c0-7.6-5.4-10.9-10.6-10.9-6.1 0-11.6 4.6-11.6 12.3m85.4-6.9v-5.2l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-14.8c1.7-1.7 4.1-4.1 7.4-4.1 3.2 0 4.7 2.1 4.7 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3.2-7.6-6.6-7.6-4.6-.1-8.1 3.4-9.8 5.3m102.4 1.2c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.6-3 9.6-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-5.8 0-8.3 3-8.3 6.6m43.6 11.9c0-4.4 2.7-6 6.3-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.8 0-5-1.9-5-5.6m-3.2-12.5c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8a2.79 2.79 0 0 0-2.1-2.7c.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.4-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3.2 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.7-8-9.6-8-5.8.3-9.6 3.3-9.6 6.3m28.3.6c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.6-3 9.6-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8.2 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-6.2 0-8.5 3-8.5 6.6m42.7 0c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.5-3 9.5-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8.2 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-5.9 0-8.4 3-8.4 6.6m-509.8-12.1v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.3 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm322 0v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.1 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm171.4 0v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.1 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm-69.4-2.7c0 1.7 1.3 2.8 3 2.8s2.8-1.1 2.8-2.8c0-1.6-1.3-2.8-2.8-2.8-1.8-.1-3 1-3 2.8m-495.9-4.1l-11.8 29.5-14-29.5H7.8v.5c5.7 0 7.6 2.5 7.3 8.7l-.2 2.5c-1.1 23-1.9 24.6-8.8 24.6v.5h14.8v-.5c-6.6 0-6.5-1.7-5.4-24.6l.3-6.8 14.8 30.1h.5l13.1-32.2 1.3 28.1c.2 3.3-.5 5.4-5.7 5.4v.5h16.4v-.5c-4.9 0-6-1.4-6.2-5.4l-1-24.4c-.2-3.5.3-6 6-6v-.5H44.5zm156.7 0v.5c5.5 0 6 1.6 6 5.1v25.6c0 3.6-.3 5.1-6 5.1v.5h16.4v-.5c-5.5 0-6-1.6-6-5.1v-12h.9c8.4 0 11 1.4 12 7.9h.3V130h-.3c-.9 6.5-3.5 7.9-12 7.9h-.9v-18h4.3c11.5 0 13.7 3.8 15.3 10.9h.3l-.8-11.2h-29.5v-.2zm166.7 0v.5c5.5 0 6 1.6 6 5.1v25.6c0 3.6-.3 5.1-6 5.1v.5h30l1.1-11h-.5c-1.6 6.3-3.3 10.7-15.3 10.7h-5.1v-17.5h.9c8.4 0 11 .9 12 7.4h.3v-15.2h-.3c-.9 6.5-3.5 7.4-12 7.4h-.9v-17.7h4.3c11.5 0 13.7 3 15.3 9.9h.3l-.6-10.4h-29.5v-.4zm-216.3 27.1c0-4.7 2.1-7.4 4.7-9l14.7 14c-2.2 2.5-5.7 4.6-10.3 4.6-7.8.1-9.1-5.9-9.1-9.6m7.4-12.1c-3.3-3.2-4.1-5.8-4.1-8.2 0-4.1 2.7-6.9 6.6-6.9 4.1 0 5.8 2.8 5.8 6.8 0 5.4-3.3 7.6-7.3 9.5l-1-1.2zm-8.2-6.8c0 3.9 2.8 7.3 4.4 8.7l.8.8c-4.7 2.1-9 4.4-9 9.9 0 6.2 5.5 9.8 12.5 9.8 5.2 0 9.3-2.1 12-4.9l4.4 4.3h8.7v-.5c-2.7 0-3.9-.9-6.8-3.6l-3.8-3.6c.8-1.7 1.3-3.6 1.9-6.2.6-3.6.9-5.5 6.5-5.5v-.5h-12.5v.5c3.9 0 5.5.6 5.5 4.1 0 1.6-.3 4.4-1.7 7.3L160.9 136c4.9-1.9 11-3.5 11-9.2 0-4.6-3.8-7.7-9.8-7.7-6.7-.3-11.3 3.4-11.3 8.5m83.5-10v.3c3.2 0 4.7.2 4.7 3.2v31.4c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-36.1l-8.9 1.2zm217.8 0v.3c3.2 0 4.7.2 4.7 3.2v31.4c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-14.8c1.7-1.7 4.1-4.1 7.4-4.1 3.2 0 4.7 2.1 4.7 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5H482v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3.2-7.6-6.6-7.6-4.4 0-7.7 3.5-9.6 5.4v-20.7l-9 1.2z"></path>
                                   </svg>
                                   <svg className={`hidden fill-white w-28 h-8 ${offset < 500 ? "md:block" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 164">
                                        <path d="M69.7 5.4L46.3 38.5 22.9 5.4H6.1v77.5H22V29.3l24.1 33.4 24.2-33.4v53.6h15.9V5.4H69.7zM170.4 24h.2L181 55.4h-20.9L170.4 24zm-9.2-18.6l-28 77.5h18l4.8-14.5h29.4l4.9 14.5h17.9l-28-77.5h-19zm110.6 13.4H289c8.7 0 13.1 4.6 13.1 11.4 0 6.5-4.3 11.5-13.2 11.5h-17.1V18.8zM255 5.4v77.5h16.8V54h17.7l12 28.9h18.1l-14.8-31.5C314.4 47.3 319 39.1 319 30c0-12.4-7.6-24.6-29.8-24.6H255zm132.1 44h17.2c7.4 0 12.3 3.3 12.3 9.9 0 6.8-4.8 10.2-12.3 10.2h-17.2V49.4zm0-30.6h14.6c7.9 0 11.8 3.9 11.8 9.3 0 5.8-4 9.6-11.8 9.6h-14.6V18.8zM370.5 5.4v77.5h34.1c17.5 0 28.7-7.9 28.7-22.1 0-9.5-6-15.3-14.5-18 7.2-3.1 11.6-8.4 11.6-16.5 0-12.1-8.6-20.8-27.3-20.8h-32.6v-.1zm113.5 0v77.5h55.3V68.4h-38.5v-63H484zm103 0v77.5h56.9V68.2h-40.2V50h35.4V37h-35.4V20h39.7V5.4H587zM498.1 133v.3c3.2 0 4.7.3 4.7 3.2v14.2c-1.7 1.9-4.1 4.1-7.4 4.1-3.2 0-4.7-2.1-4.7-5.7v-17.4l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v12.6c0 5.4 3.2 7.6 6.6 7.6 4.4 0 7.7-3.5 9.5-5.2v4.6h8.8v-.5c-3.2 0-4.7-.3-4.7-3.2v-20.7l-8.7 1.3zm38.8 0v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-20.7l-8.9 1.3zm-467.7-.8c5.1 0 5.8 6 6 9.8H62.3c.3-5.6 2.8-9.8 6.9-9.8M57.6 144c0 6.6 4.1 12.8 11.5 12.8 6.2 0 9.3-4.3 10.7-7.4l-.5-.2c-1.3 2.8-4.4 6.5-9.2 6.5-5.7 0-8.5-5.2-8.2-13.1h17.7c0-7.6-5.2-10.9-10.6-10.9-5.9 0-11.4 4.6-11.4 12.3m31.7 6.2c0-4.4 2.7-6 6.2-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.9 0-4.9-1.9-4.9-5.6M86 137.7c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8a2.79 2.79 0 0 0-2.1-2.7c.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.4-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.9-8-9.6-8-5.7.3-9.6 3.3-9.6 6.3m169.8 12.5c0-4.4 2.7-6 6.2-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.7 0-4.9-1.9-4.9-5.6m-3.2-12.5c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8 0-1.3-.9-2.4-2.2-2.7.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.3-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3.2 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.9-8-9.6-8-5.7.3-9.5 3.3-9.5 6.3m50.5-.8c-.6-3.6-3.3-5.2-6.3-5.2-4.1 0-7.4 3.2-9.3 5.1v-5.1l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-15.2c1.7-1.7 3.9-3.8 7.1-3.8s4.4 2.1 4.4 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5H308v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-.6 0-1.3-.2-1.7 1.7-1.7 3.9-3.9 7.3-3.9 3.2 0 4.6 2.1 4.6 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3-7.6-6.5-7.6-4.4.1-7.8 3.6-9.6 5.3m35.6-4.7c5.1 0 5.8 6 6 9.8h-13.1c.4-5.6 2.9-9.8 7.1-9.8M327 144c0 6.6 4.1 12.8 11.5 12.8 6.2 0 9.3-4.3 10.7-7.4l-.5-.2c-1.3 2.8-4.4 6.5-9.2 6.5-5.7 0-8.5-5.2-8-13.1h17.7c0-7.6-5.4-10.9-10.6-10.9-6.1 0-11.6 4.6-11.6 12.3m85.4-6.9v-5.2l-8.8 1.3v.3c3.2 0 4.7.3 4.7 3.2v15.9c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-14.8c1.7-1.7 4.1-4.1 7.4-4.1 3.2 0 4.7 2.1 4.7 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3.2-7.6-6.6-7.6-4.6-.1-8.1 3.4-9.8 5.3m102.4 1.2c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.6-3 9.6-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-5.8 0-8.3 3-8.3 6.6m43.6 11.9c0-4.4 2.7-6 6.3-6 2.1 0 3.9.5 5.5.9v6.6c-1.4 1.9-3.6 4.1-6.8 4.1-2.8 0-5-1.9-5-5.6m-3.2-12.5c0 1.6 1.1 3.2 2.8 3.2 1.6 0 2.7-1.3 2.7-2.8a2.79 2.79 0 0 0-2.1-2.7c.9-1.7 2.7-3.3 6-3.3 4.3 0 5.7 2.7 5.7 6.8v5.7c-1.9-.6-4.4-1.3-6.8-1.3-5.1 0-9.3 2.2-9.3 6.6 0 3.9 3.2 6.5 7.9 6.5 4.3 0 6.6-2.1 8.2-4.1.3 2.5 2.2 3.9 4.6 3.9 3.2 0 4.9-2.4 6-4.6l-.5-.3c-.3.9-1.9 3.9-4.3 3.9-.8 0-1.7-.3-1.7-2.4v-13.4c0-5.8-4.7-8-9.6-8-5.8.3-9.6 3.3-9.6 6.3m28.3.6c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.6-3 9.6-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8.2 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-6.2 0-8.5 3-8.5 6.6m42.7 0c0 8.8 14.5 6.5 14.5 13.1 0 2.5-2.1 4.9-6 4.9-5.5 0-7.6-4.7-8.8-8h-.3l.5 7.3c2.2.5 5.5 1.1 8.4 1.1 6.6 0 9.5-3 9.5-6.8 0-8.7-14.7-6.6-14.7-13.3 0-2.4 1.9-4.6 5.2-4.6 5.1 0 7.3 5.1 8.2 7.3h.3l-.5-7.4c-2.7.6-4.7-.2-7.9-.2-5.9 0-8.4 3-8.4 6.6m-509.8-12.1v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.3 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm322 0v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.1 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm171.4 0v6.2h-4.7v.5h4.7v17.5c0 4.1 2.5 6.2 6.2 6.2 3.5 0 5.5-2.1 7.1-4.1l-.3-.3c-1.1 1.6-2.8 3.3-5.1 3.3-2.7 0-3.6-2.2-3.6-5.1v-17.7h7.6v-.5h-7.6v-6.8l-4.3.8zm-69.4-2.7c0 1.7 1.3 2.8 3 2.8s2.8-1.1 2.8-2.8c0-1.6-1.3-2.8-2.8-2.8-1.8-.1-3 1-3 2.8m-495.9-4.1l-11.8 29.5-14-29.5H7.8v.5c5.7 0 7.6 2.5 7.3 8.7l-.2 2.5c-1.1 23-1.9 24.6-8.8 24.6v.5h14.8v-.5c-6.6 0-6.5-1.7-5.4-24.6l.3-6.8 14.8 30.1h.5l13.1-32.2 1.3 28.1c.2 3.3-.5 5.4-5.7 5.4v.5h16.4v-.5c-4.9 0-6-1.4-6.2-5.4l-1-24.4c-.2-3.5.3-6 6-6v-.5H44.5zm156.7 0v.5c5.5 0 6 1.6 6 5.1v25.6c0 3.6-.3 5.1-6 5.1v.5h16.4v-.5c-5.5 0-6-1.6-6-5.1v-12h.9c8.4 0 11 1.4 12 7.9h.3V130h-.3c-.9 6.5-3.5 7.9-12 7.9h-.9v-18h4.3c11.5 0 13.7 3.8 15.3 10.9h.3l-.8-11.2h-29.5v-.2zm166.7 0v.5c5.5 0 6 1.6 6 5.1v25.6c0 3.6-.3 5.1-6 5.1v.5h30l1.1-11h-.5c-1.6 6.3-3.3 10.7-15.3 10.7h-5.1v-17.5h.9c8.4 0 11 .9 12 7.4h.3v-15.2h-.3c-.9 6.5-3.5 7.4-12 7.4h-.9v-17.7h4.3c11.5 0 13.7 3 15.3 9.9h.3l-.6-10.4h-29.5v-.4zm-216.3 27.1c0-4.7 2.1-7.4 4.7-9l14.7 14c-2.2 2.5-5.7 4.6-10.3 4.6-7.8.1-9.1-5.9-9.1-9.6m7.4-12.1c-3.3-3.2-4.1-5.8-4.1-8.2 0-4.1 2.7-6.9 6.6-6.9 4.1 0 5.8 2.8 5.8 6.8 0 5.4-3.3 7.6-7.3 9.5l-1-1.2zm-8.2-6.8c0 3.9 2.8 7.3 4.4 8.7l.8.8c-4.7 2.1-9 4.4-9 9.9 0 6.2 5.5 9.8 12.5 9.8 5.2 0 9.3-2.1 12-4.9l4.4 4.3h8.7v-.5c-2.7 0-3.9-.9-6.8-3.6l-3.8-3.6c.8-1.7 1.3-3.6 1.9-6.2.6-3.6.9-5.5 6.5-5.5v-.5h-12.5v.5c3.9 0 5.5.6 5.5 4.1 0 1.6-.3 4.4-1.7 7.3L160.9 136c4.9-1.9 11-3.5 11-9.2 0-4.6-3.8-7.7-9.8-7.7-6.7-.3-11.3 3.4-11.3 8.5m83.5-10v.3c3.2 0 4.7.2 4.7 3.2v31.4c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-36.1l-8.9 1.2zm217.8 0v.3c3.2 0 4.7.2 4.7 3.2v31.4c0 3-1.6 3.2-4.7 3.2v.5h13.6v-.5c-3.2 0-4.7-.3-4.7-3.2v-14.8c1.7-1.7 4.1-4.1 7.4-4.1 3.2 0 4.7 2.1 4.7 5.7v13.3c0 3-1.6 3.2-4.7 3.2v.5H482v-.5c-3.2 0-4.7-.3-4.7-3.2v-13.3c0-5.4-3.2-7.6-6.6-7.6-4.4 0-7.7 3.5-9.6 5.4v-20.7l-9 1.2z"></path>
                                   </svg>
                              </a>
                              <nav className="md:flex items-center hidden text-xs font-semibold tracking-[1px] uppercase">
                                   <NavLink to={`/`} className={({ isActive }) => isActive ? "p-2.5 text-yellow-700" : "p-2.5 hover:text-yellow-700"}>Home</NavLink>
                                   <NavLink to={`/menu`} className={({ isActive }) => isActive ? "p-2.5 text-yellow-700" : "p-2.5 hover:text-yellow-700"}>Menu</NavLink>
                                   <NavLink to={`/about`} className={({ isActive }) => isActive ? "p-2.5 text-yellow-700" : "p-2.5 hover:text-yellow-700"}>Our Story</NavLink>
                                   <NavLink to={`/contact`} className={({ isActive }) => isActive ? "p-2.5 text-yellow-700" : "p-2.5 hover:text-yellow-700"}>Contact Us</NavLink>
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
                                   <img src={logoImg} alt="Footer logo" className="max-w-[95%] w-36" />
                                   <p>"Marble is a celebration of quintessential South African fare. It embodies South Africans’ love of cooking with fire, a quality that makes our food culture different from the rest of the world" - David Higgs.</p>
                              </div>
                              <div className="lg:w-1/5 md:w-1/2 w-full mb-9">
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-4">Gallery</h3>
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
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-4">Contact Info</h3>
                                   <a href="https://goo.gl/maps/YYL6HJzjZo72" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <span className="hover:text-yellow-700">Trumpet on Keyes, Corner Keyes & Jellicoe Avenue, Rosebank, Johannesburg, South Africa</span>
                                   </a>
                                   <a href="tel:+27105945550" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span className="hover:text-yellow-700">+27 10 594 5550</span>
                                   </a>
                                   <a href="mailto:info@marble.restaurant" className="block space-x-1.5 leading-relaxed">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span className="hover:text-yellow-700">info@marble.restaurant</span>
                                   </a>
                              </div>
                              <div className="lg:w-1/5 md:w-1/2 w-full mb-9">
                                   <h3 className="font-black tracking-[2px] uppercase text-xs text-yellow-700 mb-4">Social Media</h3>
                                   <ul className="flex flex-wrap gap-6 text-xl">
                                        <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                        <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                        <li><a href="" className="hover:text-yellow-700"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="bg-black/25 text-xs py-8">
                         <div className="sl-container flex flex-wrap items-center">
                              <p className="md:w-1/2 w-full md:mb-0 mb-8">
                                   © Copyright Marble Restaurant
                                   <a href="https://marble.restaurant/terms-conditions/" className="block mt-2 hover:text-yellow-700">Terms Conditions</a>
                              </p>
                              <div className="md:w-1/2 w-full"><img src={paymentImg} alt="" className="w-fit md:ml-auto" /></div>
                         </div>
                    </div>
               </footer>
          </>
     )
}