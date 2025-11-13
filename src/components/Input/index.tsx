import styles from './styles.module.css';

type TInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ labelText, id, type, ...props }: TInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
