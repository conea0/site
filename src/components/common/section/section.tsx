import styles from "./section.module.scss";

export const Section = ({ children }: React.PropsWithChildren<{}>) => {
	return <div className={styles.section}>{children}</div>;
}
