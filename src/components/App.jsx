import { useState } from 'react';
import { MyKitchenForm } from './Forms/MyKitchenForm';
import { usePostDishesMutation } from '../redux/dishes';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [postDish,  isSuccess, isError ] = usePostDishesMutation();
  const [dishesType, setDishesType] = useState('');

  const handleSelect = event => {
    const { value } = event.target;
    setDishesType(value);
  };

  const postMyDish = ({ name, preparation_time, type, ...additionalData }) => {
    postDish({ name, preparation_time, type, ...additionalData });
    if (isSuccess) {
      toast.success(`Successfully. Cooking for you now. Sorry, you have no choice yet`);
    }
    if (isError){
      toast.error(`Oops, something wrong. Try again!`);
    }
  };

  return (
    <>
      <MyKitchenForm
        onSubmit={postMyDish}
        dishesType={dishesType}
        handleSelect={handleSelect}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
