import createHuman from './createHuman';
import createAI from './createAI';

export default function createActors() {
  return {
    human: createHuman(),
    ai: createAI(),
  };
};
