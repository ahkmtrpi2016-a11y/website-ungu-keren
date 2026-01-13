import React, { useState, useEffect } from 'react';
import { ShoppingCart, BookOpen, Download, Star, ChevronRight, X, Trash2, CheckCircle, Youtube, PlayCircle, Users, Award } from 'lucide-react';

// Data Produk Mockup (Hybrid E-book + YouTube Access)
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Fullstack Web Dev + Private YouTube",
    author: "Budi Santoso",
    price: 250000,
    rating: 4.9,
    category: "Programming",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
    description: "E-book lengkap disertai akses ke 50+ video tutorial eksklusif di Channel YouTube Private."
  },
  {
    id: 2,
    title: "Mastering Ads & Video Marketing",
    author: "Siti Aminah",
    price: 199000,
    rating: 4.8,
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description: "Panduan strategi ads terbaru dengan studi kasus video langsung dari praktisi."
  },
  {
    id: 3,
    title: "Design System Masterclass",
    author: "Rian Pratama",
    price: 225000,
    rating: 4.9,
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
    description: "Belajar UI/UX melalui rekaman sesi live coding dan aset desain profesional."
  },
  {
    id: 4,
    title: "Content Creator Blueprint",
    author: "Dewi Lestari",
    price: 150000,
    rating: 4.7,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
    description: "Langkah demi langkah membangun channel YouTube dari 0 hingga monetisasi."
  }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState('shop'); 
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleCheckout = () => {
    setPurchaseSuccess(true);
    setCart([]);
    setTimeout(() => {
      setPurchaseSuccess(false);
      setView('shop');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('shop')}>
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <Youtube size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">EduStream</span>
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ShoppingCart size={24} className="text-slate-700" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero & Featured YouTube Section */}
      {view === 'shop' && (
        <>
          <header className="bg-slate-900 text-white pt-16 pb-24 px-4 overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  <PlayCircle size={16} className="mr-2" /> Live Learning 2024
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Kuasai Skill Baru via <span className="text-red-500">Video & E-book</span>
                </h1>
                <p className="text-slate-400 text-lg mb-8 max-w-xl">
                  Bukan sekadar teks. Dapatkan paket pembelajaran lengkap dengan video tutorial eksklusif di YouTube Private Channel kami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center transition-all">
                    Lihat Kurikulum <ChevronRight size={20} className="ml-2" />
                  </button>
                  <div className="flex items-center space-x-4 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-300">10k+ Alumni</span>
                  </div>
                </div>
              </div>

              {/* Video Mockup Frame */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt="YouTube Video Preview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle size={40} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                    <p className="text-white font-bold">Preview: Cara Belajar Modern 2024</p>
                    <p className="text-slate-400 text-xs">2.4M Views • Premium Channel</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Bar */}
          <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Youtube />, label: "500+ Video", color: "text-red-500" },
                { icon: <BookOpen />, label: "30+ E-book", color: "text-blue-500" },
                { icon: <Users />, label: "Community", color: "text-green-500" },
                { icon: <Award />, label: "Sertifikat", color: "text-amber-500" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-100">
                  <div className={`${stat.color}`}>{stat.icon}</div>
                  <span className="font-bold text-slate-700">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        {purchaseSuccess ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Akses Dikirim!</h2>
            <p className="text-slate-600 mb-8">E-book dan Link Channel YouTube Private telah dikirim ke email Anda.</p>
            <button 
              onClick={() => setPurchaseSuccess(false)}
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all"
            >
              Kembali Belanja
            </button>
          </div>
        ) : view === 'shop' ? (
          <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-extrabold mb-2">Paket Belajar Digital</h2>
                <p className="text-slate-500">Pilih materi yang sesuai dengan minat karir Anda.</p>
              </div>
              <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2">
                {['Semua', 'Programming', 'Design', 'Marketing'].map(cat => (
                  <button key={cat} className="whitespace-nowrap px-6 py-2 rounded-xl text-sm font-bold border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS_DATA.map((product) => (
                <div key={product.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest flex items-center">
                      <PlayCircle size={10} className="mr-1" /> Video Included
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-amber-500 text-sm mb-3">
                      <Star size={14} fill="currentColor" />
                      <span className="ml-1 font-bold text-slate-700">{product.rating}</span>
                      <span className="ml-2 text-slate-400 font-normal">(120+ reviews)</span>
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-red-600 transition-colors">{product.title}</h3>
                    <p className="text-slate-500 text-xs mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Investasi</span>
                        <span className="font-extrabold text-slate-900">{formatIDR(product.price)}</span>
                      </div>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-slate-900 text-white p-3 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-slate-200"
                      >
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
             <button onClick={() => setView('shop')} className="text-red-600 flex items-center mb-8 font-bold hover:translate-x-[-4px] transition-transform">
               <ChevronRight size={20} className="rotate-180 mr-2" /> Kembali ke Katalog
             </button>
             <h2 className="text-4xl font-black mb-10 text-center">Konfirmasi Pesanan</h2>
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Ringkasan Belanja
                </div>
                <div className="space-y-6 mb-10">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start py-4 border-b border-slate-50">
                      <div>
                        <p className="font-bold text-slate-800 text-lg leading-tight">{item.title}</p>
                        <p className="text-sm text-slate-400">Akses Video + PDF • Qty: {item.qty}</p>
                      </div>
                      <p className="font-extrabold text-slate-900">{formatIDR(item.price * item.qty)}</p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-6">
                    <span className="text-lg font-bold text-slate-500">Total Investasi</span>
                    <span className="text-3xl font-black text-red-600">{formatIDR(totalPrice)}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Alamat Email Aktif</label>
                    <input 
                      type="email" 
                      placeholder="contoh@gmail.com" 
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-red-600 focus:ring-0 outline-none transition-all text-lg" 
                    />
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-[0.97]"
                  >
                    Buka Akses Sekarang
                  </button>
                  <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs mt-6">
                    <Award size={14} />
                    <span>Garansi 100% Link Aman & Terverifikasi</span>
                  </div>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Youtube size={24} className="text-red-600" />
              <span className="font-black text-2xl">EduStream</span>
            </div>
            <p className="text-sm leading-relaxed">Platform belajar digital nomor satu untuk para profesional muda di Indonesia.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold mb-4">Materi</h4>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">Web Development</p>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">UI/UX Design</p>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">Copywriting</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold mb-4">Dukungan</h4>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">Hubungi Kami</p>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">FAQ</p>
              <p className="hover:text-white cursor-pointer transition-colors text-sm">Afiliasi</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4">Berlangganan Info</h4>
            <div className="flex bg-white/5 p-2 rounded-xl border border-white/10">
              <input type="text" placeholder="Email Anda" className="bg-transparent border-none outline-none flex-1 px-3 text-sm text-white" />
              <button className="bg-red-600 text-white p-2 rounded-lg"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-white/5 text-center text-xs">
          © 2024 EduStream Digital. Seluruh hak cipta dilindungi.
        </div>
      </footer>

      {/* Side Cart UI */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md transition-opacity">
          <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Pesanan</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{cart.length} Item terpilih</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-3 hover:bg-white rounded-2xl shadow-sm border border-slate-200 transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart size={40} className="opacity-20" />
                  </div>
                  <p className="font-bold">Belum ada paket dipilih</p>
                  <button onClick={() => setIsCartOpen(false)} className="text-red-600 text-sm mt-4 font-bold hover:underline">Mulai Cari Materi</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="relative w-20 h-24 shrink-0 overflow-hidden rounded-2xl shadow-md">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-red-600/10"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-slate-800 leading-tight mb-1 truncate">{item.title}</h4>
                      <p className="text-sm text-red-600 font-black mb-3">{formatIDR(item.price)}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-slate-400 hover:text-red-600 text-[10px] font-bold uppercase tracking-widest flex items-center transition-colors"
                      >
                        <Trash2 size={12} className="mr-2" /> Lepas Pesanan
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-slate-100 bg-white">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-slate-500 font-bold">Subtotal Investasi</span>
                  <span className="text-3xl font-black text-slate-900">{formatIDR(totalPrice)}</span>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    setView('checkout');
                  }}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all flex items-center justify-center shadow-xl shadow-slate-200"
                >
                  Checkout Sekarang <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;