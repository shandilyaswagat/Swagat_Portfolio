import React from 'react';

interface LiveProjectButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  className = "",
  href,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
        className={`
          inline-flex items-center justify-center
          rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
          px-8 py-3 sm:px-10 sm:py-3.5
          text-sm sm:text-base
          hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer
          ${className}
        `}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      {...(props as any)}
      className={`
        rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer
        ${className}
      `}
    >
      {label}
    </button>
  );
};
