import { Request, Response } from "express"
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const userCreateController = async (req: Request, res: Response) => {
    const userData: User = req.body
    const userResult = await prisma.user.create({data: userData})
    res.send({result: userResult, message: 'User created successfully'})
   
}
