import React, { useState } from 'react';
import { SOCIAL_LINKS, HERO_DATA } from '../data/portfolioData';
import { Check, Copy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const bannerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const formColRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const linksColRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('[PERINGATAN]: Mohon isi semua kolom yang diperlukan (Nama, Email, dan Pesan).');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${HERO_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portfolio] Pesan Baru dari ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setStatusMessage('✓ Pesan berhasil terkirim ke email febriraka34@gmail.com! Terima kasih, saya akan segera merespons.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        const errMsg = data?.message || 'Gagal mengirim pesan ke server email.';
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
      setStatusMessage('[GAGAL]: Terjadi gangguan koneksi saat mengirim pesan. Anda dapat mengirim email secara langsung ke febriraka34@gmail.com.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="kontak" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="animate-on-scroll anim-fade-left flex items-center pb-2 border-b-2 border-black mb-6"
      >
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          06
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          HUBUNGI SAYA
        </h2>
      </div>

      {/* Callout Notice Banner */}
      <div
        ref={bannerRef}
        className="animate-on-scroll anim-fade-up bg-neutral-100 p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-black mb-6 border-l-4 border-black leading-relaxed"
      >
        Apakah Anda memiliki proyek menarik, peluang kerja sama, atau pertanyaan teknis? Kirimkan pesan melalui formulir di bawah ini.
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Form */}
        <div
          ref={formColRef}
          className="animate-on-scroll anim-fade-left border-2 border-black p-5 sm:p-6 bg-white flex flex-col justify-between"
        >
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            {/* Field: Full Name */}
            <div>
              <label htmlFor="input-name" className="font-bold text-black block mb-1.5 uppercase">
                NAMA LENGKAP *
              </label>
              <input
                id="input-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama Anda"
                className="w-full border-2 border-black p-2.5 font-mono text-xs sm:text-sm outline-none focus:bg-neutral-50 transition"
              />
            </div>

            {/* Field: Email */}
            <div>
              <label htmlFor="input-email" className="font-bold text-black block mb-1.5 uppercase">
                ALAMAT EMAIL *
              </label>
              <input
                id="input-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@domain.com"
                className="w-full border-2 border-black p-2.5 font-mono text-xs sm:text-sm outline-none focus:bg-neutral-50 transition"
              />
            </div>

            {/* Field: Message */}
            <div>
              <label htmlFor="input-message" className="font-bold text-black block mb-1.5 uppercase">
                PESAN *
              </label>
              <textarea
                id="input-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tuliskan pesan atau kebutuhan proyek Anda..."
                className="w-full border-2 border-black p-2.5 font-mono text-xs sm:text-sm outline-none focus:bg-neutral-50 resize-none transition"
              />
            </div>

            {/* Status Messages */}
            {status === 'error' && (
              <div className="bg-red-100 border-2 border-red-600 text-red-800 p-2.5 font-mono text-xs leading-relaxed">
                {statusMessage || '[PERINGATAN]: Mohon isi semua kolom yang diperlukan.'}
              </div>
            )}

            {status === 'success' && (
              <div className="bg-[#ffff00] border-2 border-black text-black p-3 font-mono text-xs font-bold leading-relaxed">
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              id="btn-kirim-pesan"
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black text-white py-3 px-4 font-mono font-bold text-xs sm:text-sm tracking-wider border-2 border-black hover:bg-neutral-800 transition active:scale-[0.99] cursor-pointer disabled:opacity-50"
            >
              {status === 'submitting' ? 'MENGIRIM PESAN KE EMAIL...' : 'KIRIM PESAN →'}
            </button>

            {/* Direct Email Link Fallback */}
            <div className="text-center pt-1">
              <a
                href={`mailto:${HERO_DATA.email}?subject=Diskusi Proyek via Portfolio&body=Halo Febritama,%0D%0A%0D%0ASaya ingin berdiskusi mengenai...`}
                className="text-neutral-500 hover:text-black underline text-[11px] font-mono transition"
              >
                Atau kirim langsung lewat aplikasi Email (Gmail/Outlook) ↗
              </a>
            </div>
          </form>
        </div>

        {/* Right Column: Profile & Social Links */}
        <div
          ref={linksColRef}
          className="animate-on-scroll anim-fade-right border-2 border-black p-5 sm:p-6 bg-white flex flex-col justify-between"
        >
          <div>
            {/* Box Header */}
            <h3 className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-black pb-3 border-b-2 border-black mb-4">
              INFORMASI KONTAK &amp; TAUTAN RESMI
            </h3>

            {/* Quick Contact Info */}
            <div className="mb-4 p-3 bg-neutral-50 border border-black space-y-1.5 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-bold">DOMISILI:</span>
                <span className="text-black font-medium">{HERO_DATA.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-bold">EMAIL:</span>
                <span className="text-[#0026e6] font-bold">{HERO_DATA.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-bold">TELEPON/WA:</span>
                <span className="text-black font-medium">{HERO_DATA.phone}</span>
              </div>
            </div>

            {/* Links List */}
            <div className="space-y-1 font-mono text-xs">
              {SOCIAL_LINKS.map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (link.type === 'mail') {
                      handleCopyEmail();
                    } else {
                      window.open(link.url, '_blank');
                    }
                  }}
                  className="flex items-center justify-between p-2.5 border-b border-neutral-200 hover:bg-neutral-100 cursor-pointer transition select-none group"
                >
                  <span className="text-black font-medium group-hover:translate-x-1 transition-transform">
                    &gt; {link.label}
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-600 font-bold">
                    {link.type === 'mail' && copiedEmail && (
                      <span className="text-green-600 text-[10px] font-bold mr-1">TERSALIN</span>
                    )}
                    <span>{link.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yellow Response Time Notice */}
          <div className="bg-[#ffff00] text-black font-mono text-xs p-3 font-bold border border-black mt-6 leading-relaxed">
            * RESPON WAKTU RATA-RATA: &lt; 24 JAM KERJA. TERBUKA UNTUK PELUANG KERJA &amp; KOLABORASI PROYEK.
          </div>
        </div>
      </div>
    </section>
  );
};
