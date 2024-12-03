import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FactoryServiceBase } from "./base/factory.service.base";

@Injectable()
export class FactoryService extends FactoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
