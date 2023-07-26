import Link from "next/link";
import { MenuItemInterface } from "@/app/interface/MenuItemInterface";

interface MenuItemProps {
  menuItem: MenuItemInterface;
}

export default function MenuItem({ menuItem }: MenuItemProps) {
  const itemName =
    menuItem.url.slice(1).charAt(0).toUpperCase() + menuItem.url.slice(2);
  return (
    <div className="leading-6 mr-6 md:mr-12">
      <Link href={menuItem.url}>{itemName} </Link>
    </div>
  );
}
