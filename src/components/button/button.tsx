"use client";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  path: string;
  color: "white" | "black";
  size: "small" | "medium" | "large";
  image?: string;
}

export const Button = ({
  path,
  color,
  size,
  image,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const handleClick = () => {
    location.href = path;
  };

  return (
    <Link
      href={path}
      className={`${styles.buttonWrapper} ${styles[color]} ${styles[size]}`}
      onClick={handleClick}
    >
      {image ? (
        <Image
          className={styles.img}
          src={image as string}
          alt="button"
          width={16}
          height={16}
        />
      ) : null}
      {children}
    </Link>
  );
};
