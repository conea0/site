"use client";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./button.styles";

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
  return (
    <Link href={path} className={styles({ size, color })}>
      {image ? (
        <Image
          className="img"
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
