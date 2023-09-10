import { PrismaClient } from "@prisma/client"
import cors from "cors"
import express, { Application } from "express"
import { userRouter } from "./modules/user/user.route";

const app: Application = express();
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

const prisma = new PrismaClient();

app.use('/api/v1/auth', userRouter);

async function main() {
    app.listen(port, () => {
        console.log(`Assignment Eight Server is Runnung ${port}`)
    })
}

main()