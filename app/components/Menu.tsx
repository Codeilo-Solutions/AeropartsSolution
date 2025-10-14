import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Socials from "./Socials";
import { Link } from "react-router";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "RFQ", href: "/rfq" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay with fade animation */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 overlay-animate" />

        {/* Menu content with slide animation */}
        <Dialog.Content className="fixed left-0 top-0 h-full w-[min(100%,25rem)] bg-white shadow-2xl z-100 flex flex-col transition-transform duration-300 focus:outline-none content-animate">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <Dialog.Title className="text-xl font-semibold text-slate-900">
              Menu
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="rounded-full p-2 hover:bg-slate-100 transition-colors">
                <svg
                  className="w-5 h-5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </div>

          {/* Menu Items */}
          <nav className="grow overflow-y-auto p-4 flex flex-col">
            <div className="space-y-2 grow">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  onClick={() => setOpen(false)}
                  prefetch="intent"
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Additional Section */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium">Privacy Policy</span>
              </a>
              <div className="px-4 py-3">
                <Socials
                  liClass="bg-black!"
                  contextValue={{ color: "white", size: "1em" }}
                />
              </div>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Menu;
