import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FactoryService } from "./factory.service";
import { FactoryControllerBase } from "./base/factory.controller.base";

@swagger.ApiTags("factories")
@common.Controller("factories")
export class FactoryController extends FactoryControllerBase {
  constructor(protected readonly service: FactoryService) {
    super(service);
  }
}
