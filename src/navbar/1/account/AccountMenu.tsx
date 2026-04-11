import type { AccountMenuProps } from "../types";
import { AccountMenuClient } from "./AccountMenuClient";

export const AccountMenu = (props: AccountMenuProps) => {
  return <AccountMenuClient {...props} />;
};

