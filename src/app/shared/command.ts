import { Aggregate } from "./aggregate";
import { Context } from "./context";

export interface Command {
  aggregate: Aggregate;
  context: Context;
  id: string;
  name: string;
}
