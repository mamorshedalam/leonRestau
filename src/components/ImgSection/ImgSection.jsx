export default function ImgSection({ img, high, title, sub, paras, link, classes }) {

     return (
          <div className={`relative flex items-center justify-center lg:min-h-[32rem] sm:min-h-[28rem] lg:p-12 md:p-9 sm:p-6 p-4 bg-center bg-cover bg-no-repeat before:absolute before:inset-0 before:w-full before:h-full before:backdrop-blur-sm before:z-0 ${classes}`} style={{ backgroundImage: `url(${img})` }}>
               <div className="relative xl:w-2/3 lg:w-3/4 w-full md:p-10 p-5 bg-white/50 border border-neutral-700/30 rounded-lg shadow-lg z-10">
                    <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl uppercase md:font-light text-neutral-800 lg:leading-[1em]">
                         {high && <span className="block lowercase text-fuchsia-700 font-courgette lg:text-6xl md:text-4xl text-3xl leading-[48px]">{high}</span>}
                         {title}
                    </h3>
                    {sub && <span className="block text-neutral-700 mt-2.5 mb-5 text-xs uppercase tracking-[2px]">{sub}</span>}
                    {paras && paras.map((para, index) => (<p key={index} className='leading-loose mb-2'>{para}</p>))}
                    {link && <a href={link} className="text-[11px] font-semibold tracking-widest text-white bg-fuchsia-700 py-2 px-7 uppercase mt-5 rounded">Read More</a>}
               </div>
          </div>
     )
}