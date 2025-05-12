import { Outlet } from 'react-router';
import styles from "./styles.module.scss"

export const AppLayout = () => {
  return (
  <div className={styles.container}>
      <Outlet/>
  </div>)
}