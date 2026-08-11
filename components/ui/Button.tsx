import Link from "next/link";
import type { ButtonData } from "@/types/landingpage";

interface ButtonProps extends ButtonData {
  className?: string;
}

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors";

  const variants = {
    primary:
      "rounded-md bg-[#4CAF4F] px-8 py-3 text-base text-white hover:bg-[#388E3C]",
    link:
      "text-[#4CAF4F] hover:text-[#388E3C]",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
      
    </Link>
    
  );
}