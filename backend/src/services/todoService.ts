import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addTodo(
  userId: number,
  title: string,
  priority: string,
  completed: boolean
): Promise<void> {
  try {
    await prisma.task.create({
      data: {
        title: title,
        priority: priority,
        userId: userId,
        completed: completed,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
