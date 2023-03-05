import styles from './styles.module.css';

type TProps = {
  children: number;
};

const Card = ({ children }: TProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
