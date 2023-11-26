import { Button } from "@/components/button/button";
import styles from "./header.styles";

export const Header = () => {
  return (
    <div className={styles.gradient}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.cp}>
            <h1 className={styles.h1}>Advancing Japanese Technology</h1>
            <h2 className={styles.h2}>by Education.</h2>
          </div>
          <p className={styles.description}>
            Coneaは、日本におけるテクノロジーの進歩をリードする組織です。
            <br />
            私たちは教育で、IT業界の未来をつくります。
          </p>
        </div>

        <div className={styles.button}>
          <Button size="large" path="#" color="black" image="/logo-aqua.png">
            サービスを見る
          </Button>
          <Button size="large" path="#" color="white">
            お問い合わせ
          </Button>
        </div>
      </div>
    </div>
  );
};
