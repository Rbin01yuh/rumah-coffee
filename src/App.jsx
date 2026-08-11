import React, { useState, useEffect } from 'react';
import { Coffee, Star, Wifi, MapPin, Clock, Utensils, Award, Phone, Menu, X, Navigation, MessageCircle, Heart, ShoppingBag } from 'lucide-react';

const business = {
  name: "Rumah Coffee",
  category: "Specialty Coffee Shop & Roastery",
  tagline: "Rumah Tempat Pulang Penikmat Kopi Arabika Pilihan di Tanjung Morawa",
  address: "Perumahan BTN Manggis, Kec. Tanjung Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362",
  district: "Tanjung Morawa",
  coords: { lat: 3.5242, lng: 98.7734 },
  mapsEmbedUrl: "https://maps.google.com/maps?q=3.5242,98.7734&z=16&output=embed",
  googleMapsUrl: "https://maps.google.com/?q=Rumah+Coffee+Tanjung+Morawa",
  hours: "08.00 – 00.00 WIB (Buka Setiap Hari)",
  phone: "+62 813-7520-9911",
  whatsapp: "6281375209911",
  halal: true,
  rating: "4.8",
  reviewsCount: 290,
  established: "2018",
  aboutText: "Rumah Coffee memadukan kenyamanan suasana rumah dengan sajian kopi specialty terbaik. Menyangrai biji kopi pilihan lokal Sumatera Utara secara mandiri (in-house roastery) untuk menghasilkan cita rasa kopi yang otentik.",
  menu: [
    { name: "Kopi Susu Rumah Signature", price: "Rp 22.000", desc: "Espresso house-blend dipadu susu segar creamy dan gula aren murni khas Tanjung Morawa", isPopular: true, image: "/images/hero.png" },
    { name: "Manual Brew V60 Single Origin", price: "Rp 26.000", desc: "Seduh manual biji kopi pilihan (Gayo Wine, Mandheling, Lintong) dengan notas rasa unik", isPopular: true, image: "/images/hero.png" },
    { name: "Dirty Matcha Espresso", price: "Rp 28.000", desc: "Layered drink racikan matcha Uji Jepang premium disiram shot espresso pekat", isPopular: false, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80" },
    { name: "Croissant Butter & Chocolate Paste", price: "Rp 24.000", desc: "Roti croissant renyah bertumpuk mentega kaya rasa disajikan hangat dari oven", isPopular: false, image: "/images/hero.png" }
  ],
  features: ["Specialty Beans House Roastery", "Wi-Fi 100 Mbps Dedicated", "Indoor AC Quiet Workspace", "Barista Experience Class"]
};

// Custom SVG Logo for Rumah Coffee
function RumahCoffeeLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-xl bg-amber-950 p-1.5 border border-amber-600/50 shadow-md flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 18 L82 45 L72 45 L72 82 L28 82 L28 45 L18 45 Z" stroke="#F59E0B" strokeWidth="6" fill="none"/>
          <path d="M42 62 Q50 50 50 70 Q50 50 58 62" stroke="#D97706" strokeWidth="5" fill="none"/>
        </svg>
      </div>
      <div>
        <span className="text-2xl font-bold tracking-tight font-lora text-amber-100 block leading-none">
          RUMAH <span className="text-amber-500">COFFEE</span>
        </span>
        <span className="text-[9px] text-amber-400/80 font-medium tracking-widest uppercase">Tanjung Morawa • Roastery</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-900 selection:text-white">
      
      {/* Header Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/95 backdrop-blur-md border-b border-stone-800 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#">
              <RumahCoffeeLogo />
            </a>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-stone-300 font-lora">
              <a href="#tentang" className="hover:text-amber-400 transition-colors">Roastery</a>
              <a href="#menu" className="hover:text-amber-400 transition-colors">Menu Kopi</a>
              <a href="#lokasi" className="hover:text-amber-400 transition-colors">Lokasi Maps</a>
              <a href="#kontak" className="hover:text-amber-400 transition-colors">Kontak</a>
            </nav>

            <div className="hidden sm:block">
              <a
                href={`https://wa.me/${business.whatsapp}?text=Halo%20Rumah%20Coffee,%20saya%20mau%20pesan/tanya.`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/40 transition-transform hover:scale-105 inline-flex items-center gap-2 font-lora"
              >
                <Phone className="w-4 h-4" />
                <span>Pesan WhatsApp</span>
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-stone-900 border-b border-stone-800 text-white shadow-2xl font-lora">
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-stone-800">Roastery</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-stone-800">Menu Kopi</a>
            <a href="#lokasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-stone-800">Lokasi Maps</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-2">Kontak</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="Rumah Coffee Roastery" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/80 border border-amber-700 text-amber-400 text-xs font-bold uppercase tracking-wider font-lora">
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>Specialty Coffee & In-House Roastery</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-lora leading-tight">
              Rumah Tempat Pulang Penikmat <span className="text-amber-500">Kopi Arabika</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed font-light">
              {business.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-300 font-medium justify-center sm:justify-start">
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="font-bold text-white text-base">{business.rating}</span>
                <span>({business.reviewsCount} Pelanggan)</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400">
                <Wifi className="w-5 h-5" />
                <span>Wi-Fi 100 Mbps Dedicated</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 font-lora">
              <a href="#menu" className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-xl shadow-amber-900/40 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <Utensils className="w-5 h-5" />
                <span>Jelajahi Menu Kopi</span>
              </a>
              <a href="#lokasi" className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-base shadow-md transition-colors flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Petunjuk Peta Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="scroll-mt-24 py-24 bg-stone-900 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-950 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-800 font-lora">
              Roastery Independen
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-lora text-white leading-tight">
              Menyangrai Biji Kopi Pilihan Secara Mandiri
            </h2>
            <p className="text-stone-300 leading-relaxed text-base">
              {business.aboutText}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 font-lora">
              {business.features.map((feat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-stone-950 border border-stone-800 text-xs font-semibold text-stone-200 flex items-center justify-center gap-2 shadow-sm">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="scroll-mt-24 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-950 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-800 font-lora">
            Daftar Menu Kopi & Pastry
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-lora text-white">
            Kopi Susu, V60, & Pastry Oven
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Biji kopi arabika roastery sendiri dipadukan dengan pastry hangat mentega pilihan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.menu.map((item, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between shadow-lg">
              {item.image && (
                <div className="relative h-44 w-full overflow-hidden bg-stone-950">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold font-lora text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.isPopular && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500 text-stone-950 shrink-0 font-lora">
                        FAVORIT
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-800 mt-auto">
                  <span className="text-lg font-bold font-lora text-amber-400">{item.price}</span>
                  <a href={`https://wa.me/${business.whatsapp}?text=Saya%20mau%20pesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold font-lora shadow-md transition-all hover:scale-105 inline-flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section id="lokasi" className="scroll-mt-24 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-8 bg-stone-900 border border-stone-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-800">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-950 text-amber-400 border border-amber-800 font-lora inline-block mb-2">
                Kecamatan {business.district}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-lora text-white">
                Lokasi & Petunjuk Peta Google Maps
              </h3>
            </div>
            <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-600 hover:bg-amber-700 text-white font-lora shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span>Buka Google Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Alamat Kedai</h4>
                  <p className="text-xs font-medium text-stone-200">{business.address}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Jam Buka</h4>
                  <p className="text-xs font-medium text-stone-200">{business.hours}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[350px] rounded-2xl overflow-hidden border border-stone-800">
              <iframe title="Map Rumah Coffee" src={business.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="scroll-mt-24 pt-16 pb-12 bg-black border-t border-stone-900 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-stone-900">
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-lora text-white">{business.name}</h3>
              <p className="max-w-md text-stone-400">{business.tagline}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider font-lora">Kontak & Alamat</h4>
              <p>{business.address}</p>
              <p className="text-amber-400 font-bold">{business.phone}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-stone-600">
            <p>© {new Date().getFullYear()} Rumah Coffee Roastery. All rights reserved.</p>
            <p>Deli Serdang, Sumatera Utara</p>
          </div>
        </div>
      </footer>

      {/* Floating WA */}
      <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 fill-white stroke-emerald-600" />
      </a>
    </div>
  );
}
