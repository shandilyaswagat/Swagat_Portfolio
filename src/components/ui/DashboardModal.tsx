import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  htmlPath: string;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({
  isOpen,
  onClose,
  title,
  htmlPath,
}) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full max-w-7xl h-[92vh] bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D7E2EA]/20 bg-[#141414]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-base sm:text-xl font-medium uppercase text-[#D7E2EA]">
                  {title} — HTML Rebuild Dashboard
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={htmlPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors"
                >
                  <span>Full Screen Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 text-[#D7E2EA] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Body */}
            <div className="flex-1 w-full h-full bg-[#0C0C0C]">
              <iframe
                src={htmlPath}
                title={`${title} Dashboard Preview`}
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
