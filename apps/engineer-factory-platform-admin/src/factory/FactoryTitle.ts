import { Factory as TFactory } from "../api/factory/Factory";

export const FACTORY_TITLE_FIELD = "id";

export const FactoryTitle = (record: TFactory): string => {
  return record.id?.toString() || String(record.id);
};
