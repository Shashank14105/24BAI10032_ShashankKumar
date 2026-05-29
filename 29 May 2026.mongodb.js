use ("Vitcampus");
// db.products.drop()
// db.products.insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
//     { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
//     { "_id" : 7, "name" : "xReader", "price" : null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
// ])

// db.products.find({
//     'price': {
//         $exists: 1
//     }
// }, {
//     name: 1,
//     price: 1
// })
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
//     'price': {
//         $exists: 1
//     }
// }, {
//     name: 1,
//     price: 1
// }).sort({
//     price: 1
// })
// o/p{
//   _id: NumberInt('7'),
//   name: 'xReader',
//   price: null
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: NumberInt('599')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: NumberInt('699')
// }
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
//     'price': {
//         $exists: 1
//     }
// }, {
//     name: 1,
//     price: 1
// }).sort({
//     price: -1
// })
// o/p{
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
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
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
//     'price': {
//         $exists: 1
//     }
// }, {
//     name: 1,
//     price: 1
// }).sort({
//     price: 1,
//     name: 1
// });
// o/p{
//   _id: NumberInt('7'),
//   name: 'xReader',
//   price: null
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: NumberInt('599')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   price: NumberInt('699')
// }
// {
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberInt('899')
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }

// db.products.find({
//     releaseDate: {
//         $exists: 1
//     }

