"use client";
import styles from "./openBtn.module.scss";

interface Props {
  toggleClass: () => void;
  isActive: boolean;
}

export const OpenBtn = ({ toggleClass, isActive }: Props) => {
  return (
    <div
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={toggleClass}
    >
      <span></span>
      <span></span>
    </div>
  );
};
