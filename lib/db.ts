import {PrismaClient} from '@prisma/client'

declare global {
    var prisma : PrismaClient | undefined;
}

// globalThis.prisma = this preventing the overflow error and globalThis is not affecting by hard Reload. So, for prevent our project to crash we use below code instead creating a new PrismaClient() every time

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;
