import { MenuItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.scss";

interface Props {
  menu: MenuItem[];
  isActive: boolean;
}

export const MobileMenu = ({ menu, isActive }: Props) => {
  return (
    <div className={`${styles.mobileMenu} ${isActive ? "" : styles.hide}`}>
      <ul className={styles.mobileMenuList}>
        {menu.map((menuItem) => (
          <li key={menuItem.name} className="mobile-menu__item">
            <Link href={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>

      <ul className={styles.sns}>
        <li>
          <Link href="#">
            <Image src="/x.png" alt="twitter" width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
