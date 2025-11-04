import styles from './styles.module.css';

type TContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: TContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
