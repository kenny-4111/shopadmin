"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/constants/Navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full border-b border-gray-800 bg-[#111111] p-4 text-gray-200 md:min-h-screen md:w-64 md:border-b-0 md:border-r md:p-4">
      <div className="flex items-center justify-between md:block">
        <h1 className="text-xl font-bold sm:text-2xl">ShopAdmin</h1>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-lg border border-gray-700 p-2 text-gray-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}>
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>

      <nav className={`mt-4 md:mt-8 ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-wrap gap-2 md:flex-col md:gap-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition md:gap-3 md:text-base ${
                    isActive ?
                      "bg-white text-black"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}>
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
