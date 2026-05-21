import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, Pill, Leaf, Sparkles, User, Mail, Phone,
  ArrowRight, CheckCircle, Quote, Globe, ShieldCheck, Clock,
  Users, Microscope, Beaker, FlaskConical, Linkedin,
  Star,
  Facebook,
  Instagram,
  Youtube
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
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Compliance", href: "#compliance" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="logo.png" className="w-35 h-auto" />
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
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Pharmaceuticals (Tablets/Caps)",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyClIX6L9VlI4aLo7DvzzNdE5giALy7biut9NVbUeIhNN4TpJv78tIkZ3IxkC8y91IP/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        navigate("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-surface-container-low -z-10 skew-x-[-12deg] translate-x-1/2"></div>

      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full mb-8 border border-primary/10">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              WHO-GMP & ISO Certified | Manufacturing Since 1990
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.05] mb-8">
            India's Leading{" "}
            <span className="text-primary italic">
              Nutraceutical &
            </span>
            <br />
            Cosmetic{" "}
            <span className="text-secondary">
              Third Party Manufacturing
            </span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light">
            Partner with Zoic Biotech for premium Third Party Manufacturing solutions in Pharmaceuticals, Nutraceuticals, Ayurvedic, Derma and Cosmetic products.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "500+ GMP-WHO Approved Products",
              "Fast Delivery Across India",
              "Attractive Promotional Support",
              "DCGI Approved Molecules",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-4 py-4 rounded-2xl border border-primary/10 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-primary" />

                <span className="text-sm font-semibold text-on-surface">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-7 h-7 text-primary" />
              </div>

              <div>
                <p className="text-3xl font-black text-on-surface">
                  3,000+
                </p>

                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                  Formulations Developed
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-6"
        >
          <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* TOP BAR */}
            <div className="flex gap-3 px-10 pt-8">
              <div className="h-2 w-24 rounded-full bg-primary"></div>
              <div className="h-2 w-16 rounded-full bg-primary/20"></div>
              <div className="h-2 w-12 rounded-full bg-primary/10"></div>
            </div>

            <div className="p-10 lg:p-12">

              <div className="mb-10">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs block mb-4">
                  Get Manufacturing Quote
                </span>

                <h2 className="text-4xl font-extrabold text-on-surface leading-tight mb-4">
                  Request Your Custom Proposal
                </h2>

                <p className="text-on-surface-variant leading-relaxed">
                  Share your requirements and our business team will contact you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Business Email
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="example@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">
                      Production Category
                    </label>

                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value,
                        })
                      }
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none"
                    >
                      <option>
                        Pharmaceuticals (Tablets/Caps)
                      </option>

                      <option>
                        Herbal & Ayurvedic
                      </option>

                      <option>
                        Derma & Skincare
                      </option>

                      <option>
                        Nutraceuticals
                      </option>

                      <option>
                        Third Party Manufacturing Inquiry
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">
                    Product Requirements
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your product specifications, packaging requirements, batch size, formulations etc."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        details: e.target.value,
                      })
                    }
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/20 hover:shadow-secondary/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Generate My Quote
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
                  Confidentiality assured by our ISO protocols
                </p>

              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Years Manufacturing Expertise", value: "36+" },
    { label: "B2B Partners", value: "1000+" },
    { label: "Production Capability", value: "24/7" },
    { label: "India Presence", value: "PAN" },
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

const FranchiseSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">

        <div className="max-w-5xl mx-auto text-center">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Third Party Manufacturing
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">
            Zoic Biotech - India’s Leading Cosmetic & Nutraceutical Third Party Manufacturing
          </h2>

          <p className="text-lg text-on-surface-variant leading-relaxed font-light">
            Zoic Biotech offers profitable business opportunities in Third Party Manufacturing,
            Nutraceutical Third Party Manufacturing, and Cosmetic Third Party Manufacturing across India.
            Our product portfolio includes pharmaceutical formulations, wellness supplements,
            nutraceutical products, herbal products, skincare, personal care, and cosmetic products.

            With timely delivery, and quality-focused manufacturing,
            Zoic Biotech helps pharma distributors, medical representatives, wholesalers,
            and entrepreneurs grow their own business.
          </p>
        </div>

      </div>
    </section>
  );
};

