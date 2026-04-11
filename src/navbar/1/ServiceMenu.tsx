"use client";

import { Button } from "@katebtech/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DropdownMenu from "./lib/DropdownMenu";
import type { ServicesMenuProps } from "./types";

export const ServicesMenuClient = ({ services }: ServicesMenuProps) => {
  const pathname = usePathname();
  const [routeKey, setRouteKey] = useState(pathname);

  useEffect(() => {
    setRouteKey(pathname);
  }, [pathname]);

  return (
    <DropdownMenu
      key={routeKey}
      menuLabel="Services submenu"
      itemCount={services.length}
      align="center"
      buttonClassName="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 transition duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
      menuClassName="z-40 mt-3 w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-white/10 bg-app-p-main/95 p-2 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-xl"
      buttonContent={<span>Services</span>}
    >
      {({ setItemRef, closeMenu }) => (
        <>
          <div className="px-3 pb-2 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Explore
            </p>
          </div>

          <ul className="space-y-1">
            {services.map((item, idx) => (
              <li key={item.href}>
                <Button
                  size="xs"
                  variant="secondary"
                  fullWidth
                  className="justify-start rounded-xl text-left shadow-none hover:scale-100"
                  as="link"
                  ref={setItemRef(idx)}
                  href={item.href}
                  role="menuitem"
                  onClick={closeMenu}
                >
                  <span className="w-full text-left">{item.label}</span>
                </Button>
         
              </li>
            ))}
          </ul>
        </>
      )}
    </DropdownMenu>
  );
}
