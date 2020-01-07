import createHuman from './createHuman';
import createAi from './createAi';

export default function createActors() {
  return {
    human: createHuman(),
    ai: createAi(),
  };
};
