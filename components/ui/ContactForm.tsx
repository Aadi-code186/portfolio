'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedEmail || !trimmedMessage) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6685e430-50d5-4cca-bd31-d3aabbbb103b',
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Portfolio Inquiry from ${trimmedName || 'Visitor'}`,
          from_name: trimmedName || 'Portfolio Visitor',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try emailing directly.');
      }
    } catch (err) {
      console.error('Web3Forms Error:', err);
      setError('An error occurred. Please send a direct email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div>
        <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Alex Miller"
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          maxLength={254}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="alex@company.com"
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#322D29]/70 mb-2 font-semibold">
          Project Details / Inquiry
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={5000}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your software project, role opportunity, or ideas..."
          className="w-full bg-[#EFE9E1] border border-[#AC9C8D] rounded-[18px] px-4 py-3.5 text-sm text-[#322D29] placeholder-[#322D29]/40 outline-none focus:border-[#72383D] transition-colors resize-none"
          required
        />
      </div>

      {error && (
        <div role="alert" className="flex items-center gap-2 text-xs font-mono text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 px-6 text-sm flex items-center justify-center gap-2 font-medium uppercase tracking-wider disabled:opacity-60 transition-opacity"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 text-[#EFE9E1] animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : submitted ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-[#EFE9E1]" />
            <span>Message Sent Successfully!</span>
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
