/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Engineer as PrismaEngineer } from "@prisma/client";

export class EngineerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EngineerCountArgs, "select">): Promise<number> {
    return this.prisma.engineer.count(args);
  }

  async engineers(
    args: Prisma.EngineerFindManyArgs
  ): Promise<PrismaEngineer[]> {
    return this.prisma.engineer.findMany(args);
  }
  async engineer(
    args: Prisma.EngineerFindUniqueArgs
  ): Promise<PrismaEngineer | null> {
    return this.prisma.engineer.findUnique(args);
  }
  async createEngineer(
    args: Prisma.EngineerCreateArgs
  ): Promise<PrismaEngineer> {
    return this.prisma.engineer.create(args);
  }
  async updateEngineer(
    args: Prisma.EngineerUpdateArgs
  ): Promise<PrismaEngineer> {
    return this.prisma.engineer.update(args);
  }
  async deleteEngineer(
    args: Prisma.EngineerDeleteArgs
  ): Promise<PrismaEngineer> {
    return this.prisma.engineer.delete(args);
  }
}