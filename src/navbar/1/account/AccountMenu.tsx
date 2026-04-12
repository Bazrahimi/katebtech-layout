import type { AccountMenuProps } from "../types";
import { AccountMenuClient } from "./AccountMenuClient";

/**
 * Account dropdown menu wrapper.
 *
 * Passes navbar account menu props through to the interactive
 * client component.
 *
 * @param props - Account menu configuration.
 * @param props.navLinkBase - Base className applied to the account menu trigger.
 * @param props.navIcon - ClassName applied to the account icon.
 * @param props.items - Menu items shown in the account dropdown.
 * @param props.onLogout - Optional async logout action used when a logout item is triggered.
 * @param props.label - Optional accessible label for the account menu trigger.
 */
export const AccountMenu = (props: AccountMenuProps) => {
  return <AccountMenuClient {...props} />;
};
