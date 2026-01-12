import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowDown, LuArrowRight, LuInstagram, LuTwitter, LuClock } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

export default function Index() {
  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] font-body overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&family=Syne:wght@400;700;800&display=swap');
        
        :root {
          --font-display: 'Syne', sans-serif;
          --font-body: 'Space Grotesk', sans-serif;
        }
        
        .font-display {
          font-family: var(--font-display);
        }
        
        .font-body {
          font-family: var(--font-body);
        }

        /* Grain Overlay */
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Text Stroke */
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }

        /* Vertical Text */
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
      `}</style>

      {/* Grain Texture Overlay */}
      <div className="grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.04]" />

      {/* Navigation */}
      <nav className="fixed w-full z-40 top-0 left-0 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-bold tracking-tighter uppercase font-display">Mono.</div>
        <div className="hidden md:flex space-x-12 text-sm tracking-widest uppercase opacity-80 font-body">
          <a href="#philosophy" className="hover:text-orange-500 transition-colors">Philosophy</a>
          <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
          <a href="#location" className="hover:text-orange-500 transition-colors">Location</a>
        </div>
        <button className="border border-white/30 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-body">
          Book Table
        </button>
      </nav>

      {/* Vertical Decor */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block mix-blend-difference text-white">
        <p className="vertical-text text-xs tracking-[0.3em] uppercase opacity-50 font-body">Shibuya / Tokyo / Est. 2024</p>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block mix-blend-difference text-white">
        <p className="vertical-text text-lg font-bold tracking-[0.2em] opacity-80 font-display">モノ・コーヒー</p>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
            alt="Dark moody coffee shop" 
            className="w-full h-full object-cover opacity-60 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <Reveal>
            <p className="text-orange-500 tracking-[0.5em] text-xs uppercase mb-4 font-body">The Art of Extraction</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter uppercase leading-[0.9] mix-blend-overlay opacity-90 font-display">
              Mono<br /><span className="text-white opacity-100 mix-blend-normal">Kōhī</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md mx-auto text-neutral-300 font-light text-lg leading-relaxed font-body">
              Precision brewing in the heart of the electric city.
              <span className="block text-xs text-neutral-500 mt-2 uppercase tracking-widest">Shibuya-ku, Tokyo</span>
            </p>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <LuArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 md:px-20 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal className="w-full">
            <div className="relative group overflow-hidden rounded-sm w-full">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop" 
                alt="Pour over coffee detail" 
                className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                <span className="text-xs font-bold bg-white text-black px-2 py-1 uppercase tracking-widest translate-y-10 group-hover:translate-y-0 transition-transform duration-500 block font-body">
                  Hand Drip
                </span>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none font-display">
              Silent <br />
              <span className="text-stroke">Craft.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light font-body">
              In a city that never stops screaming, we offer a whisper. Our beans are sourced from micro-lots in Ethiopia and Colombia, roasted lightly to preserve the complex floral notes.
            </p>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed font-light font-body">
              Every cup is a ritual. No sugar. No syrups. Just the pure, unadulterated soul of the bean, extracted with mathematical precision.
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors font-body">
              <span className="uppercase tracking-widest text-sm">Read our story</span>
              <LuArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Menu Ticker */}
      <div className="border-y border-neutral-800 bg-neutral-900 overflow-hidden py-4">
        <SignatureInteraction type="marquee" speed={20}>
          <span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase mx-8 font-display">Single Origin</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-700 uppercase mx-8 font-display">•</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase mx-8 font-display">Kyoto Cold Brew</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-700 uppercase mx-8 font-display">•</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase mx-8 font-display">Matcha Ceremonial</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-700 uppercase mx-8 font-display">•</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase mx-8 font-display">Hojicha Latte</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-700 uppercase mx-8 font-display">•</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-800 uppercase mx-8 font-display">Espresso Tonic</span>
          <span className="text-4xl md:text-6xl font-bold text-neutral-700 uppercase mx-8 font-display">•</span>
        </SignatureInteraction>
      </div>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 md:px-20 bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-display">Curated <br />Selection</h2>
              <p className="text-neutral-500 uppercase tracking-widest text-sm mt-4 md:mt-0 font-body">Season 04 / Winter 2025</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-y-12">
            {/* Menu Item 1 */}
            <Reveal width="100%">
              <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline border-b border-neutral-800 pb-8 hover:border-white transition-colors cursor-pointer">
                <div>
                  <div className="flex items-baseline space-x-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors font-display">Ethiopia Yirgacheffe</h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 rounded-full font-body">Washed</span>
                  </div>
                  <p className="text-neutral-400 mt-2 font-light font-body">Jasmine, Bergamot, Peach nectar finish.</p>
                </div>
                <div className="text-xl font-mono text-neutral-300">¥800</div>
              </div>
            </Reveal>

            {/* Menu Item 2 */}
            <Reveal width="100%" delay={0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline border-b border-neutral-800 pb-8 hover:border-white transition-colors cursor-pointer">
                <div>
                  <div className="flex items-baseline space-x-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors font-display">The Mono Blend</h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 rounded-full font-body">House</span>
                  </div>
                  <p className="text-neutral-400 mt-2 font-light font-body">Dark chocolate, roasted almond, molasses.</p>
                </div>
                <div className="text-xl font-mono text-neutral-300">¥650</div>
              </div>
            </Reveal>

            {/* Menu Item 3 */}
            <Reveal width="100%" delay={0.2}>
              <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline border-b border-neutral-800 pb-8 hover:border-white transition-colors cursor-pointer">
                <div>
                  <div className="flex items-baseline space-x-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors font-display">Uji Matcha</h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 rounded-full font-body">Ceremonial</span>
                  </div>
                  <p className="text-neutral-400 mt-2 font-light font-body">Hand-whisked, smooth umami, vibrant green.</p>
                </div>
                <div className="text-xl font-mono text-neutral-300">¥900</div>
              </div>
            </Reveal>

             {/* Menu Item 4 */}
             <Reveal width="100%" delay={0.3}>
              <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline border-b border-neutral-800 pb-8 hover:border-white transition-colors cursor-pointer">
                <div>
                  <div className="flex items-baseline space-x-4">
                    <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors font-display">Black Sesame Latte</h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest border border-neutral-800 px-2 rounded-full font-body">Signature</span>
                  </div>
                  <p className="text-neutral-400 mt-2 font-light font-body">Rich nutty sesame paste, oat milk, charcoal dust.</p>
                </div>
                <div className="text-xl font-mono text-neutral-300">¥850</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Break / Gallery */}
      <section className="w-full h-[60vh] md:h-[80vh] relative">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop" 
          alt="Minimalist Cafe Interior" 
          className="w-full h-full object-cover filter brightness-50 grayscale contrast-125"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-6xl md:text-[10rem] font-bold text-transparent text-stroke uppercase opacity-50 font-display">Atmosphere</h2>
        </div>
      </section>

      {/* Location / Footer */}
      <section id="location" className="relative py-32 px-6 md:px-20 bg-[#050505] overflow-hidden">
        {/* Background Tokyo Vibes */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f906991e8c1?q=80&w=2070&auto=format&fit=crop" 
            alt="Tokyo Streets" 
            className="w-full h-full object-cover filter blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display">Find Us.</h2>
              <p className="text-2xl text-neutral-300 font-light mb-12 max-w-md font-body">
                Tucked behind the noise. Look for the concrete fox.
              </p>
              <div className="space-y-2 text-neutral-400 font-mono">
                <p>1-23-4 Jinnan, Shibuya-ku</p>
                <p>Tokyo, Japan 150-0041</p>
                <p className="text-orange-500 mt-4">hello@monocoffee.tokyo</p>
              </div>
              
              <div className="flex gap-6 mt-12">
                <a href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <LuInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <LuTwitter className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Glassmorphism Card */}
          <div className="flex-1 md:max-w-md">
            <Reveal delay={0.2}>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 font-display">
                  <LuClock className="w-5 h-5 text-orange-500" />
                  Opening Hours
                </h3>
                <ul className="space-y-4 text-neutral-300 font-mono text-sm">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon — Fri</span>
                    <span>07:00 — 19:00</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sat — Sun</span>
                    <span>09:00 — 21:00</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest text-xs hover:bg-orange-500 hover:text-white transition-colors font-body">
                    Get Directions
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        
        <div className="relative z-10 mt-32 text-center">
          <p className="text-neutral-600 text-xs uppercase tracking-[0.2em] font-body"> 2026 Mono Kōhī Tokyo. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
