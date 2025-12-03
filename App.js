 import React, { useState } from 'react';
import { Sparkles, Atom, Brain, Scroll, MoveRight, MoveLeft, Infinity, Star } from 'lucide-react';

// NOTE FOR DEPLOYMENT:
// 1. Ensure 'lucide-react' is installed: npm install lucide-react
// 2. Ensure Tailwind CSS is configured in your project.
// 3. This component can be used as your main App.js or a sub-component.

const CosmicBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // --- BOOK CONTENT DATA ---
  const bookContent = [
    {
      title: "Prastavana (Introduction)",
      text: "Is pustak mein hum brahmand ke un rahasyon ko suljhane ki koshish karenge jahan Vigyan, Darshan aur Dharm ek dusre se milte hain. Satya ek hai, bas dekhne ke nazariye alag hain.",
      pageNumber: 1
    },
    {
      title: "Vigyan (Science)",
      text: "Brahmand ki utpatti Big Bang se hui ya kisi aur shakti se? Quantum mechanics aur aatma ka kya sambandh hai? Vigyan humein 'kaise' ka uttar deta hai, padarth aur urja ke niyam samjhata hai.",
      pageNumber: 2
    },
    {
      title: "Darshan (Philosophy)",
      text: "Hum kaun hain? Humara uddeshya kya hai? Philosophy humein 'kyun' ka uttar khojne mein madad karti hai. Ye tark, chintan aur aatma-nirikshan ka marg hai.",
      pageNumber: 3
    },
    {
      title: "Dharm (Religion)",
      text: "Vishwaas aur aastha ki shakti. Kya koi paralaukik shakti humein chalati hai? Dharm humein anushasan, karuna aur antarik shanti ka marg dikhata hai.",
      pageNumber: 4
    },
    {
      title: "Brahmaand (The Cosmos)",
      text: "Tare, aakashgangayein aur black holes. Ye sab ek hi cosmic dance ka hissa hain. Hum bhi usi stardust se bane hain jisse tare bane hain.",
      pageNumber: 5
    },
    {
      title: "Nishkarsh (Conclusion)",
      text: "Ant mein, ye teeno raaste ek hi sachai ki taraf jaate hain. Vigyan dimag hai, Darshan drishti hai, aur Dharm dil hai. Teeno ka santulan hi jeevan hai.",
      pageNumber: 6
    },
     {
      title: "Antim Panna",
      text: "Is yatra mein shamil hone ke liye dhanyavaad. Apna nazariya badlein, duniya badal jayegi.",
      pageNumber: 7
    },
    {
      title: "Samapt",
      text: "The End.",
      pageNumber: 8
    }
  ];

  const totalPages = bookContent.length;

  // --- HANDLERS ---
  const openBook = () => {
    setIsOpen(true);
  };

  const closeBook = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setTimeout(() => setCurrentPage(0), 1000);
  };

  const nextPage = (e) => {
    e.stopPropagation();
    if (currentPage < totalPages - 2 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = (e) => {
    e.stopPropagation();
    if (currentPage > 0 && !isFlipping) {
        setCurrentPage(currentPage - 2);
    }
  };

  const leftPageContent = bookContent[currentPage];
  const rightPageContent = bookContent[currentPage + 1];
  const nextLeftContent = bookContent[currentPage + 2];

  // Google Drive Direct Link Logic
  // Using the ID from your link: 1SyFrFkuOFO2Zq5DVppHERPmwDy17zBVd
  const videoUrl = "https://drive.google.com/uc?export=download&id=1SyFrFkuOFO2Zq5DVppHERPmwDy17zBVd";

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden relative font-serif select-none text-slate-200">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-black pointer-events-none"></div>
      
      {/* Stars and Sparkles */}
      <div className="absolute top-10 left-10 text-yellow-100/20 animate-pulse"><Star size={24} /></div>
      <div className="absolute top-20 right-40 text-blue-100/10 animate-pulse delay-300"><Star size={16} /></div>
      <div className="absolute bottom-20 right-20 text-blue-300/20 animate-pulse delay-75"><Sparkles size={32} /></div>
      
      {/* Large Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HEADER --- */}
      <div className={`transition-all duration-1000 absolute top-10 text-center z-10 ${isOpen ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <h1 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-blue-300 font-bold mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          The Cosmic Wisdom
        </h1>
        <p className="text-blue-200/50 text-xs md:text-sm uppercase tracking-[0.4em] animate-pulse">
          Click the Book to Open
        </p>
      </div>

      {/* --- 3D SCENE CONTAINER --- */}
      <div className="relative perspective-2000 w-full max-w-[1000px] h-[600px] flex items-center justify-center z-20">
        
        {/* --- BOOK MAIN WRAPPER --- */}
        <div 
          className={`relative w-[300px] md:w-[380px] h-[480px] md:h-[550px] transition-all duration-[1200ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) transform-style-3d cursor-pointer
            ${isOpen ? 'translate-x-[150px] md:translate-x-[190px]' : 'hover:scale-105 animate-float'}
          `}
          onClick={!isOpen ? openBook : undefined}
        >
          
          {/* =======================
              LAYER 1: BACK PAGES (Right Page)
              Visible when book is open.
             ======================= */}
          <div 
            className={`absolute inset-0 w-full h-full bg-[#fdfbf7] rounded-r-lg shadow-[20px_20px_60px_rgba(0,0,0,0.5)] z-0 flex flex-col overflow-hidden border-l border-gray-300 transition-transform duration-[1200ms]
                ${isOpen ? 'scale-100' : 'scale-[0.96] translate-x-1'} 
            `}
          >
             {/* Content Container (Only visible when open) */}
             <div className={`w-full h-full transition-opacity duration-500 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                {/* Paper Texture Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
                
                <div className="p-8 h-full flex flex-col relative z-10 text-slate-800">
                    <div className="absolute top-4 right-4 text-gray-400 font-sans text-xs">{rightPageContent?.pageNumber}</div>
                    
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                        {rightPageContent ? (
                            <>
                                <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-yellow-500/30 pb-2">{rightPageContent.title}</h2>
                                <p className="text-lg text-gray-800 leading-relaxed font-medium font-serif">{rightPageContent.text}</p>
                                <div className="mt-8 text-yellow-600/30 animate-pulse"><Brain size={48} /></div>
                            </>
                        ) : (
                           <div className="text-gray-300">End</div>
                        )}
                    </div>

                    <div onClick={nextPage} className="absolute bottom-0 right-0 p-6 cursor-pointer hover:bg-yellow-500/10 transition-colors rounded-tl-3xl group">
                        <div className="flex items-center gap-2 text-yellow-700 font-bold text-sm">
                            NEXT <MoveRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Closed Book Spine Effect (Thickness) */}
             {!isOpen && (
                <div className="absolute top-1 bottom-1 right-0 w-4 bg-gradient-to-l from-[#e3e0d6] to-[#fffefb] border-l border-gray-300 shadow-inner">
                    <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(to bottom, transparent 2px, #d1d5db 3px)', backgroundSize: '100% 4px'}}></div>
                </div>
             )}
          </div>


          {/* =======================
              LAYER 2: FLIPPING PAGE (Animation)
             ======================= */}
          {isFlipping && (
             <div 
               className="absolute inset-0 w-full h-full bg-[#fdfbf7] rounded-r-lg shadow-xl z-20 origin-left animate-page-flip transform-style-3d border-l border-gray-300"
               style={{ animation: 'flipLeft 1.2s forwards ease-in-out' }}
             >
                <div className="absolute inset-0 backface-hidden p-8 flex flex-col items-center justify-center bg-[#fdfbf7] text-slate-800">
                    <h2 className="text-xl text-gray-400">{rightPageContent?.title}</h2>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#fdfbf7] p-8 flex flex-col items-center justify-center shadow-inner rounded-l-lg text-slate-800">
                    <h2 className="text-xl text-indigo-900">{nextLeftContent?.title}</h2>
                </div>
             </div>
          )}


          {/* =======================
              LAYER 3: FRONT COVER (Rotatable)
             ======================= */}
          <div 
            className={`absolute inset-0 w-full h-full origin-left transition-transform duration-[1200ms] cubic-bezier(0.645, 0.045, 0.355, 1) transform-style-3d z-30 rounded-r-lg
              ${isOpen ? '-rotate-y-180' : 'rotate-y-0'}
            `}
            style={{ transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg) translateZ(10px)' }} 
          >
            {/* --- FRONT FACE: THE VIDEO COVER --- */}
            <div className="absolute inset-0 backface-hidden z-20 rounded-r-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border-l-4 border-l-yellow-600/80 bg-black">
               
               {/* 1. VIDEO ELEMENT */}
               {!videoError ? (
                 <video 
                   src={videoUrl}
                   className="absolute inset-0 w-full h-full object-cover rounded-r-lg" // Removed mix-blend-screen so it is fully visible
                   autoPlay
                   loop
                   muted
                   playsInline
                   onError={() => setVideoError(true)} // Fallback if Drive link fails
                 />
               ) : (
                 // 2. FALLBACK ANIMATION (If video fails to load)
                 <div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50 animate-pulse"></div>
                    <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-pulse"></div>
                 </div>
               )}
               
               {/* 3. COVER OVERLAYS (Title & Decorations) */}
               {/* Dark gradient at bottom to make text readable over video */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none z-20"></div>
               
               {/* Golden Border */}
               <div className="absolute inset-0 border-[4px] border-yellow-500/30 rounded-r-lg pointer-events-none z-30"></div>

               {/* Cover Text Content */}
               <div className="absolute inset-0 flex flex-col items-center justify-between p-8 z-30">
                  {/* Top Icons */}
                  <div className="flex gap-6 text-yellow-200/90 mt-6 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]">
                     <Atom size={28} className="animate-spin-slow" />
                     <Star size={24} className="animate-pulse" />
                     <Infinity size={28} />
                  </div>

                  {/* Title */}
                  <div className="text-center backdrop-blur-sm p-4 rounded-xl border border-white/10 bg-black/30 transform hover:scale-105 transition-transform">
                     <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 drop-shadow-sm mb-2">
                       TRUTH
                     </h1>
                     <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
                     <p className="text-blue-100 mt-2 text-[10px] md:text-xs tracking-[0.4em] uppercase font-light">
                       Science • Philosophy • Religion
                     </p>
                  </div>

                  {/* Bottom Icon */}
                  <div className="mb-6 opacity-80">
                     <Scroll size={32} className="text-yellow-600 mx-auto drop-shadow-lg" />
                  </div>
               </div>
            </div>

            {/* --- BACK FACE: LEFT PAGE (Inside Cover) --- */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 z-20 bg-[#fdfbf7] rounded-l-lg shadow-inner flex flex-col overflow-hidden border-r-4 border-r-gray-300 text-slate-800">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
               
               <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="absolute top-4 left-4 text-gray-400 font-sans text-xs">{leftPageContent?.pageNumber}</div>

                  <div className="flex-1 flex flex-col justify-center items-center text-center">
                    {leftPageContent ? (
                       <>
                           <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-b-2 border-yellow-500/30 pb-2">{leftPageContent.title}</h2>
                           <p className="text-lg text-gray-800 leading-relaxed font-medium font-serif">{leftPageContent.text}</p>
                           <div className="mt-8 text-blue-600/20"><Atom size={48} /></div>
                       </>
                    ) : (
                       <div className="text-gray-300">Index</div>
                    )}
                  </div>

                   <div 
                      onClick={prevPage}
                      className={`absolute bottom-0 left-0 p-6 cursor-pointer hover:bg-gray-200 transition-colors rounded-tr-3xl group ${currentPage === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                  >
                      <div className="flex items-center gap-2 text-gray-600 font-bold text-sm">
                          <MoveLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> PREV
                      </div>
                  </div>
               </div>
            </div>
          </div>

        </div>

        {/* Close Button */}
        {isOpen && (
            <button 
                onClick={closeBook}
                className="absolute top-4 right-4 md:right-10 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50 flex items-center gap-2"
            >
                <span className="text-xl">✕</span> Close
            </button>
        )}

      </div>

      <style>{`
        @keyframes flipLeft {
          0% { transform: rotateY(0deg); z-index: 50; }
          50% { z-index: 50; }
          100% { transform: rotateY(-180deg); z-index: 50; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateX(2deg) rotateY(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CosmicBook;
