/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FactoryService } from "../factory.service";
import { FactoryCreateInput } from "./FactoryCreateInput";
import { Factory } from "./Factory";
import { FactoryFindManyArgs } from "./FactoryFindManyArgs";
import { FactoryWhereUniqueInput } from "./FactoryWhereUniqueInput";
import { FactoryUpdateInput } from "./FactoryUpdateInput";

export class FactoryControllerBase {
  constructor(protected readonly service: FactoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Factory })
  async createFactory(
    @common.Body() data: FactoryCreateInput
  ): Promise<Factory> {
    return await this.service.createFactory({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Factory] })
  @ApiNestedQuery(FactoryFindManyArgs)
  async factories(@common.Req() request: Request): Promise<Factory[]> {
    const args = plainToClass(FactoryFindManyArgs, request.query);
    return this.service.factories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Factory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async factory(
    @common.Param() params: FactoryWhereUniqueInput
  ): Promise<Factory | null> {
    const result = await this.service.factory({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Factory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFactory(
    @common.Param() params: FactoryWhereUniqueInput,
    @common.Body() data: FactoryUpdateInput
  ): Promise<Factory | null> {
    try {
      return await this.service.updateFactory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Factory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFactory(
    @common.Param() params: FactoryWhereUniqueInput
  ): Promise<Factory | null> {
    try {
      return await this.service.deleteFactory({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}