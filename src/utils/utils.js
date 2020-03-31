export const convertArrayToMap = arr => {
  return arr.reduce((acc, item) => {
    let { resourceType } = item;
    return {
      ...acc,
      [resourceType]: [...(acc[resourceType] || []), item]
    };
  }, {});
};

export const convertMapToArray = obj => {
  return Object.keys(obj).map(key => obj[key]);
};
