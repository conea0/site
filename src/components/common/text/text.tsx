import styles from "./text.module.scss";

interface TextProps {
  title: string;
  text: string;
  width: "full" | "half";
  gradient?: boolean;
}

export const Text = ({
  title,
  text,
  width,
  gradient,
  children,
}: React.PropsWithChildren<TextProps>) => {
  return (
    <div className={`${styles.section} ${width == "full" ? "" : styles.half}`}>
      <div
        className={`${styles.container} ${
          width == "full" ? "" : styles.halfContainer
        }`}
      >
        <h2 className={gradient ? styles.h2Gradient : ""}>{title}</h2>
        <p>{text}</p>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
