import { motion } from "motion/react";
import {
  BookOpen,
  Shield,
  Users,
  BarChart3,
  MessageCircle,
  CreditCard,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  GraduationCap,
  Heart,
  Lock,
  Smartphone,
  Award,
  TrendingUp,
  Calendar,
  FileText,
  Bell,
  Camera,
  MapPin,
} from "lucide-react";

const NAV_LINKS = ["Fitur", "Portal", "Manfaat", "Harga", "Kontak"];

const STATS = [
  { value: "500+", label: "Sekolah Aktif", icon: GraduationCap },
  { value: "50K+", label: "Siswa Terkelola", icon: Users },
  { value: "99.9%", label: "Uptime Platform", icon: Zap },
  { value: "5 Portal", label: "Ekosistem Terintegrasi", icon: Globe },
];

const PORTALS = [
  {
    num: "01",
    title: "Admin",
    subtitle: "Pusat Kendali Operasional",
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-400/10 border-cyan-400/30",
    icon: BarChart3,
    features: [
      { icon: CreditCard, text: "Finansial & RKAS Kontrol — Otomasi SPP & validasi anggaran real-time" },
      { icon: Shield, text: "Gate Scanner Keamanan — QR Code penjemputan & delegasi darurat" },
      { icon: Bell, text: "Broadcast & Moderasi — Pengingat tertarget & jam tenang chat" },
      { icon: TrendingUp, text: "Analytics Dashboard — Visualisasi statistik sekolah & keuangan" },
    ],
  },
  {
    num: "02",
    title: "Guru",
    subtitle: "Asisten Pengajaran & Evaluasi",
    color: "from-violet-400 to-purple-600",
    bg: "bg-violet-400/10 border-violet-400/30",
    icon: BookOpen,
    features: [
      { icon: FileText, text: "RPP Instan — Bank Template otomatis terintegrasi kurikulum Merdeka/Cambridge/IB" },
      { icon: Heart, text: "Observasi Holistik — Catatan harian dengan bukti foto/video & rating BB/MB/BSH/BSB" },
      { icon: Zap, text: "Sistem Pemicu Intervensi — Deteksi otomatis siswa yang butuh penanganan khusus" },
      { icon: Award, text: "Kalkulasi Rapor Otomatis — Nilai formatif langsung jadi nilai rapor final" },
    ],
  },
  {
    num: "03",
    title: "Orang Tua",
    subtitle: "Portal Informasi & Pembayaran",
    color: "from-emerald-400 to-green-600",
    bg: "bg-emerald-400/10 border-emerald-400/30",
    icon: Users,
    features: [
      { icon: MessageCircle, text: "Buku Penghubung Digital — Chat real-time & portofolio karya anak interaktif" },
      { icon: Camera, text: "E-Book Generator — Kompilasi otomatis kenangan semester jadi PDF" },
      { icon: CreditCard, text: "Pembayaran Terintegrasi — SPP online multi-gateway (Midtrans/Stripe)" },
      { icon: CheckCircle, text: "Persetujuan Digital — Review & tanda tangan program intervensi" },
    ],
  },
  {
    num: "04",
    title: "HRIS Guru",
    subtitle: "Kepegawaian & Geofencing",
    color: "from-orange-400 to-amber-500",
    bg: "bg-orange-400/10 border-orange-400/30",
    icon: Smartphone,
    features: [
      { icon: MapPin, text: "Absensi GPS — Clock-in/out berbasis kuncian lokasi GPS sekolah" },
      { icon: Calendar, text: "Cuti & Izin Elektronik — Pengajuan sakit/cuti langsung dari ponsel" },
      { icon: FileText, text: "E-Slip Gaji — Slip gaji bulanan PDF aman di genggaman" },
      { icon: BookOpen, text: "LMS Kalibrasi — Kuis penyamaan persepsi standar nilai antar guru" },
    ],
  },
  {
    num: "05",
    title: "Portal Publik",
    subtitle: "Branding & PPDB Digital",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-400/10 border-pink-400/30",
    icon: Globe,
    features: [
      { icon: Globe, text: "Virtual Tour 360° — Tampilkan fasilitas sekolah secara interaktif online" },
      { icon: FileText, text: "PPDB Online — Pendaftaran siswa baru mandiri & upload dokumen" },
      { icon: BookOpen, text: "Blog Parenting — Content marketing sekolah melalui artikel edukasi" },
      { icon: Calendar, text: "Kalender Akademik Publik — Info kegiatan & FAQ mudah diakses" },
    ],
  },
];

