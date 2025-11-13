import styles from './styles.module.css';

type TGenericHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: TGenericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
