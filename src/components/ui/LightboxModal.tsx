import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc?: string;
  htmlPath?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  imageSrc,
  htmlPath,
}) => {
  // Lock body scroll when lightbox modal is active
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md">
          {/* Click backdrop to exit */}
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
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D7E2EA]/20 bg-[#141414]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#B600A8] animate-pulse" />
                <h3 className="text-base sm:text-xl font-medium uppercase text-[#D7E2EA]">
                  {title} — Enlarge & Fullscreen View
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {htmlPath && (
                  <a
                    href={htmlPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors"
                  >
                    <span>Open Full Browser Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/10 text-[#D7E2EA] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 w-full h-full bg-[#0C0C0C] flex items-center justify-center p-2 overflow-auto">
              {htmlPath ? (
                <iframe
                  src={htmlPath}
                  title={`${title} Live HTML View`}
                  className="w-full h-full border-none bg-[#0C0C0C]"
                  loading="lazy"
                />
              ) : (
                imageSrc && (
                  <img
                    src={imageSrc}
                    alt={`${title} High Definition View`}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-2xl"
                  />
                )
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
