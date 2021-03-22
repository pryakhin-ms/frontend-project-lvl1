import getRandomNum from './getRandomNum.js';

export default () => {
  const firstMember = getRandomNum(20);
  const step = getRandomNum(10);
  const result = [firstMember];
  for (let i = 1; i < 10; i += 1) {
    result.push(firstMember + step * i);
  }
  return result;
};
