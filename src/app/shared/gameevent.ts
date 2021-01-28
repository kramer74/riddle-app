import { Aggregate } from "./aggregate";
import { Context } from "./context";

export interface GameEvent {
  aggregate: Aggregate;
  context: Context;
  id: string;
  name: string;
  causationId: string;
  payload: string;
}
