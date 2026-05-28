use ("Vitcampus");

// db.products.insertMany([
// 	{ "_id" : 7, "name" : "xReader","price": null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
// ])

// o/p{
//   acknowledged: true,
//   insertedIds: {
//     '0': NumberInt('7')
//   }
// }

// db.products.find(
//    {
//  price: {
//  $exists: true
//  } 
// }, 
//    {
//  name: 1,
//  price: 1
//  }
// );

// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: NumberInt('699')
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: NumberInt('599')
// }
// {
//   _id: NumberInt('7'),
//   name: 'xReader',
//   price: null
// }

// db.products.find({
//     price: {
//         $exists: true,
//         $gt: 699
//     }
// }, {
//     name: 1,
//     price: 1
// });

// {
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberInt('899')
// }

// db.products.find({
//     price: {
//         $exists: false
//     }
// }, {
//     name: 1,
//     price: 1
// });

// o/p{
//   _id: NumberInt('6'),
//   name: 'xWidget'
// }

// db.products.insertMany([
// 	{ "_id" : 1, "name" : "xPhone", "price" : "799", "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
// 	{ "_id" : 2, "name" : "xTablet", "price" : NumberInt(899), "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
// 	{ "_id" : 3, "name" : "SmartTablet", "price" : NumberLong(899), "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
// 	{ "_id" : 4, "name" : "SmartPad", "price" : [599, 699, 799], "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
// 	{ "_id" : 5, "name" : "SmartPhone", "price" : ["599",699], "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
// 	{ "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] }
// ])

// o/p{
//   acknowledged: true,
//   insertedIds: {
//     '0': NumberInt('1'),
//     '1': NumberInt('2'),
//     '2': NumberInt('3'),
//     '3': NumberInt('4'),
//     '4': NumberInt('5'),
//     '5': NumberInt('6')
//   }
// }

// db.products.find({
//     price: {
//         $type: "string"
//     }
// }, {
//     name: 1,
//     price: 1
// })

// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: '799'
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: [
//     '599',
//     NumberInt('699')
//   ]
// }

// db.products.find({
//     price: {
//         $type: 2
//     }
// }, {
//     name: 1,
//     price: 1
// })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: '799'
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: [
//     '599',
//     NumberInt('699')
//   ]
// }

// db.products.find({
//     price: {
//         $type: "number"
//     }
// }, {
//     name: 1,
//     price: 1
// })
// o/p{
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberLong('899')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: [
//     NumberInt('599'),
//     NumberInt('699'),
//     NumberInt('799')
//   ]
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: [
//     '599',
//     NumberInt('699')
//   ]
// }

// db.products.find({
//     price: {
//         $type: "array"
//     }
// }, {
//     name: 1,
//     price: 1
// })
// o/p{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: [
//     NumberInt('599'),
//     NumberInt('699'),
//     NumberInt('799')
//   ]
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: [
//     '599',
//     NumberInt('699')
//   ]
// }

// db.products.find({
//     price: {
//         $type: ["number", "string"]
//     }
// }, {
//     name: 1,
//     price: 1
// })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: '799'
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberLong('899')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: [
//     NumberInt('599'),
//     NumberInt('699'),
//     NumberInt('799')
//   ]
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: [
//     '599',
//     NumberInt('699')
//   ]
// }

// db.products.drop();

// db.products.insertMany([
//  { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
//  { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
//  { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
//  { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
//  { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
//  { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] }
// ])

// db.products.find({
//     $or: [
//         { color: { $size: 1 } },
//         { color: { $size: 2 } }
//     ]
// }, {
//     name: 1,
//     color: 1
// })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   color: [
//     'white',
//     'black'
//   ]
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   color: [
//     'blue'
//   ]
// }
// {
//   _id: NumberInt('6'),
//   name: 'xWidget',
//   color: [
//     'black'
//   ]
// }

// db.products.find({
//     color: {
//         $all: ["black", "white"]
//     }
// }, {
//     name: 1,
//     color: 1
// })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   color: [
//     'white',
//     'black'
//   ]
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   color: [
//     'white',
//     'black',
//     'purple'
//   ]
// }

// // using and operator 
// db.products.find({
//     $and: [
//                 { color: "black" },
//                 { color: "white" } 
//           ]
// }, {
//     name: 1,
//     color: 1
// })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   color: [
//     'white',
//     'black'
//   ]
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   color: [
//     'white',
//     'black',
//     'purple'
//   ]
// }


// db.products.find({
//     storage:{
//         $elemMatch:{
//             $lt:128
//         }}
// },{
//    name:1,
//    storage:1
// });
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   storage: [
//     NumberInt('64'),
//     NumberInt('128'),
//     NumberInt('256')
//   ]
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   storage: [
//     NumberInt('16'),
//     NumberInt('64'),
//     NumberInt('128')
//   ]
// }

// db.products.drop();
// db.products.insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
//     { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
//     { "_id" : 7, "name" : "xReader", "price" : null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
// ])

