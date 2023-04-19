import { useState } from 'react';
import { MyKitchenForm } from './Forms/MyKitchenForm';
import { usePostDishesMutation } from '../redux/dishes';

export const App = () => {
  const [postDish] = usePostDishesMutation();
  const [dishesType, setDishesType] = useState('');

  const handleSelect = event => {
    const { value } = event.target;
    setDishesType(value);
  };

  const postMyDish = ({ name, preparation_time, type, ...additionalData }) => {
    postDish({ name, preparation_time, type, ...additionalData });
  };
  return (
    <>
      <MyKitchenForm
        onSubmit={postMyDish}
        dishesType={dishesType}
        handleSelect={handleSelect}
      />
    </>
  );
};
