'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Navbar } from '@/components/ui/Navbar';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ContactForm } from '@/components/ui/ContactForm';
import { Waves } from '@/components/ui/wave-background';
import {
  ArrowDown,
  FileText,
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Terminal,
  Code,
  Cpu,
  Wrench,
  CheckCircle,
} from 'lucide-react';

// Dynamic import for R3F 3D Marble Sculpture
const MarbleSculpture = dynamic(
  () => import('@/components/three/MarbleSculpture').then((mod) => mod.MarbleSculpture),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center text-xs font-mono text-[#322D29]/60">
        Loading Marble Sculpture...
      </div>
    ),
  }
);

// Framer Motion Reveal Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Resume.pdf';
    link.download = 'Aditya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aditya Parasher',
    jobTitle: 'Software Engineer & Full-Stack Developer',
    url: 'https://github.com/Aadi-code186',
    sameAs: [
      PORTFOLIO_DATA.contact.github,
      PORTFOLIO_DATA.contact.linkedin,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'SimpleGerman',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Europe for Applied Sciences',
    },
    knowsAbout: [
      'Software Engineering',
      'TypeScript',
      'Python',
      'Next.js',
      'React',
      'AI & Machine Learning',
      'PostgreSQL',
    ],
  };

  return (
    <main className="min-h-screen bg-[#EFE9E1] text-[#322D29] relative overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Start-to-End Full Page Animated Wave Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <Waves
          lineColor="rgba(114, 56, 61, 0.18)"
          waveSpeedX={0.012}
          waveSpeedY={0.008}
          waveAmpX={28}
          waveAmpY={18}
          xGap={18}
          yGap={36}
        />
      </div>

      {/* Top border - thin line */}
      <div className="w-full h-[1px] bg-[#AC9C8D]/40 fixed top-0 left-0 z-50 pointer-events-none" />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-32 sm:pt-40 pb-20 max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D1C7BD]/50 border border-[#AC9C8D]/40 rounded-full text-xs font-mono text-[#72383D] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#72383D] animate-ping" />
              <span>📍 {PORTFOLIO_DATA.hero.location} • Actively seeking Part-Time SE Position</span>
            </div>

            {/* Huge Editorial Heading */}
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight text-[#322D29] leading-[0.95]">
              {PORTFOLIO_DATA.hero.greeting}
            </h1>

            {/* Subtitle List */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-medium text-[#322D29]/80 pt-2">
              <span>Software Engineering Student</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#72383D]" />
              <span>Full-Stack Developer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#72383D]" />
              <span>AI Builder</span>
            </div>

            {/* Minimal Line Divider */}
            <div className="w-24 h-[1.5px] bg-[#322D29]/30 my-4" />

            {/* Editorial Description */}
            <p className="font-serif text-2xl sm:text-3xl text-[#322D29]/90 font-normal leading-relaxed max-w-2xl italic">
              "I design and build modern web applications, AI-powered tools, and automation software with a focus on performance, scalability, and great user experiences."
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#work"
                className="btn-primary px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                onClick={handleDownloadResume}
                className="btn-secondary px-6 py-4 text-sm font-medium inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#322D29]" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Floating Marble Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <MarbleSculpture />
          </motion.div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* Left Header Label */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
                01 / ABOUT
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#322D29]">
                Solving real problems with clean code.
              </h2>
            </div>

            {/* Right Biography & Principles */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg sm:text-xl text-[#322D29]/85 leading-relaxed font-normal whitespace-pre-line">
                {PORTFOLIO_DATA.about.bio}
              </p>

              {/* Status Metadata Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="luxury-card p-5">
                  <div className="text-xs font-mono text-[#322D29]/60 uppercase mb-1">
                    Institution
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#322D29]">
                    UE Berlin
                  </div>
                  <div className="text-xs text-[#322D29]/70 mt-1">B.Sc. Software Engineering</div>
                </div>

                <div className="luxury-card p-5">
                  <div className="text-xs font-mono text-[#322D29]/60 uppercase mb-1">
                    Location
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#322D29] flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#72383D]" />
                    <span>Berlin</span>
                  </div>
                  <div className="text-xs text-[#322D29]/70 mt-1">Germany</div>
                </div>

                <div className="luxury-card p-5">
                  <div className="text-xs font-mono text-[#322D29]/60 uppercase mb-1">
                    Ventures
                  </div>
                  <div className="font-serif text-xl font-semibold text-[#72383D]">
                    SimpleGerman
                  </div>
                  <div className="text-xs text-[#322D29]/70 mt-1">Co-Founder & Full-Stack</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE SECTION ---------------- */}
      <section id="experience" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20 bg-[#D9D9D9]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-16">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
              02 / EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#322D29] mt-2">
              Work & Ventures
            </h2>
          </motion.div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="luxury-card p-8 sm:p-10 space-y-6"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center pb-6 border-b border-[#AC9C8D]/30">
                  <div>
                    <div className="text-xs font-mono text-[#72383D] font-semibold tracking-wider">
                      {exp.period}
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-[#322D29] mt-1">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-medium text-[#72383D] mt-0.5">
                      {exp.role} • {exp.location}
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-[#EFE9E1] border border-[#AC9C8D]/40 text-xs font-mono text-[#322D29] rounded-xl font-medium self-start md:self-auto">
                    {exp.summary}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-[#322D29]/90 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#72383D] flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-16">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
              03 / TECHNICAL STACK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#322D29] mt-2">
              Capabilities & Tools
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.skills.map((group, idx) => {
              const icons = [Code, Terminal, Cpu, Wrench];
              const IconComp = icons[idx % icons.length];

              return (
                <motion.div
                  key={group.category}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="luxury-card p-8 space-y-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-[#AC9C8D]/30">
                      <div className="p-3 bg-[#EFE9E1] rounded-2xl border border-[#AC9C8D]/40 text-[#72383D]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[#322D29]">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-6">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3.5 py-2 bg-[#EFE9E1] border border-[#AC9C8D]/40 text-[#322D29] text-xs font-mono rounded-xl font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED WORK SECTION ---------------- */}
      <section id="work" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20 bg-[#D9D9D9]/30">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-16">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
                04 / FEATURED WORK
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#322D29] mt-2">
                Selected Projects
              </h2>
            </div>
            <p className="text-sm text-[#322D29]/70 max-w-sm font-mono">
              Systems engineered with Next.js, TypeScript, Python, Selenium, and Gemini AI.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EDUCATION & CERTIFICATIONS ---------------- */}
      <section id="education" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 space-y-16">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
              05 / ACADEMICS & CREDENTIALS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#322D29] mt-2">
              Education & Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 luxury-card p-8 sm:p-10 space-y-8"
            >
              {(Array.isArray(PORTFOLIO_DATA.education)
                ? PORTFOLIO_DATA.education
                : [PORTFOLIO_DATA.education]
              ).map((edu, index) => (
                <div
                  key={index}
                  className={`space-y-4 ${
                    index > 0 ? "pt-6 border-t border-[#AC9C8D]/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 pb-2">
                    <div className="p-3 bg-[#EFE9E1] rounded-2xl border border-[#AC9C8D]/40 text-[#72383D]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#72383D] font-semibold">
                        {edu.period}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#322D29]">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <div className="font-serif text-xl font-semibold text-[#72383D]">
                      {edu.degree}
                    </div>
                    <div className="text-xs font-mono text-[#322D29]/60 mt-1">
                      📍 {edu.location}
                    </div>
                  </div>

                  {edu.focusAreas && edu.focusAreas.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-[#322D29]/60 uppercase tracking-widest font-semibold">
                        Focus Areas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-3.5 py-1.5 bg-[#EFE9E1] border border-[#AC9C8D]/40 text-[#322D29] text-xs font-mono rounded-xl font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 luxury-card p-8 sm:p-10 space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-[#AC9C8D]/30 pb-4">
                <div className="p-3 bg-[#EFE9E1] rounded-2xl border border-[#AC9C8D]/40 text-[#72383D]">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#322D29]">
                  Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 bg-[#EFE9E1] border border-[#AC9C8D]/40 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#72383D] flex-shrink-0" />
                      <span className="font-medium text-sm text-[#322D29]">{cert.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#322D29]/60">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="py-24 sm:py-32 border-t border-[#AC9C8D]/20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#72383D] font-semibold">
                  06 / CONTACT
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl font-medium text-[#322D29] mt-2 leading-tight">
                  {PORTFOLIO_DATA.contact.heading}
                </h2>
              </div>

              <p className="text-base text-[#322D29]/80 leading-relaxed max-w-md font-normal whitespace-pre-line">
                {PORTFOLIO_DATA.contact.description}
              </p>

              {/* Direct Links */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="flex items-center gap-3 p-4 luxury-card group hover:border-[#72383D]"
                >
                  <div className="p-2.5 bg-[#EFE9E1] rounded-xl text-[#72383D]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#322D29]/60">Direct Email</div>
                    <div className="font-mono text-sm font-semibold text-[#322D29] group-hover:text-[#72383D] transition-colors">
                      {PORTFOLIO_DATA.contact.email}
                    </div>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a
                    href={PORTFOLIO_DATA.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 luxury-card text-xs font-semibold text-[#322D29] hover:text-[#72383D]"
                  >
                    <Github className="w-4 h-4" />
                    <span>{PORTFOLIO_DATA.contact.githubHandle}</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex-1 flex items-center justify-center gap-2 p-3.5 luxury-card text-xs font-semibold text-[#322D29] hover:text-[#72383D]"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>{PORTFOLIO_DATA.contact.linkedinHandle}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#322D29]/70 pt-1">
                  <MapPin className="w-4 h-4 text-[#72383D]" />
                  <span>{PORTFOLIO_DATA.contact.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Form Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-6"
            >
              <div className="luxury-card p-8 sm:p-10">
                <h3 className="font-serif text-2xl font-semibold text-[#322D29] mb-2">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-[#322D29]/70 mb-6">
                  Fill out the form below to get in touch regarding part-time software engineering roles or projects.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-12 border-t border-[#AC9C8D]/30 bg-[#EFE9E1]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#322D29]/60">
          <div>
            © {new Date().getFullYear()} Aditya Parasher. {PORTFOLIO_DATA.footerTagline}
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-[#72383D] transition-colors">About</a>
            <a href="#work" className="hover:text-[#72383D] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#72383D] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Bottom border - thin line */}
      <div className="w-full h-[1px] bg-[#AC9C8D]/40 relative z-10" />
    </main>
  );
}
