import { Typography } from 'antd';
import { useParams } from 'react-router';

export const ExerciseCategoryScreen = () => {

  const { id } = useParams()

  console.log(id)
  return (
    <Typography.Title>
      {id}
    </Typography.Title>
  )
}