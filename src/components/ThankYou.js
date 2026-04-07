import React from "react";
import { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  useEffect(() => {
    const gtag_report_conversion = (url) => {
      const callback = () => {
        if (url) {
          window.location = url;
        }
      };

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-747198314/obWbCP7n25YcEOqupeQC',
          event_callback: callback
        });
      }
    };

    // Fire conversion when page loads
    gtag_report_conversion();

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-surface-container-low"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="font-headline text-3xl font-extrabold text-on-surface mb-4">
          Request Received Successfully
        </h1>
        <p className="text-on-surface-variant mb-10 leading-relaxed">
          Thank you for connecting with Zoic Biotech. Our team has received your requirements and will review them carefully. One of our experts will get in touch with you within 24–48 business hours to discuss the next steps.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
