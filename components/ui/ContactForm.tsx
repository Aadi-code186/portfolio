'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Open user's email client pre-filled to send directly to adityagermany186@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:adityagermany186@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Your Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Alex Miller"
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="alex@company.com"
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Project Details / Inquiry
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your software project, role opportunity, or ideas..."
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full py-4 px-6 text-sm flex items-center justify-center gap-2 font-medium uppercase tracking-wider"
      >
        {submitted ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-[#EFE9E1]" />
            <span>Opening Email Client...</span>
          </>
        ) : (
          <>
            <span>Send Direct Message</span>
            <Send className="w-4 h-4 text-[#EFE9E1]" />
          </>
        )}
      </button>
    </form>
  );
}
