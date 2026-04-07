import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Pill, Leaf, Sparkles, User, Mail, Phone, 
  ArrowRight, CheckCircle, Quote, Globe, ShieldCheck, Clock, 
  Users, Microscope, Beaker, FlaskConical, Linkedin
} from "lucide-react";
import ThankYou from "./components/ThankYou";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "About Us", href: "#about" },
    { name: "Compliance", href: "#compliance" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
            <Microscope className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-extrabold text-primary tracking-tight font-headline">ZOIC BIOTECH</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-on-surface hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#quote"
            className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-on-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-surface-container-low overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-on-surface hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#quote"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 skew-x-[-12deg] translate-x-1/2"></div>
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary rounded-full mb-8 border border-primary/10">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">WHO-GMP & ISO 9001:2015 Certified Facility</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.05] mb-8">
            Precision <span className="text-primary italic">Science</span>.<br />
            Global <span className="text-secondary">Impact</span>.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed font-light">
            India's elite manufacturing partner for high-compliance pharmaceuticals, nutraceuticals, and clinical-grade cosmetics. 36+ years of engineering excellence.
          </p>
          <div className="flex flex-wrap gap-5">
            <a 
              href="#quote"
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl hover:-translate-y-1"
            >
              Start Your Proposal
            </a>
            <a 
              href="#products"
              className="bg-white text-on-surface border border-outline-variant/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all"
            >
              Browse Portfolio
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              alt="Professional Lab Environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZA_lhhJ9JVBlQBBb00G2I76IoyOlh3mtZF1FEpAOn2dJlrTjAFxnR7BsbOLYChYd46EiD61Yck0G42t75kAevuMcm_5_bFh1WtJd0HErCQNJkQVxdmpX-qVBn7a4d9dbJ2JZZGJnBvbR-70vJfstNc22_6Jza5rd83S7IcNlbpXED1AL0ypM5Mt1cQfSmNauQo3xM_M0X7dFQU8fwP1GpjdLk5R8ZLFVzDIcYIWpnTzWehpT_Np_sQ9H_L-PWwzNu7KKVXyYvSs9"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl shadow-2xl border border-white/50 max-w-xs"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <FlaskConical className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-black text-on-surface">3,000+</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none">Formulations</p>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">Pioneering R&D with proprietary extraction and blending technologies.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Years Heritage", value: "36+" },
    { label: "B2B Partners", value: "500+" },
    { label: "Support", value: "24/7" },
    { label: "Global Presence", value: "PAN" },
  ];

  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white relative z-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="font-headline text-5xl font-black mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ManufacturingCapabilities = () => {
  const capabilities = [
    {
      title: "Pharmaceuticals",
      desc: "Precision-manufactured tablets, capsules, and sterile injectables under strict GMP compliance.",
      icon: <Pill className="w-8 h-8" />,
      items: ["Multi-layered Tablets", "Softgel Encapsulation", "Sterile Small Volume Parenterals"],
      color: "primary"
    },
    {
      title: "Nutraceuticals",
      desc: "Wellness formulations including performance powders, protein blends, and daily vitamin gummies.",
      icon: <Sparkles className="w-8 h-8" />,
      items: ["Organic Superfood Blends", "High-Protein Formulations", "Modern Wellness Gummies"],
      color: "secondary"
    },
    {
      title: "Derma & Skincare",
      desc: "Specialized clinical dermatology products focusing on efficacy and skin barrier health.",
      icon: <Microscope className="w-8 h-8" />,
      items: ["Active Cosmeceuticals", "Dermatological Creams & Gels", "Clinical Hair Care Solutions"],
      color: "primary"
    },
    {
      title: "Ayurvedic & Herbal",
      desc: "Traditional wellness scaled with modern science. Authentic extracts and standardized processing.",
      icon: <Leaf className="w-8 h-8" />,
      items: ["Standardized Herbal Extracts", "Ancient Wisdom, Modern Scale", "Pure Ayush Formulations"],
      color: "secondary"
    },
    {
      title: "Personal Care",
      desc: "Premium daily care products including hand washes, body lotions, and professional shampoos.",
      icon: <Beaker className="w-8 h-8" />,
      items: ["Mass & Premium Segment", "Herbal Infused Formulas", "Sustainable Packaging Options"],
      color: "primary"
    }
  ];

  return (
    <section id="manufacturing" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Manufacturing Excellence</span>
            <h2 className="font-headline text-5xl font-extrabold text-on-surface leading-tight">Diversified Manufacturing Capabilities</h2>
          </div>
          <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-12 mb-6"></div>
          <a 
            href="#products"
            className="inline-flex items-center gap-3 font-bold text-primary hover:text-secondary transition-colors group underline decoration-2 underline-offset-8"
          >
            View Product Catalog
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-surface-container hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${cap.color === 'primary' ? 'bg-primary/5 group-hover:bg-primary' : 'bg-secondary/5 group-hover:bg-secondary'} rounded-2xl flex items-center justify-center mb-8 group-hover:text-white transition-colors duration-500`}>
                {cap.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{cap.title}</h3>
              <p className="text-on-surface-variant mb-8 font-light">{cap.desc}</p>
              <ul className="space-y-3 text-sm font-medium text-on-surface/80">
                {cap.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${cap.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Partner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-2xl p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-headline text-3xl font-extrabold mb-6">Partner With Us</h3>
              <p className="opacity-80 mb-8 font-light text-lg">Looking for a reliable manufacturing partner or a PCD Pharma Franchise?</p>
            </div>
            <a 
              href="#quote"
              className="bg-secondary text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg text-center"
            >
              Get Business Support
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const logos = [
    { name: "PHARMACORP", icon: <Microscope /> },
    { name: "BIOGEN-X", icon: <Beaker /> },
    { name: "VITA-MAX", icon: <FlaskConical /> },
    { name: "SAFEHEALTH", icon: <ShieldCheck /> },
    { name: "WELLCURE", icon: <CheckCircle /> },
    { name: "NEUROGEN", icon: <Users /> },
  ];

  return (
    <section id="certifications" className="py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <p className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-16">Preferred by Global Industry Leaders</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-pointer">
              <span className="text-primary/40 group-hover:text-primary transition-colors">{logo.icon}</span>
              <span className="font-headline font-black text-xl text-on-surface/30 group-hover:text-on-surface transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-5xl mx-auto relative px-12">
          <Quote className="w-24 h-24 absolute -top-16 -left-4 text-primary/5 select-none" />
          <blockquote className="text-3xl md:text-4xl font-headline font-light text-on-surface leading-tight relative z-10 italic">
            "The level of <span className="text-primary font-bold">clinical precision</span> and regulatory compliance at Zoic Biotech is unmatched in the Indian third-party manufacturing landscape. They have been pivotal to our product launches for over 12 years."
          </blockquote>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container-high mb-4 flex items-center justify-center overflow-hidden border-2 border-primary/10">
              <img 
                alt="Medical Professional" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6xJxhqkk-2HQ_h1l8Ie6vS3a-DQmcTLz_c_ieZCdbrCtcAWJAAbUMOCzZ7pZPs9oNpfM6mPnYwwZgSrAJk0QWEry1SAGwR-T-wRjh0nXB7-B_FV9YLBVcE2wGUoXI3Y2m3K817ca2W17iHvtOMvTkGnu1AOaqWAEJrx8izdqUX0ad_CpGPVUQ9D-XGk5PC4JNYfYUA-ZeSl0O1GC2f08euXSXEhK9GQh2L5F28uvGH-zkDaoeq8ntBzz50mIRlYggb40ep5QSbIr6"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold text-on-surface tracking-wide uppercase text-sm">Dr. Amit Khurana</p>
            <p className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase mt-1">VP Production, Global Health Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Pharmaceuticals (Tablets/Caps)",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thank-you");
    }, 1500);
  };

  return (
    <section id="quote" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-8 leading-tight">Get Your Custom <span className="text-primary">Manufacturing Proposal</span></h2>
          <p className="text-lg text-on-surface-variant mb-12 font-light leading-relaxed">Submit your technical requirements and our engineering team will provide a comprehensive feasibility study and quote within 24 business hours.</p>
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-surface-container">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Inquiry</p>
                <p className="font-bold text-on-surface">info@zoicbiotech.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-surface-container">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Business Hotline</p>
                <p className="font-bold text-on-surface">+91 98156 20908</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl shadow-2xl border border-white"
          >
            <div className="flex gap-4 mb-10">
              <div className="h-1.5 flex-grow bg-primary rounded-full"></div>
              <div className="h-1.5 flex-grow bg-surface-container-low rounded-full"></div>
              <div className="h-1.5 flex-grow bg-surface-container-low rounded-full"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
                  <input 
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                    placeholder="Johnathan Doe" 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Business Email</label>
                  <input 
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                    placeholder="john@company.com" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Phone Number</label>
                  <input 
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                    placeholder="+91 00000 00000" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Production Category</label>
                  <select 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option>Pharmaceuticals (Tablets/Caps)</option>
                    <option>Herbal & Ayurvedic</option>
                    <option>Derma & Skincare</option>
                    <option>Nutraceuticals</option>
                    <option>PCD Franchise Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Formulation Details</label>
                <textarea 
                  required
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
                  placeholder="Describe your product specifications, batch size, and packaging requirements..." 
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/20 hover:shadow-secondary/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3" 
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Generate My Quote"
                )}
              </button>
              <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Confidentiality assured by our ISO protocols</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-on-surface text-white py-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight font-headline">ZOIC BIOTECH</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
            Redefining pharmaceutical manufacturing through technology-led processes and ancestral herbal wisdom. ISO 9001:2015 & WHO-GMP Certified.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-primary">Manufacturing</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a className="hover:text-secondary transition-colors" href="#">Third Party Manufacturing</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">PCD Pharma Franchise</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Contract Manufacturing</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Private Labeling</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-primary">Products</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a className="hover:text-secondary transition-colors" href="#">Pharmaceutical Range</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Herbal & Ayurvedic</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Derma Solutions</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Daily Wellness</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-primary">Corporate</h4>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
            Plot No. 193, Industrial Area Phase 2, Chandigarh, India 160002
          </p>
          <a className="text-secondary font-bold hover:underline" href="mailto:info@zoicbiotech.com">info@zoicbiotech.com</a>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2024 Zoic Biotech Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Quality Manual</a>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ManufacturingCapabilities />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