const USPS = [
  {
    icon: Heart,
    title: "Holistic Child Development",
    desc: "Lacak perkembangan motorik, kognitif, sosial, dan kesehatan setiap anak secara visual dan berbasis data.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Zap,
    title: "Collaborative Intervention System",
    desc: "Algoritma pintar mendeteksi siswa yang butuh penanganan, menyusun rekomendasi, dan melacak efektivitasnya.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: MessageCircle,
    title: "Digitalized Parent-Teacher Engagement",
    desc: "Ganti buku fisik dengan portofolio digital interaktif, chat real-time, galeri kegiatan, dan reward stiker.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Globe,
    title: "Global Payment Gateway",
    desc: "Integrasi multi-gateway (Midtrans, Doku, Stripe) untuk kemudahan pembayaran SPP online internasional.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

const PRICING = [
  {
    plan: "Small School",
    students: "s/d 150 Siswa",
    badge: null,
    color: "border-border",
    btnColor: "bg-secondary hover:bg-secondary/80 text-foreground",
    features: ["Semua 5 Portal", "Analytics Dasar", "Support Email", "1 Admin Akun"],
  },
  {
    plan: "Medium School",
    students: "s/d 500 Siswa",
    badge: "Paling Populer",
    color: "border-cyan-400/60",
    btnColor: "bg-primary text-primary-foreground hover:bg-primary/90",
    features: ["Semua 5 Portal", "Analytics Lanjutan", "Support Prioritas", "5 Admin Akun", "Custom Domain"],
  },
  {
    plan: "International",
    students: "Unlimited Siswa",
    badge: "Enterprise",
    color: "border-violet-400/60",
    btnColor: "bg-accent text-accent-foreground hover:bg-accent/90",
    features: ["Semua 5 Portal", "White-label Branding", "Dedicated Support", "Unlimited Admin", "Multi-bahasa", "API Akses"],
  },
];

const FLOW_STEPS = [
  { num: "1", title: "Daftar & Setup", desc: "Migrasi data sekolah dibantu tim onboarding kami", color: "bg-cyan-400" },
  { num: "2", title: "Konfigurasi", desc: "Atur kurikulum, kelas, guru, dan orang tua", color: "bg-violet-400" },
  { num: "3", title: "Training", desc: "Pelatihan intensif guru & staf tata usaha", color: "bg-emerald-400" },
  { num: "4", title: "Go Live", desc: "Sekolah beroperasi penuh di platform TalentaSyskoo", color: "bg-amber-400" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-border">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-cyan-400">Talenta</span>
            <span className="text-foreground">Syskoo</span>
          </span>
        </motion.div>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {link}
            </a>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
        >
          Demo Gratis
        </motion.button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-400 text-sm font-medium"
          >
            <Star className="w-4 h-4" />
            Enterprise SaaS Platform v2.5 — Full-Suite Update
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-tight"
          >
            Smart School
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-primary to-violet-400 bg-clip-text text-transparent">
              Management
            </span>
            <br />
            <span className="text-foreground/80">&amp; Teacher-Parent</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Sinergi mutakhir Pusat Kendali Admin (ERP) dan Portal Asisten Pengajaran Guru. Dirancang untuk{" "}
            <span className="text-cyan-400 font-semibold">Efisiensi Kerja</span>,{" "}
            <span className="text-violet-400 font-semibold">Transparansi Tumbuh Kembang</span>, dan{" "}
            <span className="text-emerald-400 font-semibold">Perlindungan Keamanan Siswa</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-cyan-500/30">
              Mulai Demo Gratis <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card hover:bg-secondary transition-colors font-semibold cursor-pointer">
              Lihat Proposal <FileText className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1 p-4 rounded-xl bg-card border border-border">
                <s.icon className="w-5 h-5 text-primary mb-1" />
                <span className="text-2xl font-black text-primary">{s.value}</span>
                <span className="text-xs text-muted-foreground text-center">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section id="manfaat" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Kenapa TalentaSyskoo?</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Nilai Jual Utama</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Lebih dari sekadar software administrasi — sebuah investasi strategis untuk daya saing sekolah Anda.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USPS.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${u.bg} flex items-center justify-center mb-4`}>
                  <u.icon className={`w-6 h-6 ${u.color}`} />
                </div>
                <h3 className="font-bold text-base mb-2">{u.title}</h3>
                <p className="text-sm text-muted-foreground">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals */}
      <section id="portal" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Arsitektur Platform</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">5 Portal Terintegrasi</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Setiap portal dirancang khusus untuk kebutuhan spesifik pengguna — saling terhubung dalam satu ekosistem.
            </p>
          </motion.div>
          <div className="space-y-8">
            {PORTALS.map((portal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`rounded-2xl border ${portal.bg} p-6 md:p-8`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-56 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-4xl font-black bg-gradient-to-r ${portal.color} bg-clip-text text-transparent`}>
                        {portal.num}
                      </span>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${portal.color} flex items-center justify-center`}>
                        <portal.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black">Portal {portal.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{portal.subtitle}</p>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 gap-3">
                    {portal.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border/50">
                        <f.icon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Proses Onboarding</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Mulai dalam 4 Langkah</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-cyan-400 via-violet-400 via-emerald-400 to-amber-400" />
            <div className="grid md:grid-cols-4 gap-8">
              {FLOW_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white text-3xl font-black mb-4 shadow-lg`}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Keamanan &amp; Kepercayaan</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Standar Enterprise</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Enkripsi End-to-End", desc: "Data siswa & transaksi dienkripsi sepenuhnya. Tidak ada akses pihak ketiga.", color: "text-cyan-400", bg: "bg-cyan-400/10" },
              { icon: Shield, title: "Gate Scanner Keamanan", desc: "Sistem QR Code penjemputan & delegasi darurat mencegah insiden penjemputan oleh pihak tidak berwenang.", color: "text-violet-400", bg: "bg-violet-400/10" },
              { icon: MapPin, title: "Geofencing HRIS", desc: "Absensi guru berbasis GPS — clock-in hanya bisa dilakukan dalam radius lokasi sekolah.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Model Harga</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Paket Berlangganan</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Biaya berdasarkan kuota murid aktif. Mulai dari sekolah kecil hingga jaringan yayasan internasional.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border-2 ${p.color} bg-card flex flex-col`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {p.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-black">{p.plan}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.students}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer ${p.btnColor}`}>
                  Hubungi Sales
                </button>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Semua paket termasuk Setup Fee &amp; Training intensif. Harga disesuaikan kebutuhan yayasan Anda.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 border border-primary/30 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Siap Transformasi{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Sekolah Anda?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Bergabunglah dengan 500+ sekolah yang telah meningkatkan akreditasi, produktivitas guru, dan kepuasan orang tua dengan TalentaSyskoo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-cyan-500/30">
                Mulai Demo Gratis <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border hover:bg-secondary transition-colors font-semibold cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold">
              <span className="text-cyan-400">Talenta</span>Syskoo
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} TalentaSyskoo by NexusSinergi. All Rights Reserved.
          </p>
          <a href="https://nexussinergi.id" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            nexussinergi.id
          </a>
        </div>
      </footer>
    </div>
  );
}
