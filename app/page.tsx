export default function Home() {
  return (
    // Ini background utama menggunakan warna yang kamu setting tadi
        <main className="text-4xl font-bold text-purple-600 mb-4"> Omah Abah
      
      {/* Kartu di tengah */}
      <div className="relative w-full max-w-2xl p-8 rounded-xl border bg-card text-card-foreground shadow-xl overflow-hidden">
        
        {/* Hiasan Gradient Ungu-Pink di atas kartu */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-medium to-pink-medium" />

        <h1 className="text-4xl font-bold tracking-tight text-purple-dark mb-4">
          Selamat Datang
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Lihat! Sekarang warnanya sudah berubah, bukan hitam lagi kan?
          Ini menggunakan palet: <span className="text-pink-dark font-bold">Pink</span> & <span className="text-purple-dark font-bold">Purple</span>.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 transition shadow-lg shadow-purple-light/50">
            Tombol Keren
          </button>
        </div>

      </div>
    </main>
  );
}
