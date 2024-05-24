import heroImg from "../assets/Marble_SignatureMeat_Parallax.jpg";

export default function Menu() {

     return (
          <main>
               <section className="flex justify-center items-end md:pb-10 xs:pb-5 pb-3 md:max-h-[720px] xs:max-h-[360px] max-h-[280px] h-[70dvh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
                    <h2 className="text-white tracking-widest font-medium lg:text-6xl md:text-5xl text-3xl uppercase">Menu</h2>
               </section>
               <section className="mt-8 lg:py-8 py-5">
                    <div className="sl-container">
                         <p className="py-2.5 text-center">Our menu celebrates the very best of local produce, sourced from our country’s most respected farmers and artisans. Beyond meat, our coals inspire seafood, fish, poultry and fresh, earthy vegetable dishes, not to mention our tempting desserts. Each day a seasonal showstopper pays homage to the delicious diversity of cooking with fire – a dish you simply have to try.</p>
                         <p className="py-2.5 text-center">Awarded chef David Higgs’ quintessential South African fare, with his finishings, flavour and finesse, ensures that there is something for all good food lovers at Marble.</p>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <h2 className="text-center lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">To Start</h2>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8 border-b border-neutral-800">
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Something To Nibble</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R115</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Hummus, baba gannouj, smoked olive tapenade</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Asparagus</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R185</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Wood-fired asparagus, smoked aubergine and garlic cream, pea and dill oil, seed crisp, parmesan</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Marble 'Avo Ritz'</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R175</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Coal fired prawn tails, avocado, prawn mayonnaise, chives</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Overnight Coal Roasted Soup</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R115</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Changes Daily</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Marble Bites</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R205</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">From the grill lamb ribs with chimichurri, smoked peri-peri chicken wings, short rib magwinya with kumquat jam, game skewer</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">French Onion Soup</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R135</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Deep rich classic onion broth, gruyère and emmenthal croutons</p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <h2 className="text-center lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">As An Extra</h2>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8 border-b border-neutral-800">
                              <div className="md:w-1/2 w-full md:min-h-20 min-h-16 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Grilled Chicken</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R95</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3"></p>
                              </div>
                              <div className="md:w-1/2 w-full md:min-h-20 min-h-16 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Grilled Sirloin</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R110</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3"></p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <h2 className="text-center lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">The Works</h2>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8 border-b border-neutral-800">
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Roasted Calabash Cauliflower</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R215</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Roasted calabash cauliflower, tahini puree, pickled leeks zataar dressing</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Pork</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R265</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Grilled pork belly, miso & honey glaze, apple, celery, sultanas slaw, sweet potato, bokchoy, cashew nuts</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Fillet</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R355</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Flame grilled fillet, smoked potato, malt beer cream, gem squash, pickled courgette</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Broccoli</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R235</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Charred dukka broccoli, red pepper béarnaise, mushroom, edamame beans, chili oil, cranberry and almond salsa</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Seabass</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R335</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Open fire grilled seabass, sundried tomato crumb, green peppercorn and lemongrass sauce, dill and sherry vinegar potatoes, feta cream, sugar snaps</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-36 min-h-24 md:mb-9 mb-3 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Salmon</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R355</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">Coal roasted salmon with tarragon and fennel beurre blanc, confit potato, grilled gem lettuce, rocket pesto, pickled radish, peas</p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <header className="text-center space-y-4">
                              <h2 className="lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">Our Signature Meat Cuts</h2>
                              <p className="text-neutral-700">When it comes to meat, we’re obsessed with every detail. It’s what makes us Enthusiasts. From the spacious plains of the coastal Tsitsikamma region to the acres of golden Okanagan fields, we’ve visited every producer, specially selecting every cut on our menu. Renowned for maturity, taste, marbling and distinction, this is some of the world’s most sought after beef.</p>
                         </header>
                         <iframe className="md:h-96 sm:h-72 h-60 md:max-w-[560px] max-w-[480px] w-full mx-auto mt-20" src="https://www.youtube.com/embed/L2RUWnVO4BE?si=Ia6R4PXAzcXydKOn&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <header className="text-center space-y-4">
                              <h2 className="lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">Our Signature Meat Cuts</h2>
                              <p className="text-neutral-700">When it comes to meat, we’re obsessed with every detail. It’s what makes us Enthusiasts. From the spacious plains of the coastal Tsitsikamma region to the acres of golden Okanagan fields, we’ve visited every producer, specially selecting every cut on our menu. Renowned for maturity, taste, marbling and distinction, this is some of the world’s most sought after beef.</p>
                         </header>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8">
                              <div className="md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Sirloin on the Bone 750g</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R1 350</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">42 day dry aged</p>
                              </div>
                              <div className="md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Prime Rib 750g</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R1 450</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">42 day dry aged</p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <h2 className="text-center lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">A Tasting of our Sirloin Selection</h2>
                         <div className="flex flex-wrap justify-center md:mt-12 mt-8">
                              <div className="md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex flex-col items-center gap-y-4 font-semibold uppercase">
                                        <span className="text-yellow-700">Chalmer Sirloin, Migo’s Jersey Sirloin and Silent Valley Wagyu Sirloin</span>
                                        <span>R2 450</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3"></p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <header className="text-center space-y-4">
                              <h2 className="lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">Silent Valley Wagyu, Ingogo, South Africa</h2>
                              <p className="text-neutral-700">With farms established in 1919, Silent Valley Wagyu now proudly produces some of World’s most exquisite beef. The very best of our Signature Range, export grade Wagyu makes its way to Marble.</p>
                         </header>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8">
                              <div className="md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Rib-Eye 400g</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R1 490</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3"></p>
                              </div>
                              <div className="md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Sirloin 300g</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R1 150</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3"></p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="lg:py-8 py-5">
                    <div className="sl-container">
                         <header className="text-center space-y-4">
                              <h2 className="lg:font-light uppercase mb-2.5 tracking-widest lg:text-3xl text-2xl">Chalmar Beef, South Africa</h2>
                              <p className="text-neutral-700">At Chalmar, the perfect balance of science and heart translate to tender, juicy beef of extraordinary quality in every cut.</p>
                         </header>
                         <div className="flex flex-wrap justify-center lg:mt-20 md:mt-12 mt-8">
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Prime Rib 800g</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R585</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">30 day wet aged</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">T-Bone 800G</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R595</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">30 day wet aged</p>
                              </div>
                              <div className="lg:w-1/3 md:w-1/2 w-full md:min-h-16 min-h-12 md:pr-[4%]">
                                   <h4 className="flex items-end font-semibold uppercase">
                                        <span className="text-yellow-700">Tomahawk 1kg</span>
                                        <span className="flex-grow basis-0 border-b-2 border-dotted border-yellow-700/25"></span>
                                        <span>R895</span>
                                   </h4>
                                   <p className="w-3/4 text-neutral-700 mt-3">30 day wet aged</p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}