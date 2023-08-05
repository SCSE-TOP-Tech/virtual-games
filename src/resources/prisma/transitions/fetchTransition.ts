/**
 * Next.JS POST API to start Timer
 *
 */

import { transitions } from "~/data/data";
import { Transition } from "~/data/contracts/interfaces/transition";

async function fetchTransition(transitionID: number) {
  return transitions.find((item, index) => index == transitionID);
}
export default fetchTransition;
