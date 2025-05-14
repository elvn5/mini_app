import { Outlet, useLocation } from 'react-router';
import styles from "./styles.module.scss"
import { Header, BottomNav } from '../components';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const AppLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const title = useMemo(()=> {
    if(location.pathname === '/settings'){
      return t("settings")
    }
    if(location.pathname === '/plan'){
      return t("plan")
    }
    return t("exercises")
  }, [location.pathname, t]);

  return (
  <div className={styles.container}>
    <Header title={title}/>
      <div className={styles.outlet}>
        <Outlet/>
      </div>
    <BottomNav/>
  </div>)
}