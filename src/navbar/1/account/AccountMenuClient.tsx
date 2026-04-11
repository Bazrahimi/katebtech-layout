"use client";

import { Button } from "@katebtech/core";
import { HiUser } from "react-icons/hi2";
import DropdownMenu from "../lib/DropdownMenu";
import { LogoutButton } from "./LogoutButton";

import type { AccountMenuProps } from "../types";

export const AccountMenuClient = ({
  navLinkBase,
  navIcon,
  onLogout,
  items,
}: AccountMenuProps) => {
  const totalItems = items.length + (onLogout ? 1 : 0);

  return (
    <DropdownMenu
      menuLabel="Account submenu"
      itemCount={totalItems}
      align="right"
      buttonClassName={`${navLinkBase} inline-flex items-center gap-1`}
      menuClassName="z-40 mt-3 w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-white/10 bg-app-p-main/95 p-2 text-white shadow-2xl ring-1 ring-black/20 backdrop-blur-xl"
      buttonContent={<HiUser className={navIcon} />}
    >
      {({ setItemRef, closeMenu }) => (
        <>
          <div className="px-3 pb-2 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Account
            </p>
          </div>

          <ul className="space-y-1">
            {items.map((item, idx) => (
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

            {onLogout ? (
              <>
                <li className="my-1 border-t border-white/10" />
                <li>
                  <form
                    action={async () => {
                      closeMenu();
                      await onLogout?.();
                    }}
                  >
                    <LogoutButton />
                  </form>
                </li>
              </>
            ) : null}
          </ul>
        </>
      )}
    </DropdownMenu>
  );
};
