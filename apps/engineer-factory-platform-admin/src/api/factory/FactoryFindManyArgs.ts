import { FactoryWhereInput } from "./FactoryWhereInput";
import { FactoryOrderByInput } from "./FactoryOrderByInput";

export type FactoryFindManyArgs = {
  where?: FactoryWhereInput;
  orderBy?: Array<FactoryOrderByInput>;
  skip?: number;
  take?: number;
};
