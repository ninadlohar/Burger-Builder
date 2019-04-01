export const updateObject = (oldObject, oldProperties) => {
  return {
    ...oldObject,
    ...oldProperties
  };
};
