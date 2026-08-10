"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { HeaderData } from "@/types/landingpage";

interface MobileMenuProps {
  data: HeaderData;
}

export default function MobileMenu({ data }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-gray-100 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {data.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-700 transition hover:text-[#4CAF4F]"
              >
                {item.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
              {data.actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  onClick={closeMenu}
                  className={
                    action.variant === "primary"
                      ? "rounded-md bg-[#4CAF4F] px-5 py-2.5 text-center text-sm font-medium text-white"
                      : "text-center text-sm font-medium text-[#4CAF4F]"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}