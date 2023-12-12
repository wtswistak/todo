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

export async function getTodos(userId: number) {
  try {
    const todos = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });
    return todos;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteTodo(userId: number, todoId: number) {
  try {
    await prisma.task.delete({
      where: {
        id: todoId,
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateTodo(userId: number, todoId: number) {
  try {
    await prisma.task.update({
      where: {
        id: todoId,
        userId: userId,
      },
      data: {
        completed: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
