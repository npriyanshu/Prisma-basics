import { PrismaClient } from '@prisma/client'    
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient()
// const prisma = new PrismaClient({log:["query"]})  <-- every time prisma runs a query it will log it 

async function main() {
    // await prisma.user.deleteMany()
    //create
//   const user = await prisma.user.create({
//     data:{
// name: 'Plinchu Bhai',
// email: 'passss@gmail.com',
// age:23, 
// userPreference:{
//     create:{
//         emailUpdates:true
//     }
// }
//     },
    // we can only use select or include at a time
    // include:{
    //     userPreference:true,
    // }

    // or we can us select
//     select:{
//         name:true,
//         email:true,
//         userPreference:{select:{
//             id:true
//         }}
//     }

//    })
//    console.log(user)

// const users = await prisma.user.createMany({
//         data:[
// {
//      name: 'Plinchu Bhai',
// email: 'passss@gmail.com',
// age:23, 
// },
// {
//      name: 'pinchu Bhai',
// email: 'pinchu@gmail.com',
// age:23, 
// },
// {
//      name: 'anchu Bhai',
// email: 'anchu@gmail.com',
// age:23, 
// },
       
// ]})
const user = await prisma.user.findUnique({
    where: {
      age_name:{
        age:23,
        name:"Plinchu Bhai"
      }
    }
  });
  

console.log(user)
}


main().catch(e => {
    console.error(e)
})
.finally(async () => {
    await prisma.$disconnect()

})