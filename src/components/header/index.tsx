import styles from "./styles.module.scss"
import { Typography } from 'antd';

type HeaderProps = {
  title?: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <div className={styles.header}>
        <Typography.Title>{title}</Typography.Title>
    </div>
  )
}