import { Menu } from 'antd';
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

export const BottomNav = () => {
  const { t } = useTranslation();


  const items = [
    {
      key: 'exercises',
      label: (<NavLink to="/">{t('exercises')}</NavLink>),
    },
    // {
    //   key: 'plan',
    //   label:  (<NavLink to="/plan">{t('plan')}</NavLink>),
    // },
    {
      key: 'settings',
      label:(<NavLink to="/settings">{t('settings')}</NavLink>),
    },
  ]

  return (
    <div className={styles.bottomNav}>
      <Menu
        mode="vertical"
        theme="light"
        defaultSelectedKeys={["exercises"]}
        className={styles.menu}
        items={items}
        />
    </div>
  )
}