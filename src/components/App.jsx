import { MyKitchenForm } from './MyKitchenForm';
import { usePostDishesMutation } from '../redux/dishes';

export const App = () => {
  const [postDish] = usePostDishesMutation();

  const postMyDish = ({ name, preparation_time,type,...additionalData }) => {
    postDish({ name, preparation_time,type,...additionalData });
  };
  return (
    <>
      <MyKitchenForm onSubmit={postMyDish} />
    </>
  );
};
