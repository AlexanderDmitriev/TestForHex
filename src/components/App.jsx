/* import KitchenForm from './KitchenForm'; */
import { MyKitchenForm } from './MyKitchenForm';
import { usePostDishesMutation } from '../redux/dishes';

export const App = () => {
  const [postDish] = usePostDishesMutation();

  const postMyDish = ({ name, preparation_time }) => {
    postDish({ name, preparation_time });
  };
  return (
    <>
      {/*  <KitchenForm /> */}
      <MyKitchenForm onSubmit={postMyDish} />
    </>
  );
};
