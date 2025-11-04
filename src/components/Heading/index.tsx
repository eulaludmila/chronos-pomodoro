import styles from './styles.module.css';

type THeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: THeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
