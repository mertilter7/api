// const { PrismaClient } = require('@prisma/client');
// const { response } = require('express');
// const prisma = new PrismaClient()


// const getCategories = async ( req , res ) => {
//     try {
//         let categories = await prisma.categories.findMany()
//         res.json(categories)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getCategoriesById = async ( req ,res ) => {
//     try {
//         let { id } = req.params.id
//         let CategoriesById = await prisma.categories.findFirst({
//             where : { id : parseInt(id)}
//         })
//         res.json(CategoriesById)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const createCategories = async ( req , res ) => {
//     try {
//         let { name , title ,subcategory } = req.body
//         let categories = await prisma.categories.create({
//             data : {
//                 name ,
//                 title,
//                 subcategory,
//             }
//         })
//         res.json(categories)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const deleteCategories = async ( req , res ) => {
//     try {
//         let { id } = req.params.id
//         let checkCategories = await prisma.categories.findFirst({
//             where : { id : parseInt(id)}
//         })
//         if ( checkCategories ) {
//             await prisma.categories.delete({
//                 where : { id : parseInt(id)}
//             })
//             res.json({msg : ' Kategori Silindi'})
//         } else {
//             res.json ({msg : 'Kategori Bulunamadi'})
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// const updateCategories = async ( req , res ) => {
//     try {
//         let { id } = req.params.id
//         let { name , subcategories } = req.body
//         let updateCategories = await prisma.categories.findFirst({
//             where : {id : parseInt(id)},
//             data : {
//                 name,
//                 subcategory
//             }
//         })
//         res.json(updateCategories)
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = {
//     getCategories,
//     getCategoriesById,
//     deleteCategories,
//     createCategories,
//     updateCategories
// }