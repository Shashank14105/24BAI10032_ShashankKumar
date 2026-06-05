use("Coffee");
// db.sales.drop()
// db.sales.insertMany([
// 	{ "_id" : 1, "item" : "Americanos", "price" : 5, "size": "Short", "quantity" : 22, "date" : ISODate("2022-01-15T08:00:00Z") },
// 	{ "_id" : 2, "item" : "Cappuccino", "price" : 6, "size": "Short","quantity" : 12, "date" : ISODate("2022-01-16T09:00:00Z") },
// 	{ "_id" : 3, "item" : "Lattes", "price" : 15, "size": "Grande","quantity" : 25, "date" : ISODate("2022-01-16T09:05:00Z") },
// 	{ "_id" : 4, "item" : "Mochas", "price" : 25,"size": "Tall", "quantity" : 11, "date" : ISODate("2022-02-17T08:00:00Z") },
// 	{ "_id" : 5, "item" : "Americanos", "price" : 10, "size": "Grande","quantity" : 12, "date" : ISODate("2022-02-18T21:06:00Z") },
// 	{ "_id" : 6, "item" : "Cappuccino", "price" : 7, "size": "Tall","quantity" : 20, "date" : ISODate("2022-02-20T10:07:00Z") },
// 	{ "_id" : 7, "item" : "Lattes", "price" : 25,"size": "Tall", "quantity" : 30, "date" : ISODate("2022-02-21T10:08:00Z") },
// 	{ "_id" : 8, "item" : "Americanos", "price" : 10, "size": "Grande","quantity" : 21, "date" : ISODate("2022-02-22T14:09:00Z") },
// 	{ "_id" : 9, "item" : "Cappuccino", "price" : 10, "size": "Grande","quantity" : 17, "date" : ISODate("2022-02-23T14:09:00Z") },
// 	{ "_id" : 10, "item" : "Americanos", "price" : 8, "size": "Tall","quantity" : 15, "date" : ISODate("2022-02-25T14:09:00Z")}
// ]);

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       averageQty: { $avg: '$quantity' },
//     },
//   },
// ]);
// o/p{
//   _id: 'Cappuccino',
//   averageQty: Double('16.333333333333332')
// }
// {
//   _id: 'Americanos',
//   averageQty: Double('17.5')
// }
// {
//   _id: 'Lattes',
//   averageQty: Double('27.5')
// }
// {
//   _id: 'Mochas',
//   averageQty: NumberInt('11')
// }

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
//     },
//   },
//   { $sort: { averageAmount: 1 } },
// ])
// o/p{
//   _id: 'Cappuccino',
//   averageAmount: Double('127.33333333333333')
// }{
//   _id: 'Americanos',
//   averageAmount: NumberInt('140')
// }{
//   _id: 'Mochas',
//   averageAmount: NumberInt('275')
// }{
//   _id: 'Lattes',
//   averageAmount: Double('562.5')
// }

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
//     },
//   },
//   { $match: { averageAmount: { $gt: 150 } } },
//   { $sort: { averageAmount: 1 } },
// ]);
// o/p{
//   _id: 'Mochas',
//   averageAmount: NumberInt('275')
// }{
//   _id: 'Lattes',
//   averageAmount: Double('562.5')
// }

//
// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       itemCount: { $count: {} },
//     },
//   },
// ])
// o/p{
//   _id: 'Mochas',
//   itemCount: NumberInt('1')
// }{
//   _id: 'Lattes',
//   itemCount: NumberInt('2')
// }{
//   _id: 'Americanos',
//   itemCount: NumberInt('4')
// }{
//   _id: 'Cappuccino',
//   itemCount: NumberInt('3')
// }

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       itemCount: { $count: {} },
//     },
//   },
//   {
//     $match: { itemCount: { $gt: 2 } },
//   },
// ]);
// o/p{
//   _id: 'Cappuccino',
//   itemCount: NumberInt('3')
// }{
//   _id: 'Americanos',
//   itemCount: NumberInt('4')
// }

// db.sales.aggregate([
//   {
//     $group: {
//       _id: null,
//       totalQty: { $sum: '$quantity' },
//     },
//   },
// ]);
// o/p{
//   _id: null,
//   totalQty: NumberInt('185')
// }

