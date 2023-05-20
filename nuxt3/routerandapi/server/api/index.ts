import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("The connection to the database has been established.");
  } catch (error) {
    console.error("Error while connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
testDatabaseConnection();

export default prisma;
