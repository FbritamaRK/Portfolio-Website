import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Check, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alex.pratama@dev.id');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="kontak" className="border-b-2 border-black px-6 py-8 sm:px-10 sm:py-10 bg-white">
      {/* Section Header */}
      <div className="flex items-center pb-2 border-b-2 border-black mb-6">
        <span className="bg-black text-white px-2 py-0.5 font-mono text-xs sm:text-sm font-bold mr-2.5">
          05
        </span>
        <h2 className="font-mono font-bold text-base sm:text-lg tracking-wider uppercase text-black">
          HUBUNGI SAYA
        </h2>
      </div>

      {/* Callout Notice Banner */}
      <div className="bg-neutral-100 p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-black mb-6 border-l-4 border-black leading-relaxed">
        Apakah Anda memiliki proyek menarik, peluang kerja sama, atau pertanyaan teknis? Kirimkan pesan melalui formulir di bawah ini.
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Form */}
        <div className="border-2 border-black p-5 sm:p-6 bg-white flex flex-col justify-between">
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
              <div className="bg-red-100 border-2 border-red-600 text-red-800 p-2 font-mono text-xs">
                [PERINGATAN]: Mohon isi semua kolom yang diperlukan.
              </div>
            )}

            {status === 'success' && (
              <div className="bg-[#ffff00] border-2 border-black text-black p-3 font-mono text-xs font-bold">
                ✓ Pesan berhasil dikirim! Alex akan meninjau pesan Anda dalam &lt; 24 jam.
              </div>
            )}

            {/* Submit Button */}
            <button
              id="btn-kirim-pesan"
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black text-white py-3 px-4 font-mono font-bold text-xs sm:text-sm tracking-wider border-2 border-black hover:bg-neutral-800 transition active:scale-[0.99] cursor-pointer disabled:opacity-50"
            >
              {status === 'submitting' ? 'MENGIRIM PESAN...' : 'KIRIM PESAN →'}
            </button>
          </form>
        </div>

        {/* Right Column: Profile & Social Links */}
        <div className="border-2 border-black p-5 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            {/* Box Header */}
            <h3 className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-black pb-3 border-b-2 border-black mb-4">
              TAUTAN PROFIL &amp; SOSIAL MEDIA
            </h3>

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
            * RESPON WAKTU RATA-RATA: &lt; 24 JAM KERJA. FORMAT PESAN PLAIN TEXT DIUTAMAKAN.
          </div>
        </div>
      </div>
    </section>
  );
};
