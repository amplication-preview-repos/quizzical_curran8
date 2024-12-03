import { Module } from "@nestjs/common";
import { MaintenanceReportModuleBase } from "./base/maintenanceReport.module.base";
import { MaintenanceReportService } from "./maintenanceReport.service";
import { MaintenanceReportController } from "./maintenanceReport.controller";
import { MaintenanceReportResolver } from "./maintenanceReport.resolver";

@Module({
  imports: [MaintenanceReportModuleBase],
  controllers: [MaintenanceReportController],
  providers: [MaintenanceReportService, MaintenanceReportResolver],
  exports: [MaintenanceReportService],
})
export class MaintenanceReportModule {}
