import getProgression from '../getProgression.js';
import getRandomNum from '../getRandomNum.js';

export default (mode) => {
  if (mode === 'GENERATE_TASK') {
    return 'What number is missing in the progression?';
  }
  const progression = getProgression();
  const indexOfHiddenMember = getRandomNum(9);
  const hiddenMember = progression[indexOfHiddenMember];
  const progressionWithoutMember = [...progression.slice(0, indexOfHiddenMember), '..', ...progression.slice(indexOfHiddenMember + 1)];
  return [progressionWithoutMember.join(' '), hiddenMember];
};
