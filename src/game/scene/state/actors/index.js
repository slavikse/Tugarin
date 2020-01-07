import human from './human';
import ai from './ai';

export default function actors() {
  return {
    human: human(),
    ai: ai(),
  };
};
