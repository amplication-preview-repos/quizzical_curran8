import { MaintenanceReport as TMaintenanceReport } from "../api/maintenanceReport/MaintenanceReport";

export const MAINTENANCEREPORT_TITLE_FIELD = "id";

export const MaintenanceReportTitle = (record: TMaintenanceReport): string => {
  return record.id?.toString() || String(record.id);
};
