"use client";
import { MenuItem } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./mobileMenu/menu";
import { OpenBtn } from "./mobileMenu/openBtn";
import styles from "./navbar.module.scss";

interface Props {
  menu: MenuItem[];
}

export const Navbar = ({ menu }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive((current) => !current);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">
          <Image src="/logo.png" alt="logo" width={25} height={25} />
        </a>
        <p>Conea</p>
      </div>
      <ul className={styles.menu}>
        {menu.map((menuItem) => (
          <li key={menuItem.name} className={styles.menuItem}>
            <a href={menuItem.path}>{menuItem.name}</a>
          </li>
        ))}
      </ul>

      <OpenBtn toggleClass={toggleClass} isActive={isActive} />
      <MobileMenu menu={menu} isActive={isActive} />
    </nav>
  );
};
