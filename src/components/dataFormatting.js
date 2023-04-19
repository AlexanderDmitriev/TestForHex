export const dataFormatting = (values, dishesType, formattedTime,spiceLevel) => {
  let additionalData;
  switch (dishesType) {
    case 'pizza':
      additionalData = {
        no_of_slices: values.no_of_slices,
        diameter: values.diameter,
      };
      break;

    case 'soup':
      additionalData = { spiciness_scale: spiceLevel };
      break;
    case 'sandwich':
      additionalData = { slices_of_bread: values.slices_of_bread };
      break;

    default:
      additionalData = null;
  }
  return {
    name: values.name,
    preparation_time: formattedTime,
    type: dishesType,
    ...additionalData,
  };
};
