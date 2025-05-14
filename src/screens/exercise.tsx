import { List } from 'antd';
import styles from "./styles.module.scss"

import Abs from "../assets/images/abs.png"
import Back from "../assets/images/back.png"
import Biceps from "../assets/images/biceps.png"
import Chest from "../assets/images/chest.png"
import Legs from "../assets/images/legs.png"
import Shoulders from "../assets/images/shoulders.png"
import Triceps from "../assets/images/triceps.png"
import { NavLink } from 'react-router';

const uuid = crypto.randomUUID();


export const ExercisesScreen = () => {

  const data = [
    {
      title: "Пресс",
      image: Abs,
      id: uuid
    },
    {
      title: "Спина",
      image: Back,
      id: uuid
    },
    {
      title: "Бицепс",
      image: Biceps,
      id: uuid
    },
    {
      title: "Грудь",
      image: Chest,
      id: uuid
    },
    {
      title: "Ноги",
      image: Legs,
      id: uuid
    },
    {
      title: "Плечи",
      image: Shoulders,
      id: uuid
    },
    {
      title: "Трицепс",
      image: Triceps,
      id: uuid
    },
  ]

  return (
      <List
        itemLayout="horizontal"
        className={styles.exercise}
        dataSource={data}
        renderItem={(item) => (
                 <NavLink to={`/${item.id}`}>
                   <List.Item>
                     <List.Item.Meta
                       title={item.title}
                     />
                     <img alt="image" width={100} height={100} src={item.image}/>
                   </List.Item>
                 </NavLink>
               )}>
      </List>
  )
}