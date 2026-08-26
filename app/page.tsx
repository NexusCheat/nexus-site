"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-nexus-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image src="/nexuslogo.png" alt="Nexus" width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-bold gradient-text">NEXUS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-nexus-cyan transition-colors">Özellikler</a>
          <a href="#about" className="hover:text-nexus-cyan transition-colors">Hakkımızda</a>
          <a href="#screenshots" className="hover:text-nexus-cyan transition-colors">Galeri</a>
          <a href="#download" className="bg-nexus-cyan hover:bg-[#1ab8a8] text-white px-5 py-2 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-nexus-cyan/25">
            Hileyi Edin
          </a>
        </div>
        <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-nexus-border px-6 pb-4 flex flex-col gap-3">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-nexus-cyan">Özellikler</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-nexus-cyan">Hakkımızda</a>
          <a href="#screenshots" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-nexus-cyan">Galeri</a>
          <a href="#download" onClick={() => setMenuOpen(false)} className="bg-nexus-cyan text-white px-5 py-2 rounded-lg font-semibold text-center">Hileyi Edin</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        <div className="float-anim inline-block mb-8">
          <Image src="/nexuslogo.png" alt="Nexus Cheat" width={120} height={120} className="rounded-2xl pulse-glow" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          <span className="gradient-text">NEXUS</span>{" "}
          <span className="text-white">CHEAT</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          CS2 için gelişmiş external ESP, aimbot, glow, skin changer ve daha fazlası.
          <br />Güvenli, hızlı ve sürekli güncellenen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="bg-nexus-cyan hover:bg-[#1ab8a8] text-white px-8 py-3 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-nexus-cyan/30 hover:-translate-y-1">
            Hileyi Edin
          </a>
          <a href="#features" className="border border-nexus-border hover:border-nexus-cyan/50 text-gray-300 px-8 py-3 rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
            Özellikleri Keşfet
          </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Çalışıyor
          </div>
          <div>v4.0</div>
          <div>7/24 Destek</div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "👁",
    title: "External ESP",
    desc: "Düşman kutuları, isim, can, mesafe, silah, iskelet ve spectator listesi. Tüm bilgiler ekranda.",
  },
  {
    icon: "🎯",
    title: "Aimbot",
    desc: "Gelişmiş aimbot sistemi. FOV ayarı, smooth, headshot modu ve silah filtreleme.",
  },
  {
    icon: "✨",
    title: "Glow ESP",
    desc: "Düşmanların etrafında parlayan renkli gölgeler. Takım bazlı renk ve rainbow modu.",
  },
  {
    icon: "🔫",
    title: "Skin Changer",
    desc: "Bıçak skinleri dahil tüm silahlar için anlık skin değiştirme. 64+ ikon desteği.",
  },
  {
    icon: "💣",
    title: "Bomb Panel & Timer",
    desc: "Bomb yerleştirme/alma durumu ve geri sayım. Zaman bilgisi ekranda.",
  },
  {
    icon: "📡",
    title: "Radar Hack",
    desc: "Mini-map'te tüm düşmanları göster. Saw Radar modu dahil.",
  },
  {
    icon: "🔔",
    title: "Discord Rich Presence",
    desc: "Discord durumunda Nexus Cheat bilgisi. Sunucu davet linki dahil.",
  },
  {
    icon: "🔄",
    title: "Otomatik Güncelleme",
    desc: "Sunucudan otomatik güncelleme. En yeni özellikler her zaman hazır.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Güçlü Özellikler</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            CS2 deneyimini bir üst seviyeye taşıyan kapsamlı araç seti
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-hover bg-nexus-card border border-nexus-border rounded-xl p-6 cursor-default">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-nexus-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Hakkımızda</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/nexuslogo.png" alt="Nexus" width={200} height={200} className="rounded-2xl glow-border mx-auto md:mx-0" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Nexus Cheat&apos;i Kim Geliştiriyor?</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Nexus Cheat, CS2 oyuncuları için özel olarak geliştirilmiş profesyonel bir external cheat platformudur.
              Sürekli güncellenen yapısıyla her zaman güncel kalır.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Güvenlik odaklı geliştirme yaklaşımı, HWID kilitleme ve lisans sistemi ile yalnızca yetkili
              kullanıcıların erişimine açıktır. Topluluk desteklidir.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-500">Aktif Kullanıcı</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-500">Destek</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">v4</div>
                <div className="text-sm text-gray-500">Sürüm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const shots = [
    { src: "/screenshot1.png", alt: "Nexus ESP Görünüm" },
    { src: "/screenshot2.png", alt: "Nexus Menü" },
    { src: "/screenshot3.png", alt: "Nexus Aimbot" },
    { src: "/screenshot4.png", alt: "Nexus Glow ESP" },
  ];
  return (
    <section id="screenshots" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Galeri</span>
          </h2>
          <p className="text-gray-400">Nexus Cheat&apos;in ekran görüntüleri</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shots.map((s, i) => (
            <div key={i} className="card-hover bg-nexus-card border border-nexus-border rounded-xl overflow-hidden">
              <img src={s.src} alt={s.alt} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="py-24 px-6 bg-nexus-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Hileyi Edin</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Nexus Cheat&apos;i indirin ve CS2 deneyiminizi değiştirin. Lisans anahtarı gereklidir.
        </p>
        <div className="bg-nexus-card border border-nexus-border rounded-2xl p-8 glow-border">
          <Image src="/nexuslogo.png" alt="Nexus" width={80} height={80} className="rounded-xl mx-auto mb-6" />
          <h3 className="text-xl font-bold text-white mb-2">Nexus Cheat v4.0</h3>
          <p className="text-sm text-gray-400 mb-6">Son güncelleme: Bugün &middot; 820 KB</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="https://discord.gg/KrCTerNztx" target="_blank" rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-[#5865F2]/25">
              Discord&apos;a Katıl
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Lisans anahtarı almak için Discord sunucumuza katılın.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
            <div className="text-nexus-cyan text-2xl font-bold mb-1">1.</div>
            <h4 className="text-white font-semibold mb-1">Discord&apos;a Katıl</h4>
            <p className="text-sm text-gray-500">Sunucumuzdan lisans anahtarı al</p>
          </div>
          <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
            <div className="text-nexus-cyan text-2xl font-bold mb-1">2.</div>
            <h4 className="text-white font-semibold mb-1">Hileyi İndir</h4>
            <p className="text-sm text-gray-500">Son versiyonu indir ve çalıştır</p>
          </div>
          <div className="bg-nexus-card border border-nexus-border rounded-xl p-6">
            <div className="text-nexus-cyan text-2xl font-bold mb-1">3.</div>
            <h4 className="text-white font-semibold mb-1">Oynamaya Başla</h4>
            <p className="text-sm text-gray-500">CS2&apos;yi aç ve keyfini çıkar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-nexus-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/nexuslogo.png" alt="Nexus" width={28} height={28} className="rounded-md" />
          <span className="font-bold gradient-text">NEXUS CHEAT</span>
        </div>
        <div className="text-sm text-gray-500">
          &copy; 2026 Nexus Cheat. Tüm hakları saklıdır.
        </div>
        <div className="flex gap-4">
          <a href="https://discord.gg/KrCTerNztx" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-nexus-cyan transition-colors text-sm">Discord</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Screenshots />
      <Download />
      <Footer />
    </main>
  );
}
