import * as graphql from "@nestjs/graphql";
import { MaintenanceReportResolverBase } from "./base/maintenanceReport.resolver.base";
import { MaintenanceReport } from "./base/MaintenanceReport";
import { MaintenanceReportService } from "./maintenanceReport.service";

@graphql.Resolver(() => MaintenanceReport)
export class MaintenanceReportResolver extends MaintenanceReportResolverBase {
  constructor(protected readonly service: MaintenanceReportService) {
    super(service);
  }
}
