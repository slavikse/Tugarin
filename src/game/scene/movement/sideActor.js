import { actors } from '../state';

export default function sideActor({ detail: { name, side } }) {
  actors[name].side = side;
}
