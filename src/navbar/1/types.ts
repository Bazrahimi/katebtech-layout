import type {
  Dispatch,
  KeyboardEvent,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react";

import type { OtherLanguageKey } from "@katebtech/core";

export type MenuItem = {
  label: string;
  href: string;
};
export type AccountMenuProps = {
  navLinkBase: string;
  navIcon: string;
  items: readonly MenuItem[];
  onLogout?: () => Promise<void>;
  label?: string;
};

export type ServicesMenuProps = {
  services: readonly MenuItem[];
};

export type DropdownAlign = "left" | "center" | "right";

export type DropdownMenuHelpers = {
  setItemRef: (index: number) => (el: HTMLElement | null) => void;
  closeMenu: () => void;
};

export type DropdownMenuProps = {
  buttonContent: ReactNode;
  menuLabel: string;
  itemCount: number;
  children: (helpers: DropdownMenuHelpers) => ReactNode;
  buttonClassName?: string;
  menuClassName?: string;
  chevronClassName?: string;
  align?: DropdownAlign;
};

export type HomeLinkProps = {
  homeHref: string;
  orgName: string;
  orgIconSrc: string;
};

export type HzLanguageProps = {
  hzLanguage: OtherLanguageKey;
  href: string;
  src: string;
  className?: string;
};

export type PrimaryLinksProps = {
  aboutHref: string;
  contactHref?: string;
  hZLanguageHref: string;
  hzLanguageSrc: string;
  hzLanguage: OtherLanguageKey;
  services: readonly MenuItem[];
  primaryLinkClass: string;
};

export type UseDropdownReturn = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  rootRef: RefObject<HTMLDivElement | null>;
  btnRef: RefObject<HTMLButtonElement | null>;
  setItemRef: (index: number) => (el: HTMLElement | null) => void;
  onButtonKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  onMenuKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
};
