import { PrismaClient } from '@prisma/client'    
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient()

async function main() {
   await prisma.user.deleteMany()
}


main().catch(e => {
    console.error(e)
})
.finally(async () => {
    await prisma.$disconnect()

})