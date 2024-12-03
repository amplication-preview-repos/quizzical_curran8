import * as graphql from "@nestjs/graphql";
import { FactoryResolverBase } from "./base/factory.resolver.base";
import { Factory } from "./base/Factory";
import { FactoryService } from "./factory.service";

@graphql.Resolver(() => Factory)
export class FactoryResolver extends FactoryResolverBase {
  constructor(protected readonly service: FactoryService) {
    super(service);
  }
}
