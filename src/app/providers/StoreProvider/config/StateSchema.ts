import { CommonSchema } from "@/store/common";
import { InitSchema } from "@/store/init";

export interface StateSchema {
  common: CommonSchema;
  init: InitSchema;
}