// db.sales.aggregate([
//   {
//     $group: {
//       _id: null,
//       totalQty: { $sum: '$quantity' },
//     },
//   },
//   { $project: { _id: 0 } },
// ]);
// o/p[ { totalQty: 185 } ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       totalQty: { $sum: '$quantity' },
//     },
//   },
// ]);
// o/p[
//   { _id: 'Cappuccino', totalQty: 49 },
//   { _id: 'Lattes', totalQty: 55 },
//   { _id: 'Americanos', totalQty: 70 },
//   { _id: 'Mochas', totalQty: 11 }
// ]


// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       totalQty: { $sum: '$quantity' },
//     },
//   },
//   { $sort: { totalQty: -1 } },
// ]);
// o/p[
//   { _id: 'Americanos', totalQty: 70 },
//   { _id: 'Lattes', totalQty: 55 },
//   { _id: 'Cappuccino', totalQty: 49 },
//   { _id: 'Mochas', totalQty: 11 }
// ]


// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       totalQty: { $sum: '$quantity' },
//     },
//   },
//   { $match: { totalQty: { $gt: 50 } } },
//   { $sort: { totalQty: -1 } },
// ]);
// o/p[
//   { _id: 'Americanos', totalQty: 70 },
//   { _id: 'Lattes', totalQty: 55 }
// ]


// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$size',
//       totalAmount: { $sum: { $multiply: ['$price', '$quantity'] } },
//     },
//   },
//   { $sort: { totalAmount: -1 } },
// ]);
// o/p[
//   { _id: 'Tall', totalAmount: 1285 },
//   { _id: 'Grande', totalAmount: 875 },
//   { _id: 'Short', totalAmount: 182 }
// ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: null,
//       maxQty: { $max: '$quantity' },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//     },
//   },
// ]);
// o/p[ { maxQty: 30 } ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       maxQty: { $max: '$quantity' },
//     },
//   },
// ]);
// o/p[
//   { _id: 'Mochas', maxQty: 11 },
//   { _id: 'Americanos', maxQty: 22 },
//   { _id: 'Lattes', maxQty: 30 },
//   { _id: 'Cappuccino', maxQty: 20 }
// ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       maxQty: { $max: { $multiply: ['$quantity', '$price'] } },
//     },
//   },
// ]);
// o/p[
//   { _id: 'Mochas', maxQty: 275 },
//   { _id: 'Cappuccino', maxQty: 170 },
//   { _id: 'Americanos', maxQty: 210 },
//   { _id: 'Lattes', maxQty: 750 }
// ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: null,
//       maxQty: { $min: '$quantity' },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//     },
//   },
// ]);
// o/p[ { minQty: 11 } ]

// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       minQty: { $min: '$quantity' },
//     },
//   },
// ]);
// [
//   { _id: 'Mochas', minQty: 11 },
//   { _id: 'Americanos', minQty: 12 },
//   { _id: 'Lattes', minQty: 25 },
//   { _id: 'Cappuccino', minQty: 12 }
// ]


// db.sales.aggregate([
//   {
//     $group: {
//       _id: '$item',
//       maxQty: { $min: { $multiply: ['$quantity', '$price'] } },
//     },
//   },
// ]);
// o/p[
//   { _id: 'Cappuccino', minQty: 72 },
//   { _id: 'Americanos', minQty: 110 },
//   { _id: 'Lattes', minQty: 375 },
//   { _id: 'Mochas', minQty: 275 }
// ]

//-----------------------------------CRUD Operation---------------------------------------------------------
// db.sales.insertOne([
//     {"id" : 11, "item" : "Lattes", "price" : 20, "size" : "Tall", "quantity" : 20, "date" : ISODate("2022-02-26T14:09:00Z")
//     }
// ]);

// db.sales.find()
// o/p{
//   '0': {
//     id: NumberInt('11'),
//     item: 'Lattes',
//     price: NumberInt('20'),
//     size: 'Tall',
//     quantity: NumberInt('20'),
//     date: ISODate('2022-02-26T14:09:00.000Z')
//   },
//   _id: ObjectId('6a22dad395041656c0b37e24')
// }

//Update
