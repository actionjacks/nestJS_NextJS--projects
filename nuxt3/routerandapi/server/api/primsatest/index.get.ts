import prisma from "~/server/api/index";

export default defineEventHandler(async () => {
  // await prisma.user.create({
  //   data: {
  //     name: "jack",
  //     email: "jack@dupao2.pl",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany();

  return {
    allUsers,
  };
});
