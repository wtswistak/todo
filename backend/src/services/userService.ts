import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export class UserError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserError";
  }
}

export async function addUser(
  username: string,
  email: string,
  password: string
): Promise<void> {
  try {
    const usernameExist = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    const emailExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (emailExist) {
      throw new UserError("Email already exists");
    }
    if (usernameExist) {
      throw new UserError("Username already exists");
    }
    const passwordCrypt = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: passwordCrypt,
      },
    });

    console.log("User added");
  } catch (error) {
    console.error("Problem during adding new user", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function loginUser(
  username: string,
  password: string
): Promise<User> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw new UserError("Username not found");
    }
    const passwordCrypt = await bcrypt.compare(password, user.password);
    if (!passwordCrypt) {
      throw new UserError("Password is incorrect");
    }
    console.log("Login success");
    console.log(user.id);
    return user;
  } catch (error) {
    console.error("Problem during login", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
