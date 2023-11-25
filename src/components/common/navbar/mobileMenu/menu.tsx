import { MenuItem } from "@/types";
import Image from "next/image";
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
            <a href={menuItem.path}>{menuItem.name}</a>
          </li>
        ))}
      </ul>

      <ul className={styles.sns}>
        <li>
          <a href="#">
            <Image src="/x.png" alt="twitter" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