const ManufacturingCapabilities = () => {
  const capabilities = [
    {
      title: "Pharmaceuticals",
      desc: "Precision manufacturing for tablets, capsules, with strict compliance standards.",
      icon: <Pill className="w-8 h-8" />,
      items: ["WHO-GMP certified facilities", "Softgel Encapsulation", "High-volume scalable production"],
      color: "primary"
    },
    {
      title: "Nutraceuticals",
      desc: "Modern wellness formulations designed for growing consumer demand and brand scalability.",
      icon: <Sparkles className="w-8 h-8" />,
      items: ["Protein powders & blends", "Effervescent tablets, softgels & gummies", "Custom nutraceutical formulations"],
      color: "secondary"
    },
    {
      title: "Derma & Skincare",
      desc: "Clinical-grade skincare and cosmeceutical solutions built for performance-driven brands.",
      icon: <Microscope className="w-8 h-8" />,
      items: ["Dermatologically tested products", "Active-based formulations", "Creams, gels & serums"],
      color: "primary"
    },
    {
      title: "Ayurvedic & Herbal",
      desc: "Traditional formulations powered by modern processing and standardized extracts.",
      icon: <Leaf className="w-8 h-8" />,
      items: ["Standardized Herbal Extracts", "Authentic Ayurvedic formulations", "Scalable & compliant production"],
      color: "secondary"
    },
    {
      title: "Personal Care",
      desc: "Premium daily care products including hand washes, body lotions, and professional shampoos.",
      icon: <Beaker className="w-8 h-8" />,
      items: ["Haircare & body care products", "Herbal Infused Formulas", "Custom fragrance & formulations"],
      color: "primary"
    }
  ];

  return (
    <section id="manufacturing" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Manufacturing Excellence</span>
            <h2 className="font-headline text-4xl font-extrabold text-on-surface leading-tight">Wide Range of Pharma Products for Third Party Manufacturing</h2>
          </div>
          <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-12 mb-6"></div>
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
              <p className="opacity-80 mb-8 font-light text-lg">Looking for Third-Party Manufacturing, or Private Labeling?
                We provide complete support from product selection to manufacturing and delivery.</p>
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

const WhyChooseZoic = () => {
  const points = [
    "WHO-GMP Certified",
    "ISO Certified Company",
    "500+ Pharma Products",
    "Fast Delivery Network",
    "High Profit Margins"
  ];

  return (
    <section className="py-28 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Why Pharma Professionals Choose Zoic Biotech
          </h2>

          <p className="text-lg text-on-surface-variant leading-relaxed">
            Zoic Biotech is a rapidly growing pharmaceutical company offering
            high-quality Cosmetic & Nutraceutical Third Party Manufacturing opportunities across India.
            We provide WHO-GMP certified products, to help our partners grow successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-primary/10 flex items-center gap-4"
            >
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="font-semibold text-on-surface">{point}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const PharmaBusinessSection = () => {
  return (
    <section className="py-28 bg-primary text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Start a Profitable Pharma Business
        </h2>

        <p className="text-lg text-white/80 leading-relaxed max-w-5xl mx-auto mb-14">
          The Indian pharmaceutical market is witnessing strong growth due to rising healthcare awareness,
          increasing medicine demand, and expanding rural healthcare access.

          The Third Party Manufacturing model has become one of the most profitable and low-risk business opportunities in India.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            "Medical Representative",
            "Distributor",
            "Pharmacist",
            "Doctor",
            "Entrepreneur"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 px-6 py-4 rounded-full font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-white/80 text-lg mb-10">
          Zoic Biotech provides everything you need to establish and grow your pharma business successfully.
        </p>

        <a
          href="#quote"
          className="inline-flex items-center justify-center bg-secondary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition"
        >
          Get Product & Price List
        </a>

      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <>
      <section id="certifications" className="bg-primary py-20 relative overflow-hidden">
        {/* Background Grid */}
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

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Certified for Quality & Compliance
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Our manufacturing facilities follow globally recognized standards to ensure
              safety, consistency, and regulatory excellence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* WHO-GMP */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center hover:scale-105 transition duration-300">

              <img
                src="who.jpg"
                alt="WHO GMP Certified"
                className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain mb-6"
              />

              <h3 className="text-white font-semibold text-lg md:text-xl">
                WHO-GMP Certified
              </h3>
              <p className="text-white/70 text-sm mt-2 text-center max-w-xs">
                Ensuring global standards in pharmaceutical manufacturing and safety.
              </p>
            </div>

            {/* ISO */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center hover:scale-105 transition duration-300">

              <img
                src="iso.jpg"
                alt="ISO Certified"
                className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] h-auto object-contain mb-6"
              />

              <h3 className="text-white font-semibold text-lg md:text-xl">
                ISO Certified
              </h3>
              <p className="text-white/70 text-sm mt-2 text-center max-w-xs">
                Certified systems delivering consistent quality and operational excellence.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

const Testimonials = () => {

  const testimonials = [
    {
      name: "Vikram Singh",
      text: "Partnering with Zoic Biotech gave us the confidence to scale quickly. Their product quality and consistent supply helped us establish a strong presence in our region within a short time.",
      image: "/user.jpg"
    },
    {
      name: "Naveen Reddy",
      text: "Their manufacturing process is highly professional and transparent. We’ve been able to expand our product portfolio without worrying about quality or delays.",
      image: "/user.jpg"
    },
    {
      name: "Karthik Iyer",
      text: "Zoic’s team understands the business side as well as the technical side. From product selection to packaging support, everything is aligned to help us grow faster.",
      image: "/user.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20">Trusted by Pharma Professionals Across India</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-low p-10 rounded-[2.5rem] border border-transparent hover:border-primary/10 transition-all group"
            >
              <div className="flex text-primary mb-8">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="text-on-surface italic mb-10 text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-5">
                {/* <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/10" referrerPolicy="no-referrer" /> */}
                <div>
                  <p className="font-bold text-on-surface">{t.name}</p>
                  {/* <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t.role}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
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
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyClIX6L9VlI4aLo7DvzzNdE5giALy7biut9NVbUeIhNN4TpJv78tIkZ3IxkC8y91IP/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        navigate("/thank-you"); // ✅ redirect only on success
      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error(error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-8 leading-tight">Get Your Custom <span className="text-primary">Manufacturing Proposal</span></h2>
          <p className="text-lg text-on-surface-variant mb-12 font-light leading-relaxed">Share your requirements and our team will provide a complete feasibility analysis and quotation within 24–48 hours.</p>
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-surface-container">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Inquiry</p>
                <p className="font-bold text-on-surface">info@zoicpharmaceuticals.com</p>
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
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Business Email</label>
                  <input
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    placeholder="example@company.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Phone Number</label>
                  <input
                    required
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                    placeholder="+91 99999 99999"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Production Category</label>
                  <select
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Pharmaceuticals (Tablets/Caps)</option>
                    <option>Herbal & Ayurvedic</option>
                    <option>Derma & Skincare</option>
                    <option>Nutraceuticals</option>
                    <option>Third Party Manufacturing Inquiry</option>
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
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
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

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-2 shadow-2xl">
      <a
        href="tel:+919815620908"
        className="bg-primary text-white text-center py-4 font-bold"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/919815620908"
        target="_blank"
        className="bg-secondary text-white text-center py-4 font-bold"
      >
        WhatsApp
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-on-surface text-white py-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <img src="logo.png" className="w-35 h-auto" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
            Redefining pharmaceutical manufacturing through technology-led processes and ancestral herbal wisdom. ISO 9001:2015 & WHO-GMP Certified.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/zoicbiotech/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/zoicbiotech/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://x.com/BiotechZoic" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <X className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@zoicbiotech8656" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-secondary">Manufacturing</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a className="hover:text-secondary transition-colors" href="#">Third Party Manufacturing</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Contract Manufacturing</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Private Labeling</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Affordable MOQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-secondary">Products</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a className="hover:text-secondary transition-colors" href="#">Pharmaceutical Range</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Herbal & Ayurvedic</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Derma Solutions</a></li>
            <li><a className="hover:text-secondary transition-colors" href="#">Daily Wellness</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-sm uppercase tracking-widest mb-8 text-secondary">Corporate</h4>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
            Plot No. 193, Industrial Area Phase 2, Chandigarh, India 160002
          </p>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
            info@zoicpharmaceuticals.com
          </p>
          <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
            +91 98156 20908
          </p>
        </div>
      </div>
      <div id="compliance" className="max-w-screen-2xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2026 Zoic Biotech Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <a className="hover:text-white transition-colors" href="https://www.zoicbiotech.com/privacy-policy">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="https://www.zoicbiotech.com/terms-conditions">Terms of Service</a>
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
      <FranchiseSection />
      <ManufacturingCapabilities />
      <WhyChooseZoic />
      <PharmaBusinessSection />
      <Certifications />
      <Testimonials />
      <ContactForm />
      <MobileStickyCTA />
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
