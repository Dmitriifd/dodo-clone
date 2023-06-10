type WeightMapping = {
  [selectSize: number]: {
    [selectType: number]: number;
  };
};

function selectWeight(
  selectSize: number,
  selectType: number,
  weight: number[]
): number | undefined {
  const weightMapping: WeightMapping = {
    0: { 0: 0 },
    1: { 0: 2, 1: 1 },
    2: { 0: 4, 1: 3 }
  };

  return weight[weightMapping[selectSize]?.[selectType]];
}

export { selectWeight };
