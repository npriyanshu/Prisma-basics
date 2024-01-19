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
const user = await prisma.user.findMany({
    where: {
        // age:23
        // name:"pinchu"
        // name:{equals:"pinchu"}  //- gives users with matching name
        // name:{not:"pinchu"}, // - gives names which not matched
        // name:{in:["pinchu",'someothername']}  //- gives users which names are presented in this array
        // name:{notIn:["pinchu",'someothername']} // - gives users which names are not presented in this array


        // we can also perform and type query by giving two attributes like this 

// name:"pinchu Bhai",
// age:{lt:30} // - ls = less than  and gt = greater than

// contains - check if a text is inside another text

// email:{contains:"gmail"}

// endswith - check if a text ends with another text


// email:{endsWith:"@gmail.com"}

// startsWith - check if a text starts with another text

// email:{startsWith:"pinchu"}

    },
//     orderBy:{
//         age:"asc"
//     },
//     // distinct:['name','age']
//     take:2,
//     skip:1,
  });
  

console.log(user)
}


main().catch(e => {
    console.error(e)
})
.finally(async () => {
    await prisma.$disconnect()

})