"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/Navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">ShopAdmin</h1>

      <nav>
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                    isActive ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}>
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
