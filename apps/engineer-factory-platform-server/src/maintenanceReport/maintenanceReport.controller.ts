import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceReportService } from "./maintenanceReport.service";
import { MaintenanceReportControllerBase } from "./base/maintenanceReport.controller.base";

@swagger.ApiTags("maintenanceReports")
@common.Controller("maintenanceReports")
export class MaintenanceReportController extends MaintenanceReportControllerBase {
  constructor(protected readonly service: MaintenanceReportService) {
    super(service);
  }
}
