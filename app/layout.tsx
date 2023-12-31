import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import MenuItem from "@/app/MenuItem";
import { MenuItemInterface } from "@/app/interface/MenuItemInterface";
import Link from "next/link";
import { getPages } from "@/app/utils/dataFetching";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await getPages();
  const homeItem = menuItems.shift();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mt-6 border-b">
          <nav className="w-full h-[73px] flex justify-between">
            <div className="flex">
              <Link href={homeItem.url}>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={89}
                  height={32}
                  className="ml-8 md:ml-16 mt-2"
                />
              </Link>
              <div className="ml-14 md:ml-[97px] mt-3 flex">
                {menuItems.map((menuItem: MenuItemInterface) => (
                  <MenuItem menuItem={menuItem} key={menuItem.id} />
                ))}
              </div>
            </div>
            <button className="whitespace-nowrap bg-testimonial-purple rounded-3xl h-8 md:h-12 text-xs md:text-base px-2 md:px-14 mr-2 md:mr-14 mt-2 md:mt-0">
              Contact us
            </button>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