// }, {
//     name: 1,
//     releaseDate: 1
// }).sort({
//     releaseDate: 1
// });
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   releaseDate: ISODate('2011-05-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   releaseDate: ISODate('2011-09-01T00:00:00.000Z')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   releaseDate: ISODate('2015-01-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   releaseDate: ISODate('2020-05-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   releaseDate: ISODate('2022-09-14T00:00:00.000Z')
// }

// db.products.find({
//     releaseDate: {
//         $exists: 1
//     }

// }, {
//     name: 1,
//     releaseDate: 1
// }).sort({
//     releaseDate: -1
// });
// o/p{
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   releaseDate: ISODate('2022-09-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   releaseDate: ISODate('2020-05-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   releaseDate: ISODate('2015-01-14T00:00:00.000Z')
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   releaseDate: ISODate('2011-09-01T00:00:00.000Z')
// }
// {
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   releaseDate: ISODate('2011-05-14T00:00:00.000Z')
// }

// db.products.find({}, {
//     name: 1,
//     spec: 1
// }).sort({
//     "spec.ram": 1
// });
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   spec: {
//     ram: NumberInt('4'),
//     screen: Double('6.5'),
//     cpu: Double('2.66')
//   }
// }
// {
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   spec: {
//     ram: NumberInt('4'),
//     screen: Double('9.7'),
//     cpu: Double('1.66')
//   }
// }
// {
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   spec: {
//     ram: NumberInt('8'),
//     screen: Double('9.7'),
//     cpu: Double('1.66')
//   }
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   spec: {
//     ram: NumberInt('12'),
//     screen: Double('9.7'),
//     cpu: Double('3.66')
//   }
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   spec: {
//     ram: NumberInt('16'),
//     screen: Double('9.5'),
//     cpu: Double('3.66')
//   }
// }
// {
//   _id: NumberInt('6'),
//   name: 'xWidget',
//   spec: {
//     ram: NumberInt('64'),
//     screen: Double('9.7'),
//     cpu: Double('3.66')
//   }
// }
// {
//   _id: NumberInt('7'),
//   name: 'xReader',
//   spec: {
//     ram: NumberInt('64'),
//     screen: Double('6.7'),
//     cpu: Double('3.66')
//   }
// }

//Introduction to MongoDB limit() method

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

// db.products.find({}, {
//     name: 1,
//     price: 1
// }).sort({
//     price: -1
// }).limit(1);
// o/p{
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('899')
// }

// db.products.find({}, {
//     name: 1,
//     price: 1
// }).sort({
//     price: -1,
//     name: 1
// }).limit(1);

// db.products.find({}, {
//     name: 1,
//     price: 1
// }).sort({
//     price: -1,
//     name: 1
// }).skip(2).limit(2);
//NO OUTPUT 

//Introduction to MongoDB updateOne() method
// db.products.insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
//  ])

// db.products.updateOne({
//     _id: 1
// }, {
//     $set: {
//         price: 899
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.findOne({ _id: 1 }, { name: 1, price: 1 })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('899')
// }

// db.products.find({ price: 899 }, { name: 1, price: 1 })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('899')
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

// db.products.find({ _id: 4 }, { name: 1, spec: 1 })
// o/p{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   spec: {
//     ram: NumberInt('8'),
//     screen: Double('9.7'),
//     cpu: Double('1.66')
//   }
// }

// db.products.updateOne(
//  { _id: 4}, 
//  {
//     $set: {
//         "storage.0": 16,
//         "storage.1": 32
//     }
//  }
// )
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 4 }, { name: 1, storage: 1 });
// o/p{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   storage: [
//     NumberInt('16'),
//     NumberInt('32'),
//     NumberInt('1024')
//   ]
// }

// db.products.updateOne({
//     _id: 1
// }, {
//     $set: {
//         price: 899
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('0'),
//   upsertedCount: NumberInt('0')
// }



// db.products.findOne({ _id: 1 }, { name: 1, price: 1 })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
// }

// db.products.find({ price: 899 }, { name: 1, price: 1 })
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.updateOne({ price: 899 }, { $set: { price: null } })


// db.products.find({ _id: 1}, { name: 1, price: 1 })
// o/p{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799')
// }

// db.products.find({ _id: 4 }, { name: 1, spec: 1 })
// o/p:{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   spec: {
//     ram: NumberInt('8'),
//     screen: Double('9.7'),
//     cpu: Double('1.66')
//   }
// }

// db.products.updateOne({
//     _id: 4
// }, {
//     $set: {
//         "spec.ram": 16,
//         "spec.screen": 10.7,
//         "spec.cpu": 2.66
//     }
// })
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 4 }, { name: 1, spec: 1 })
// o/p:{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   spec: {
//     ram: NumberInt('8'),
//     screen: Double('9.7'),
//     cpu: Double('1.66')
//   }
// }


// db.products.updateOne(
//  { _id: 4}, 
//  {
//     $set: {
//         "storage.0": 16,
//         "storage.1": 32
//     }
//  }
// )
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 4 }, { name: 1, storage: 1 });
// o/p:{
//   _id: NumberInt('4'),
//   name: 'SmartPad',
//   storage: [
//     NumberInt('16'),
//     NumberInt('32'),
//     NumberInt('1024')
//   ]
// }

//MongoDB updateMany() method examples
// db.products.insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
//  ])
// db.products.drop();

// db.products.updateMany(
//     {  price: 899}, 
//     { $set: {  price: 895 }}
// )
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('2'),
//   modifiedCount: NumberInt('2'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({
//     price: 895
// }, {
//     name: 1,
//     price: 1
// })
// o/p:{
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('895')
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberInt('895')
// }

// db.products.find({
//     price: { $gt: 700}
// }, {
//     name: 1,
//     price: 1,
//     spec: 1
// })
// o/p:{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('799'),
//   spec: {
//     ram: NumberInt('4'),
//     screen: Double('6.5'),
//     cpu: Double('2.66')
//   }
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   price: NumberInt('895'),
//   spec: {
//     ram: NumberInt('16'),
//     screen: Double('9.5'),
//     cpu: Double('3.66')
//   }
// }
// {
//   _id: NumberInt('3'),
//   name: 'SmartTablet',
//   price: NumberInt('895'),
//   spec: {
//     ram: NumberInt('12'),
//     screen: Double('9.7'),
//     cpu: Double('3.66')
//   }
// }

// db.products.updateMany({
//     price: { $gt: 700}
// }, {
//     $set: {
//         "spec.ram": 32,
//         "spec.screen": 9.8,
//         "spec.cpu": 5.66
//     }
// })
// o/p:db.products.updateMany({
//     _id: {
//         $in: [1, 2, 3]
//     }
// }, {
//     $set: {
//         "storage.0": 16,
//         "storage.1": 32
//     }
// })


// db.products.updateMany({
//     _id: {
//         $in: [1, 2, 3]
//     }
// }, {
//     $set: {
//         "storage.0": 16,
//         "storage.1": 32
//     }
// })

// db.products.find(
//    { _id: { $in: [1,2,3]}}, 
//    { name: 1, storage: 1}
// )
// o/p:{
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   storage: [
//     NumberInt('64'),
//     NumberInt('128'),
//     NumberInt('256')
//   ]
// }
// {
//   _id: NumberInt('2'),
//   name: 'xTablet',
//   storage: [
//     NumberInt('128'),
//     NumberInt('256'),
//     NumberInt('512')
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
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
//  ])

// db.products.updateOne({
//     _id: 5
// }, {
//     $min: {
//         price: 699
//     }
// })
// o/p{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('0'),
//   upsertedCount: NumberInt('0')
// }

// db.products.updateOne({
//     _id: 5
// }, {
//     $min: {
//         price: 499
//     }
// })

// db.products.find({ _id: 5 }, { name: 1, price: 1 })
// o/p:{
//   _id: NumberInt('5'),
//   name: 'SmartPhone',
//   price: NumberInt('499')
// }

// db.products.insertMany([
//     { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
//     { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
//     { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
//     { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
//     { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
//  ])

// db.products.updateOne({
//     _id: 1
// }, {
//     $max: {
//         price: 699
//     }
// })
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('0'),
//   upsertedCount: NumberInt('0')
// }

// db.products.updateOne({
//     _id: 1
// }, {
//     $max: {
//         price: 899
//     }
// })
// o/p:{
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: NumberInt('1'),
//   modifiedCount: NumberInt('1'),
//   upsertedCount: NumberInt('0')
// }

// db.products.find({ _id: 1 }, { name: 1, price: 1 })
// {
//   _id: NumberInt('1'),
//   name: 'xPhone',
//   price: NumberInt('899')
// }