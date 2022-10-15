import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // this is connection to DB

/*
  for test
*/
async function main() {
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "jacek Placek",
      email: "sraja@o2.pl",
      age: 28,
      UserPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // include: {
    //   UserPreference: true,
    // },
    select: {
      name: true,
      UserPreference: { select: { id: true } },
    },
  });

  const findUser = await prisma.user.findUnique({
    where: {
      email: "sraja@o2.pl",
    },
  });

  const findUserByUnique = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 28,
        name: "jacek Placek",
      },
    },
  });

  /*
    const updateUser = await prisma.user.update({
      where: {
        email: "ja@2.pl",
      },
      data: {
        email: "sarrr@p2.pl",
      },
    });
  */

  console.log({ user });
  console.log({ findUser });
  console.log({ findUserByUnique });
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
