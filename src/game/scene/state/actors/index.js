import getHuman from './getHuman';
import getAi from './getAi';

export default function getActors({ size }) {
  return {
    human: getHuman({ size }),
    ai: getAi({ size }),
  };
};
