import { Engineer as TEngineer } from "../api/engineer/Engineer";

export const ENGINEER_TITLE_FIELD = "id";

export const EngineerTitle = (record: TEngineer): string => {
  return record.id?.toString() || String(record.id);
};
