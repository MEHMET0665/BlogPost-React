export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
  payload:{count:6}
})

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
  payload:{count:5}
})