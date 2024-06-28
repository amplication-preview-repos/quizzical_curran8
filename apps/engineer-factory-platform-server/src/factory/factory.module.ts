import { Module } from "@nestjs/common";
import { FactoryModuleBase } from "./base/factory.module.base";
import { FactoryService } from "./factory.service";
import { FactoryController } from "./factory.controller";
import { FactoryResolver } from "./factory.resolver";

@Module({
  imports: [FactoryModuleBase],
  controllers: [FactoryController],
  providers: [FactoryService, FactoryResolver],
  exports: [FactoryService],
})
export class FactoryModule {}
